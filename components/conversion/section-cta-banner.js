export default {
  id: 'section-cta-banner',
  name: 'CTA Banner',
  category: 'Conversion',
  description: 'Full-width call-to-action banner with bold messaging',
  html: `
    <section class="tryg-cta-banner">
      <div class="tryg-cta-banner__inner">
        <div class="tryg-cta-banner__content">
          <!-- EDIT: Banner headline -->
          <h2 class="tryg-cta-banner__title">Klar til at spare penge?</h2>
          <!-- EDIT: Banner subheadline -->
          <p class="tryg-cta-banner__subtitle">Få et uforpligtende tilbud på under 2 minutter. Ingen skjulte gebyrer.</p>
        </div>
        <div class="tryg-cta-banner__actions">
          <!-- EDIT: Primary CTA -->
          <a href="#form" class="tryg-cta-banner__btn" data-track="cta-banner-primary">Beregn pris nu</a>
          <!-- EDIT: Secondary text -->
          <span class="tryg-cta-banner__note">eller ring til os på <a href="tel:+4570111520">70 11 15 20</a></span>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-cta-banner {
      background: var(--color-primary);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-cta-banner__inner {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--spacing-lg);
    }
    .tryg-cta-banner__title {
      color: #fff;
      font-family: var(--font-heading);
      font-size: 2rem;
      margin-bottom: var(--spacing-sm);
    }
    .tryg-cta-banner__subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.125rem;
      margin: 0;
    }
    .tryg-cta-banner__actions {
      flex-shrink: 0;
      text-align: center;
    }
    .tryg-cta-banner__btn {
      display: inline-block;
      background: #fff;
      color: var(--color-primary);
      text-decoration: none;
      padding: 16px 40px;
      border-radius: var(--radius);
      font-size: 1.125rem;
      font-weight: 700;
      transition: transform 0.2s, box-shadow 0.2s;
      margin-bottom: var(--spacing-sm);
    }
    .tryg-cta-banner__btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
    .tryg-cta-banner__note {
      display: block;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.875rem;
    }
    .tryg-cta-banner__note a {
      color: #fff;
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .tryg-cta-banner__inner {
        flex-direction: column;
        text-align: center;
      }
      .tryg-cta-banner__title {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 600px) {
      .tryg-cta-banner {
        padding: var(--spacing-lg) var(--spacing-md);
      }
    }`,
  js: ''
};
