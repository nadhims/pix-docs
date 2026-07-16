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
          <a href="https://pixture.io/Public/Pricing">Pricing</a>
          <a href="https://pixture.io/Public/Download">Download</a>
          <a href="https://pixture.io/Account/Login">Login</a>
          <a href="https://pixture.io/Public/Terms">Terms</a>
          <a href="https://pixture.io/Public/Privacy">Privacy</a>
          <a href="https://pixture.io/Public/Refund">Refund Policy</a>
          <a href="https://pixture.io/Public/Contact">Contact</a>
          <a href="https://discord.gg/mvGb7YHmNh" target="_blank" rel="noopener noreferrer">Community</a>
        </div>
        <div className="pix-footer-contact">
          <span>Bogor, Indonesia</span>
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
