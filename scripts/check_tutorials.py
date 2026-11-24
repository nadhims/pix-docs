"""Check tutorial pages against the tutorial shape and copy rules.

Usage: python3 scripts/check_tutorials.py <file.md>...   |   --self-test
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
# Known H2s in their required order; "Step" stands for every "Step N: ..." heading.
ORDER = ["When to Use It", "Before You Start", "Prepare", "Step", "Check It Worked", "Tips", "Troubleshooting", "Related"]
REQUIRED = [h for h in ORDER if h != "Prepare"]
BARE_PIX = re.compile(r"\bPix\b(?!\s+(?:Pro|Starter|Design|AI|Ai|Station|Mobile)\b)")
SEAT = re.compile(r"\bseats?\b", re.I)
IMAGE = re.compile(r"!\[([^\]]*)\]\(([^)\s]+)[^)]*\)")
SHOT = re.compile(r"<!--\s*SHOT-NEEDED:\s*([a-z]+):\s*(.*?)\s*-->")


def _lines(path):
    """(line number, text) for prose lines: frontmatter and fenced code skipped."""
    text = Path(path).read_text(encoding="utf-8").split("\n")
    out, i, fence = [], 0, False
    if text and text[0].strip() == "---":
        i = 1
        while i < len(text) and text[i].strip() != "---":
            i += 1
        i += 1
    for n in range(i, len(text)):
        line = text[n]
        if line.lstrip().startswith("```"):
            fence = not fence
            continue
        if not fence:
            out.append((n + 1, line))
    return out


# Indonesian pages (i18n/id/...) use these H2s for the same sections.
ID_H2 = {"Kapan Dipakai": "When to Use It", "Sebelum Mulai": "Before You Start", "Persiapan": "Prepare",
         "Cek Hasilnya": "Check It Worked", "Kalau Ada Masalah": "Troubleshooting", "Terkait": "Related"}


def _key(h2):
    h2 = re.sub(r"\s*\{#[^}]+\}$", "", h2)  # explicit heading id (Indonesian pages carry the English anchor)
    return "Step" if re.match(r"(Step|Langkah) \d+", h2) else ID_H2.get(h2, h2)


def check(path):
    problems, h2s = [], []
    for n, line in _lines(path):
        m = re.match(r"##\s+(.+?)\s*$", line)
        if m and not line.startswith("###"):
            h2s.append((n, _key(m.group(1))))
        for alt, src in IMAGE.findall(line):
            if not alt.strip():
                problems.append(f"{path}:{n}: empty alt text on {src}")
            if src.startswith("/img/") and not (ROOT / "static" / src.lstrip("/")).exists():
                problems.append(f"{path}:{n}: image not found: {src}")
        prose = SHOT.sub("", IMAGE.sub("", re.sub(r"`[^`]*`", "", re.sub(r"\]\([^)]*\)", "]", line))))
        if "\u2014" in prose:
            problems.append(f"{path}:{n}: em dash")
        if SEAT.search(prose):
            problems.append(f"{path}:{n}: says seat (use computer)")
        if BARE_PIX.search(prose):
            problems.append(f"{path}:{n}: bare Pix (say Pixture, or Pix Pro / Pix Starter)")
    keys = [k for _, k in h2s]
    for h in REQUIRED:
        if h not in keys:
            problems.append(f"{path}: missing H2: {h}")
    ranks = [(n, ORDER.index(k)) for n, k in h2s if k in ORDER]
    for (n0, r0), (n1, r1) in zip(ranks, ranks[1:]):
        if r1 < r0:
            problems.append(f"{path}:{n1}: H2 order: {ORDER[r1]} after {ORDER[r0]}")
    return problems


def placeholders(path):
    return SHOT.findall(Path(path).read_text(encoding="utf-8"))


def main(paths):
    problems = [p for path in paths for p in check(path)]
    for path in paths:
        for kind, what in placeholders(path):
            print(f"{path}: SHOT-NEEDED {kind}: {what}")
    for p in problems:
        print(p)
    return 1 if problems else 0


if __name__ == "__main__" and sys.argv[1:] == ["--self-test"]:
    good, bad = "scripts/fixtures/good-tutorial.md", "scripts/fixtures/bad-tutorial.md"
    assert check(good) == [], check(good)
    problems = "\n".join(check(bad))
    for want in ["missing H2: When to Use It", "H2 order", "em dash", "seat", "bare Pix", "image not found", "empty alt"]:
        assert want in problems, f"{want!r} not reported:\n{problems}"
    assert placeholders(good) == [("windows", "BIOS power menu")], placeholders(good)
    assert check("scripts/fixtures/i18n/id/good-tutorial.md") == [], check("scripts/fixtures/i18n/id/good-tutorial.md")
    print("self-test OK")
elif __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
