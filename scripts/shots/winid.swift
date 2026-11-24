// Prints the window number of the frontmost normal window owned by the app named in argv[1].
// Used with `screencapture -l <id>` so a capture holds that one window and nothing else.
import CoreGraphics
import Foundation

let app = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "System Settings"
let info = CGWindowListCopyWindowInfo([.optionOnScreenOnly, .excludeDesktopElements], kCGNullWindowID) as? [[String: Any]] ?? []
for w in info where (w[kCGWindowOwnerName as String] as? String) == app && (w[kCGWindowLayer as String] as? Int) == 0 {
    print(w[kCGWindowNumber as String] as! Int)
    exit(0)
}
FileHandle.standardError.write("no window for \(app)\n".data(using: .utf8)!)
exit(1)
