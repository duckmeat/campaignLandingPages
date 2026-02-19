export default {
  id: 'usp-strip',
  name: 'USP Strip',
  category: 'Content',
  description: 'Three-column icon + text block highlighting key selling points',
  html: `
    <section class="tryg-usp">
      <div class="tryg-usp__inner">
        <div class="tryg-usp__item">
          <div class="tryg-usp__icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="var(--color-primary)" stroke-width="2"/><path d="M14 20l4 4 8-8" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <!-- EDIT: USP 1 heading -->
          <h3 class="tryg-usp__title">Hurtig og nem</h3>
          <!-- EDIT: USP 1 body text -->
          <p class="tryg-usp__text">F\u00e5 dit tilbud p\u00e5 kun 2 minutter. Ingen ventetid, ingen papirer.</p>
        </div>
        <div class="tryg-usp__item">
          <div class="tryg-usp__icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="var(--color-primary)" stroke-width="2"/><path d="M20 12v8l5 3" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <!-- EDIT: USP 2 heading -->
          <h3 class="tryg-usp__title">Altid tilg\u00e6ngelig</h3>
          <!-- EDIT: USP 2 body text -->
          <p class="tryg-usp__text">Vores kundeservice er klar 24/7 \u2014 ring, chat eller skriv til os.</p>
        </div>
        <div class="tryg-usp__item">
          <div class="tryg-usp__icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="var(--color-primary)" stroke-width="2"/><path d="M15 22c0-3 5-5 5-5s5 2 5 5" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="16" r="3" stroke="var(--color-primary)" stroke-width="2"/></svg>
          </div>
          <!-- EDIT: USP 3 heading -->
          <h3 class="tryg-usp__title">Tryg og sikker</h3>
          <!-- EDIT: USP 3 body text -->
          <p class="tryg-usp__text">Over 4 millioner kunder stoler p\u00e5 Tryg. Vi er Nordens st\u00f8rste forsikringsselskab.</p>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-usp {
      background: var(--color-bg-alt);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-usp__inner {
      max-width: 960px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-lg);
      text-align: center;
    }
    .tryg-usp__icon {
      margin-bottom: var(--spacing-md);
    }
    .tryg-usp__title {
      font-family: var(--font-heading);
      font-size: 1.125rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-sm);
      font-weight: 700;
    }
    .tryg-usp__text {
      font-size: 0.9375rem;
      color: var(--color-text-light);
      line-height: 1.5;
    }
    @media (max-width: 600px) {
      .tryg-usp__inner {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
      }
      .tryg-usp {
        padding: var(--spacing-lg) var(--spacing-md);
      }
    }`,
  js: ''
};
