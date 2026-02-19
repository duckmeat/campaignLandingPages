export default {
  id: 'section-steps',
  name: 'How It Works Steps',
  category: 'Content',
  description: 'Numbered step-by-step process guide',
  html: `
    <section class="tryg-steps">
      <div class="tryg-steps__inner">
        <!-- EDIT: Section headline -->
        <h2 class="tryg-steps__title">Sådan kommer du i gang</h2>
        <!-- EDIT: Section subheadline -->
        <p class="tryg-steps__subtitle">Tre nemme trin til din nye forsikring.</p>
        <div class="tryg-steps__grid">
          <!-- EDIT: Step 1 -->
          <div class="tryg-steps__item">
            <div class="tryg-steps__number">1</div>
            <h3 class="tryg-steps__item-title">Udfyld formularen</h3>
            <p class="tryg-steps__item-text">Besvar nogle få spørgsmål om dig og det, du vil forsikre. Det tager kun 2 minutter.</p>
          </div>
          <div class="tryg-steps__connector"></div>
          <!-- EDIT: Step 2 -->
          <div class="tryg-steps__item">
            <div class="tryg-steps__number">2</div>
            <h3 class="tryg-steps__item-title">Få dit tilbud</h3>
            <p class="tryg-steps__item-text">Vi beregner din pris med det samme. Ingen forpligtelser – du bestemmer selv.</p>
          </div>
          <div class="tryg-steps__connector"></div>
          <!-- EDIT: Step 3 -->
          <div class="tryg-steps__item">
            <div class="tryg-steps__number">3</div>
            <h3 class="tryg-steps__item-title">Du er dækket</h3>
            <p class="tryg-steps__item-text">Godkend tilbuddet og din forsikring træder i kraft med det samme.</p>
          </div>
        </div>
        <!-- EDIT: CTA button -->
        <div class="tryg-steps__cta">
          <a href="#form" class="tryg-btn-primary" data-track="steps-cta">Start nu</a>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-steps {
      background: var(--color-bg-alt);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-steps__inner {
      max-width: 1000px;
      margin: 0 auto;
    }
    .tryg-steps__title {
      text-align: center;
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.25rem;
      margin-bottom: var(--spacing-md);
    }
    .tryg-steps__subtitle {
      text-align: center;
      color: var(--color-text-light);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-steps__grid {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 0;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-steps__item {
      flex: 1;
      max-width: 280px;
      text-align: center;
      padding: 0 var(--spacing-md);
    }
    .tryg-steps__connector {
      flex-shrink: 0;
      width: 60px;
      height: 2px;
      background: var(--color-border);
      margin-top: 32px;
    }
    .tryg-steps__number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      background: var(--color-primary);
      color: #fff;
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      border-radius: 50%;
      margin-bottom: var(--spacing-md);
    }
    .tryg-steps__item-title {
      font-family: var(--font-heading);
      font-size: 1.25rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-sm);
      font-weight: 700;
    }
    .tryg-steps__item-text {
      font-size: 0.9375rem;
      color: var(--color-text-light);
      line-height: 1.5;
    }
    .tryg-steps__cta {
      text-align: center;
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
    @media (max-width: 768px) {
      .tryg-steps__grid {
        flex-direction: column;
        align-items: center;
      }
      .tryg-steps__connector {
        width: 2px;
        height: 40px;
        margin: var(--spacing-md) 0;
      }
      .tryg-steps__item {
        max-width: 100%;
      }
    }
    @media (max-width: 600px) {
      .tryg-steps {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-steps__title {
        font-size: 1.75rem;
      }
    }`,
  js: ''
};
