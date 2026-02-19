export default {
  id: 'section-features-grid',
  name: 'Features Grid',
  category: 'Content',
  description: 'Four-column grid showcasing product features with icons',
  html: `
    <section class="tryg-features">
      <div class="tryg-features__inner">
        <!-- EDIT: Section headline -->
        <h2 class="tryg-features__title">Hvorfor vælge Tryg?</h2>
        <!-- EDIT: Section subheadline -->
        <p class="tryg-features__subtitle">Vi gør forsikring nemt, gennemsigtigt og tilgængeligt for alle.</p>
        <div class="tryg-features__grid">
          <!-- EDIT: Feature 1 -->
          <div class="tryg-features__item">
            <div class="tryg-features__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L6 14v16c0 9 8 14 18 18 10-4 18-9 18-18V14L24 4z" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
                <path d="M16 24l6 6 10-10" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="tryg-features__item-title">Omfattende dækning</h3>
            <p class="tryg-features__item-text">Beskyt alt det der betyder mest med vores markedsledende dækning.</p>
          </div>
          <!-- EDIT: Feature 2 -->
          <div class="tryg-features__item">
            <div class="tryg-features__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="var(--color-primary)" stroke-width="2"/>
                <path d="M24 12v12l8 4" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="tryg-features__item-title">Hurtig behandling</h3>
            <p class="tryg-features__item-text">De fleste skader behandles inden for 24 timer. Ingen unødvendig ventetid.</p>
          </div>
          <!-- EDIT: Feature 3 -->
          <div class="tryg-features__item">
            <div class="tryg-features__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="10" width="36" height="28" rx="2" stroke="var(--color-primary)" stroke-width="2"/>
                <path d="M6 18h36M14 26h8M14 32h12" stroke="var(--color-primary)" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="tryg-features__item-title">Digital selvbetjening</h3>
            <p class="tryg-features__item-text">Administrer dine forsikringer online når det passer dig.</p>
          </div>
          <!-- EDIT: Feature 4 -->
          <div class="tryg-features__item">
            <div class="tryg-features__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M40 32c0 6.627-7.163 12-16 12S8 38.627 8 32c0-6.627 7.163-12 16-12s16 5.373 16 12z" stroke="var(--color-primary)" stroke-width="2"/>
                <circle cx="24" cy="16" r="8" stroke="var(--color-primary)" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="tryg-features__item-title">Personlig rådgivning</h3>
            <p class="tryg-features__item-text">Få hjælp fra dedikerede rådgivere der kender dine behov.</p>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-features {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-features__inner {
      max-width: 1120px;
      margin: 0 auto;
    }
    .tryg-features__title {
      text-align: center;
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.25rem;
      margin-bottom: var(--spacing-md);
    }
    .tryg-features__subtitle {
      text-align: center;
      color: var(--color-text-light);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-xl);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .tryg-features__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--spacing-lg);
    }
    .tryg-features__item {
      text-align: center;
      padding: var(--spacing-lg);
    }
    .tryg-features__icon {
      margin-bottom: var(--spacing-md);
    }
    .tryg-features__item-title {
      font-family: var(--font-heading);
      font-size: 1.125rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-sm);
      font-weight: 700;
    }
    .tryg-features__item-text {
      font-size: 0.9375rem;
      color: var(--color-text-light);
      line-height: 1.5;
    }
    @media (max-width: 900px) {
      .tryg-features__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .tryg-features {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-features__grid {
        grid-template-columns: 1fr;
      }
      .tryg-features__title {
        font-size: 1.75rem;
      }
    }`,
  js: ''
};
