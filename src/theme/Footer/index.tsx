import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="pix-footer">
      <div className="pix-footer-inner">
        <a href="/" className="pix-footer-logo">
          <img src="/img/pix-logo-light.png" alt="Pix" />
        </a>
        <div className="pix-footer-links">
          <a href="/docs">Docs</a>
          <a href="https://pixapp.id/Public/Pricing">Pricing</a>
          <a href="https://pixapp.id/Public/Download">Download</a>
          <a href="https://pixapp.id/Account/Login">Login</a>
          <a href="https://pixapp.id/Public/Terms">Terms</a>
          <a href="https://pixapp.id/Public/Privacy">Privacy</a>
          <a href="https://pixapp.id/Public/Refund">Refund Policy</a>
          <a href="https://pixapp.id/Public/Contact">Contact</a>
          <a href="https://discord.gg/mvGb7YHmNh" target="_blank" rel="noopener noreferrer">Community</a>
        </div>
        <div className="pix-footer-contact">
          <span>MBR, Katulampa, Bogor, Indonesia 16144</span>
          <span>&middot;</span>
          <a href="https://wa.me/6285121355870">+62 851-2135-5870</a>
          <span>&middot;</span>
          <a href="mailto:contact@pixapp.id">contact@pixapp.id</a>
        </div>
        <div className="pix-footer-copy">
          &copy; {new Date().getFullYear()} Pix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
