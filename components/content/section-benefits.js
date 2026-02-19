export default {
  id: 'section-benefits',
  name: 'Benefits List',
  category: 'Content',
  description: 'Vertical list of benefits with icons and descriptions',
  html: `
    <section class="tryg-benefits">
      <div class="tryg-benefits__inner">
        <div class="tryg-benefits__content">
          <!-- EDIT: Section headline -->
          <h2 class="tryg-benefits__title">Alt hvad du får med din forsikring</h2>
          <!-- EDIT: Section subheadline -->
          <p class="tryg-benefits__subtitle">En komplet pakke af fordele der gør dit liv nemmere.</p>
        </div>
        <div class="tryg-benefits__list">
          <!-- EDIT: Benefit 1 -->
          <div class="tryg-benefits__item">
            <div class="tryg-benefits__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="tryg-benefits__text">
              <h3 class="tryg-benefits__item-title">Gratis vejhjælp i hele Europa</h3>
              <p class="tryg-benefits__item-desc">Få hjælp 24/7 hvor som helst i Europa, uden ekstra omkostninger.</p>
            </div>
          </div>
          <!-- EDIT: Benefit 2 -->
          <div class="tryg-benefits__item">
            <div class="tryg-benefits__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="tryg-benefits__text">
              <h3 class="tryg-benefits__item-title">Erstatningsbil ved skade</h3>
              <p class="tryg-benefits__item-desc">Kør videre mens din bil repareres – vi stiller en erstatningsbil til rådighed.</p>
            </div>
          </div>
          <!-- EDIT: Benefit 3 -->
          <div class="tryg-benefits__item">
            <div class="tryg-benefits__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="tryg-benefits__text">
              <h3 class="tryg-benefits__item-title">Ny til ny ved totalskade</h3>
              <p class="tryg-benefits__item-desc">Er din bil under 2 år gammel, får du en helt ny bil ved totalskade.</p>
            </div>
          </div>
          <!-- EDIT: Benefit 4 -->
          <div class="tryg-benefits__item">
            <div class="tryg-benefits__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="tryg-benefits__text">
              <h3 class="tryg-benefits__item-title">Ingen selvrisiko ved reparation</h3>
              <p class="tryg-benefits__item-desc">Ved skader under 10.000 kr. betaler du ingen selvrisiko.</p>
            </div>
          </div>
          <!-- EDIT: Benefit 5 -->
          <div class="tryg-benefits__item">
            <div class="tryg-benefits__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="tryg-benefits__text">
              <h3 class="tryg-benefits__item-title">Familiebonus på 15%</h3>
              <p class="tryg-benefits__item-desc">Samler du flere forsikringer hos os, sparer du automatisk 15%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-benefits {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-benefits__inner {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-xl);
      align-items: start;
    }
    .tryg-benefits__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.25rem;
      margin-bottom: var(--spacing-md);
      line-height: 1.2;
    }
    .tryg-benefits__subtitle {
      color: var(--color-text-light);
      font-size: 1.125rem;
      line-height: 1.5;
    }
    .tryg-benefits__list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }
    .tryg-benefits__item {
      display: flex;
      gap: var(--spacing-md);
      align-items: flex-start;
    }
    .tryg-benefits__icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      background: rgba(237, 28, 36, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tryg-benefits__text {
      flex: 1;
    }
    .tryg-benefits__item-title {
      font-family: var(--font-heading);
      font-size: 1rem;
      color: var(--color-text);
      margin-bottom: 4px;
      font-weight: 700;
    }
    .tryg-benefits__item-desc {
      font-size: 0.9375rem;
      color: var(--color-text-light);
      line-height: 1.5;
      margin: 0;
    }
    @media (max-width: 768px) {
      .tryg-benefits__inner {
        grid-template-columns: 1fr;
      }
      .tryg-benefits__content {
        text-align: center;
      }
    }
    @media (max-width: 600px) {
      .tryg-benefits {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-benefits__title {
        font-size: 1.75rem;
      }
    }`,
  js: ''
};
