export default {
  id: 'footer',
  name: 'Footer',
  category: 'Footer',
  description: 'Legal footer with Tryg logo, disclaimer, and policy links',
  html: `
    <footer class="tryg-footer">
      <div class="tryg-footer__inner">
        <div class="tryg-footer__logo">
          <!-- EDIT: Footer logo / brand name -->
          <svg width="80" height="28" viewBox="0 0 80 28"><rect width="80" height="28" rx="4" fill="var(--color-primary)"/><text x="40" y="18" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">Tryg</text></svg>
        </div>
        <!-- EDIT: Legal disclaimer text -->
        <p class="tryg-footer__disclaimer">Tryg Forsikring A/S \u00b7 CVR-nr. 24260666 \u00b7 Klausdalsbrove 601 \u00b7 2750 Ballerup. Alle forsikringer er underlagt Trygs generelle forsikringsbetingelser.</p>
        <div class="tryg-footer__links">
          <!-- EDIT: Privacy policy link -->
          <a href="https://tryg.dk/privatlivspolitik" class="tryg-footer__link">Privatlivspolitik</a>
          <!-- EDIT: Cookie settings link -->
          <a href="#" class="tryg-footer__link" onclick="return false;">Cookieindstillinger</a>
        </div>
      </div>
    </footer>`,
  css: `
    .tryg-footer {
      background: var(--color-bg-alt);
      padding: var(--spacing-lg);
      text-align: center;
      border-top: 4px solid var(--color-primary);
    }
    .tryg-footer__inner {
      max-width: 720px;
      margin: 0 auto;
    }
    .tryg-footer__logo {
      margin-bottom: var(--spacing-md);
    }
    .tryg-footer__disclaimer {
      font-size: 0.8125rem;
      color: var(--color-text-light);
      line-height: 1.5;
      margin-bottom: var(--spacing-md);
    }
    .tryg-footer__links {
      display: flex;
      justify-content: center;
      gap: var(--spacing-lg);
    }
    .tryg-footer__link {
      color: var(--color-text);
      text-decoration: underline;
      font-size: 0.8125rem;
      transition: color 0.2s;
    }
    .tryg-footer__link:hover {
      color: var(--color-primary);
    }
    @media (max-width: 600px) {
      .tryg-footer {
        padding: var(--spacing-md);
      }
      .tryg-footer__links {
        flex-direction: column;
        gap: var(--spacing-sm);
      }
    }`,
  js: ''
};
