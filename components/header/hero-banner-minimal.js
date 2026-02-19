export default {
  id: 'hero-banner-minimal',
  name: 'Hero Banner - Minimal',
  category: 'Header',
  description: 'Clean, typography-focused hero with minimal design',
  html: `
    <section class="tryg-hero-minimal">
      <div class="tryg-hero-minimal__inner">
        <!-- EDIT: Small eyebrow text -->
        <span class="tryg-hero-minimal__eyebrow">Tryg Forsikring</span>
        <!-- EDIT: Hero headline -->
        <h1 class="tryg-hero-minimal__title">Simpel forsikring.<br>Ingen overraskelser.</h1>
        <!-- EDIT: Hero subheadline -->
        <p class="tryg-hero-minimal__subtitle">Vi tror på gennemsigtighed. Få et tilbud på under 2 minutter med priser du kan stole på.</p>
        <!-- EDIT: CTA button text -->
        <a href="#form" class="tryg-btn-minimal" data-track="cta">Beregn pris</a>
        <!-- EDIT: Secondary link -->
        <a href="#compare" class="tryg-hero-minimal__link" data-track="compare">Sammenlign vores produkter →</a>
      </div>
    </section>`,
  css: `
    .tryg-hero-minimal {
      background: var(--color-bg);
      padding: 120px var(--spacing-lg);
      text-align: center;
    }
    .tryg-hero-minimal__inner {
      max-width: 680px;
      margin: 0 auto;
    }
    .tryg-hero-minimal__eyebrow {
      display: inline-block;
      color: var(--color-primary);
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-minimal__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 3.5rem;
      line-height: 1.1;
      margin-bottom: var(--spacing-lg);
      font-weight: 700;
    }
    .tryg-hero-minimal__subtitle {
      color: var(--color-text-light);
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-btn-minimal {
      display: inline-block;
      background: var(--color-text);
      color: #fff;
      text-decoration: none;
      padding: 18px 48px;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 600;
      transition: background 0.2s;
      margin-bottom: var(--spacing-lg);
    }
    .tryg-btn-minimal:hover {
      background: var(--color-primary);
    }
    .tryg-hero-minimal__link {
      display: block;
      color: var(--color-text-light);
      text-decoration: none;
      font-size: 0.9375rem;
      transition: color 0.2s;
    }
    .tryg-hero-minimal__link:hover {
      color: var(--color-primary);
    }
    @media (max-width: 600px) {
      .tryg-hero-minimal {
        padding: var(--spacing-xl) var(--spacing-md);
      }
      .tryg-hero-minimal__title {
        font-size: 2.25rem;
      }
      .tryg-hero-minimal__subtitle {
        font-size: 1rem;
      }
    }`,
  js: ''
};
