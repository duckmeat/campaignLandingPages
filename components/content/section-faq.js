export default {
  id: 'section-faq',
  name: 'FAQ Accordion',
  category: 'Content',
  description: 'Frequently asked questions with expandable answers',
  html: `
    <section class="tryg-faq">
      <div class="tryg-faq__inner">
        <!-- EDIT: Section headline -->
        <h2 class="tryg-faq__title">Ofte stillede spørgsmål</h2>
        <!-- EDIT: Section subheadline -->
        <p class="tryg-faq__subtitle">Find svar på de mest almindelige spørgsmål om vores forsikringer.</p>
        <div class="tryg-faq__list">
          <!-- EDIT: FAQ 1 -->
          <details class="tryg-faq__item">
            <summary class="tryg-faq__question">Hvordan skifter jeg til Tryg?</summary>
            <div class="tryg-faq__answer">
              <p>Det er nemt at skifte til Tryg. Udfyld vores online formular, og vi sørger for resten. Vi opsiger din gamle forsikring og sikrer, at du er dækket fra dag ét.</p>
            </div>
          </details>
          <!-- EDIT: FAQ 2 -->
          <details class="tryg-faq__item">
            <summary class="tryg-faq__question">Hvad er selvrisikoen?</summary>
            <div class="tryg-faq__answer">
              <p>Selvrisikoen varierer afhængigt af din forsikringstype og pakke. Du kan se den præcise selvrisiko i dit tilbud, og du kan ofte vælge mellem forskellige niveauer for at tilpasse din præmie.</p>
            </div>
          </details>
          <!-- EDIT: FAQ 3 -->
          <details class="tryg-faq__item">
            <summary class="tryg-faq__question">Hvordan anmelder jeg en skade?</summary>
            <div class="tryg-faq__answer">
              <p>Du kan anmelde skader døgnet rundt via vores app, på tryg.dk eller ved at ringe til vores skadeservice. De fleste skader behandles inden for 24 timer.</p>
            </div>
          </details>
          <!-- EDIT: FAQ 4 -->
          <details class="tryg-faq__item">
            <summary class="tryg-faq__question">Kan jeg ændre min dækning undervejs?</summary>
            <div class="tryg-faq__answer">
              <p>Ja, du kan til enhver tid opgradere eller nedgradere din dækning. Log ind på Min Side eller kontakt os, så hjælper vi dig med at tilpasse din forsikring.</p>
            </div>
          </details>
          <!-- EDIT: FAQ 5 -->
          <details class="tryg-faq__item">
            <summary class="tryg-faq__question">Er der binding på forsikringen?</summary>
            <div class="tryg-faq__answer">
              <p>Nej, hos Tryg har vi ingen binding. Du kan opsige din forsikring med en måneds varsel til udgangen af en måned.</p>
            </div>
          </details>
        </div>
        <!-- EDIT: Contact CTA -->
        <div class="tryg-faq__contact">
          <p>Kan du ikke finde svar på dit spørgsmål?</p>
          <a href="#contact" class="tryg-faq__link" data-track="faq-contact">Kontakt os →</a>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-faq {
      background: var(--color-bg-alt);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-faq__inner {
      max-width: 720px;
      margin: 0 auto;
    }
    .tryg-faq__title {
      text-align: center;
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.25rem;
      margin-bottom: var(--spacing-md);
    }
    .tryg-faq__subtitle {
      text-align: center;
      color: var(--color-text-light);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-faq__list {
      margin-bottom: var(--spacing-xl);
    }
    .tryg-faq__item {
      background: var(--color-bg);
      border-radius: var(--radius-sm);
      margin-bottom: var(--spacing-md);
      overflow: hidden;
    }
    .tryg-faq__question {
      padding: var(--spacing-md) var(--spacing-lg);
      font-weight: 600;
      color: var(--color-text);
      cursor: pointer;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tryg-faq__question::-webkit-details-marker {
      display: none;
    }
    .tryg-faq__question::after {
      content: '+';
      font-size: 1.5rem;
      color: var(--color-primary);
      transition: transform 0.2s;
    }
    .tryg-faq__item[open] .tryg-faq__question::after {
      transform: rotate(45deg);
    }
    .tryg-faq__answer {
      padding: 0 var(--spacing-lg) var(--spacing-md);
      color: var(--color-text-light);
      line-height: 1.6;
    }
    .tryg-faq__answer p {
      margin: 0;
    }
    .tryg-faq__contact {
      text-align: center;
      padding-top: var(--spacing-lg);
      border-top: 1px solid var(--color-border);
    }
    .tryg-faq__contact p {
      color: var(--color-text-light);
      margin-bottom: var(--spacing-sm);
    }
    .tryg-faq__link {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: 600;
    }
    .tryg-faq__link:hover {
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      .tryg-faq {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-faq__title {
        font-size: 1.75rem;
      }
      .tryg-faq__question {
        padding: var(--spacing-md);
      }
      .tryg-faq__answer {
        padding: 0 var(--spacing-md) var(--spacing-md);
      }
    }`,
  js: ''
};
