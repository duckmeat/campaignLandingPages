export default {
  id: 'hero-banner',
  name: 'Hero Banner',
  category: 'Header',
  description: 'Full-width hero with headline, subheadline, and CTA button',
  html: `
    <section class="tryg-hero">
      <div class="tryg-hero__inner">
        <!-- EDIT: Hero headline -->
        <h1 class="tryg-hero__title">Spar penge p\u00e5 din forsikring</h1>
        <!-- EDIT: Hero subheadline -->
        <p class="tryg-hero__subtitle">F\u00e5 Danmarks bedste d\u00e6kning til en sk\u00e6rp pris. Beregn dit tilbud p\u00e5 kun 2 minutter.</p>
        <!-- EDIT: CTA button text -->
        <a href="#form" class="tryg-btn-primary" data-track="cta">F\u00e5 et tilbud nu</a>
      </div>
    </section>`,
  css: `
    .tryg-hero {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
      text-align: center;
    }
    .tryg-hero__inner {
      max-width: 720px;
      margin: 0 auto;
    }
    .tryg-hero__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.5rem;
      line-height: 1.2;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero__subtitle {
      color: var(--color-text-light);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-lg);
      line-height: 1.5;
    }
    .tryg-btn-primary {
      display: inline-block;
      background: var(--color-primary);
      color: #fff;
      text-decoration: none;
      padding: 14px 36px;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 600;
      transition: background 0.2s;
    }
    .tryg-btn-primary:hover {
      background: var(--color-primary-dark);
    }
    @media (max-width: 600px) {
      .tryg-hero {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-hero__title {
        font-size: 1.75rem;
      }
      .tryg-hero__subtitle {
        font-size: 1rem;
      }
    }`,
  js: ''
};
