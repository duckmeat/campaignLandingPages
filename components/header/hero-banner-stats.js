export default {
  id: 'hero-banner-stats',
  name: 'Hero Banner - With Stats',
  category: 'Header',
  description: 'Hero with prominent statistics row showcasing key metrics',
  html: `
    <section class="tryg-hero-stats">
      <div class="tryg-hero-stats__inner">
        <div class="tryg-hero-stats__content">
          <!-- EDIT: Hero headline -->
          <h1 class="tryg-hero-stats__title">Danmarks mest betroede forsikringsselskab</h1>
          <!-- EDIT: Hero subheadline -->
          <p class="tryg-hero-stats__subtitle">Oplev hvorfor millioner af danskere vælger Tryg til at beskytte det, der betyder mest.</p>
          <!-- EDIT: CTA button text -->
          <a href="#form" class="tryg-btn-primary" data-track="cta">Bliv kunde i dag</a>
        </div>
        <div class="tryg-hero-stats__numbers">
          <!-- EDIT: Stat 1 -->
          <div class="tryg-hero-stats__stat">
            <span class="tryg-hero-stats__value">4M+</span>
            <span class="tryg-hero-stats__label">Kunder</span>
          </div>
          <!-- EDIT: Stat 2 -->
          <div class="tryg-hero-stats__stat">
            <span class="tryg-hero-stats__value">100+</span>
            <span class="tryg-hero-stats__label">Års erfaring</span>
          </div>
          <!-- EDIT: Stat 3 -->
          <div class="tryg-hero-stats__stat">
            <span class="tryg-hero-stats__value">98%</span>
            <span class="tryg-hero-stats__label">Tilfredshed</span>
          </div>
          <!-- EDIT: Stat 4 -->
          <div class="tryg-hero-stats__stat">
            <span class="tryg-hero-stats__value">24/7</span>
            <span class="tryg-hero-stats__label">Support</span>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-hero-stats {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-hero-stats__inner {
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }
    .tryg-hero-stats__content {
      margin-bottom: var(--spacing-xl);
    }
    .tryg-hero-stats__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.75rem;
      line-height: 1.15;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-stats__subtitle {
      color: var(--color-text-light);
      font-size: 1.25rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-lg);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
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
    .tryg-hero-stats__numbers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--spacing-lg);
      padding-top: var(--spacing-xl);
      border-top: 1px solid var(--color-border);
    }
    .tryg-hero-stats__stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .tryg-hero-stats__value {
      font-family: var(--font-heading);
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-primary);
      line-height: 1;
      margin-bottom: var(--spacing-sm);
    }
    .tryg-hero-stats__label {
      font-size: 0.9375rem;
      color: var(--color-text-light);
    }
    @media (max-width: 768px) {
      .tryg-hero-stats__numbers {
        grid-template-columns: repeat(2, 1fr);
      }
      .tryg-hero-stats__title {
        font-size: 2rem;
      }
    }
    @media (max-width: 480px) {
      .tryg-hero-stats {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-hero-stats__value {
        font-size: 2rem;
      }
    }`,
  js: ''
};
