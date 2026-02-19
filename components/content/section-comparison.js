export default {
  id: 'section-comparison',
  name: 'Comparison Table',
  category: 'Content',
  description: 'Side-by-side comparison of features or before/after scenarios',
  html: `
    <section class="tryg-comparison">
      <div class="tryg-comparison__inner">
        <!-- EDIT: Section headline -->
        <h2 class="tryg-comparison__title">Hvorfor skifte til Tryg?</h2>
        <!-- EDIT: Section subheadline -->
        <p class="tryg-comparison__subtitle">Se forskellen på traditionel forsikring og Trygs moderne tilgang.</p>
        <div class="tryg-comparison__table">
          <div class="tryg-comparison__column tryg-comparison__column--before">
            <!-- EDIT: Before column header -->
            <div class="tryg-comparison__header">
              <span class="tryg-comparison__label">Andre selskaber</span>
            </div>
            <ul class="tryg-comparison__list">
              <!-- EDIT: Before items -->
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✗</span>
                Lange ventetider på telefonen
              </li>
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✗</span>
                Komplicerede vilkår
              </li>
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✗</span>
                Skjulte gebyrer
              </li>
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✗</span>
                Lang sagsbehandling
              </li>
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✗</span>
                Binding i 12 måneder
              </li>
            </ul>
          </div>
          <div class="tryg-comparison__column tryg-comparison__column--after">
            <!-- EDIT: After column header -->
            <div class="tryg-comparison__header">
              <span class="tryg-comparison__label">Med Tryg</span>
            </div>
            <ul class="tryg-comparison__list">
              <!-- EDIT: After items -->
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✓</span>
                24/7 support via chat og telefon
              </li>
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✓</span>
                Klart og tydeligt sprog
              </li>
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✓</span>
                Gennemsigtige priser
              </li>
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✓</span>
                Svar inden for 24 timer
              </li>
              <li class="tryg-comparison__item">
                <span class="tryg-comparison__icon">✓</span>
                Ingen binding
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-comparison {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-comparison__inner {
      max-width: 900px;
      margin: 0 auto;
    }
    .tryg-comparison__title {
      text-align: center;
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.25rem;
      margin-bottom: var(--spacing-md);
    }
    .tryg-comparison__subtitle {
      text-align: center;
      color: var(--color-text-light);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-comparison__table {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-lg);
    }
    .tryg-comparison__column {
      border-radius: var(--radius-card);
      overflow: hidden;
    }
    .tryg-comparison__column--before {
      background: var(--color-bg-alt);
    }
    .tryg-comparison__column--after {
      background: var(--color-primary);
    }
    .tryg-comparison__header {
      padding: var(--spacing-md) var(--spacing-lg);
      text-align: center;
    }
    .tryg-comparison__column--before .tryg-comparison__header {
      background: var(--color-border);
    }
    .tryg-comparison__column--after .tryg-comparison__header {
      background: var(--color-primary-dark);
    }
    .tryg-comparison__label {
      font-family: var(--font-heading);
      font-size: 1.125rem;
      font-weight: 700;
    }
    .tryg-comparison__column--before .tryg-comparison__label {
      color: var(--color-text);
    }
    .tryg-comparison__column--after .tryg-comparison__label {
      color: #fff;
    }
    .tryg-comparison__list {
      list-style: none;
      padding: var(--spacing-lg);
      margin: 0;
    }
    .tryg-comparison__item {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-sm);
      padding: var(--spacing-sm) 0;
      font-size: 0.9375rem;
      line-height: 1.4;
    }
    .tryg-comparison__column--before .tryg-comparison__item {
      color: var(--color-text-light);
    }
    .tryg-comparison__column--after .tryg-comparison__item {
      color: rgba(255, 255, 255, 0.9);
    }
    .tryg-comparison__icon {
      flex-shrink: 0;
      width: 20px;
      text-align: center;
      font-weight: 700;
    }
    .tryg-comparison__column--before .tryg-comparison__icon {
      color: #999;
    }
    .tryg-comparison__column--after .tryg-comparison__icon {
      color: #fff;
    }
    @media (max-width: 600px) {
      .tryg-comparison {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-comparison__table {
        grid-template-columns: 1fr;
      }
      .tryg-comparison__title {
        font-size: 1.75rem;
      }
    }`,
  js: ''
};
