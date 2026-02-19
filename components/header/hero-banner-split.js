export default {
  id: 'hero-banner-split',
  name: 'Hero Banner - Split Layout',
  category: 'Header',
  description: 'Two-column hero with text on left and image placeholder on right',
  html: `
    <section class="tryg-hero-split">
      <div class="tryg-hero-split__inner">
        <div class="tryg-hero-split__content">
          <!-- EDIT: Hero headline -->
          <h1 class="tryg-hero-split__title">Din sikkerhed er vores prioritet</h1>
          <!-- EDIT: Hero subheadline -->
          <p class="tryg-hero-split__subtitle">Med over 100 års erfaring leverer vi forsikringer, der passer til dit liv. Få et skræddersyet tilbud i dag.</p>
          <div class="tryg-hero-split__ctas">
            <!-- EDIT: Primary CTA -->
            <a href="#form" class="tryg-btn-primary" data-track="cta-primary">Beregn pris</a>
            <!-- EDIT: Secondary CTA -->
            <a href="#learn-more" class="tryg-btn-secondary" data-track="cta-secondary">Læs mere</a>
          </div>
        </div>
        <div class="tryg-hero-split__media">
          <!-- EDIT: Hero image -->
          <div class="tryg-hero-split__image-placeholder">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="8" fill="var(--color-bg-alt)"/>
              <path d="M35 65L50 50L60 60L75 45" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="40" cy="40" r="8" fill="var(--color-primary)" opacity="0.3"/>
            </svg>
            <span>Billede her</span>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-hero-split {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-hero-split__inner {
      max-width: 1120px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-xl);
      align-items: center;
    }
    .tryg-hero-split__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.75rem;
      line-height: 1.15;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-split__subtitle {
      color: var(--color-text-light);
      font-size: 1.125rem;
      line-height: 1.6;
      margin-bottom: var(--spacing-lg);
    }
    .tryg-hero-split__ctas {
      display: flex;
      gap: var(--spacing-md);
      flex-wrap: wrap;
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
    .tryg-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--color-primary);
      text-decoration: none;
      padding: 14px 36px;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 600;
      border: 2px solid var(--color-primary);
      transition: background 0.2s, color 0.2s;
    }
    .tryg-btn-secondary:hover {
      background: var(--color-primary);
      color: #fff;
    }
    .tryg-hero-split__media {
      display: flex;
      justify-content: center;
    }
    .tryg-hero-split__image-placeholder {
      width: 100%;
      aspect-ratio: 4/3;
      background: var(--color-bg-alt);
      border-radius: var(--radius-card);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-md);
      color: var(--color-text-light);
      font-size: 0.875rem;
    }
    @media (max-width: 768px) {
      .tryg-hero-split__inner {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .tryg-hero-split__ctas {
        justify-content: center;
      }
      .tryg-hero-split__title {
        font-size: 2rem;
      }
      .tryg-hero-split__media {
        order: -1;
      }
    }`,
  js: ''
};
