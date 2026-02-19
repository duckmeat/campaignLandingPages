export default {
  id: 'hero-banner-card',
  name: 'Hero Banner - Card Overlay',
  category: 'Header',
  description: 'Hero with floating card containing form or key content',
  html: `
    <section class="tryg-hero-card">
      <div class="tryg-hero-card__bg"></div>
      <div class="tryg-hero-card__inner">
        <div class="tryg-hero-card__content">
          <!-- EDIT: Hero headline -->
          <h1 class="tryg-hero-card__title">Find den rette forsikring til dig</h1>
          <!-- EDIT: Hero subheadline -->
          <p class="tryg-hero-card__subtitle">Vælg mellem Danmarks mest fleksible forsikringspakker.</p>
        </div>
        <div class="tryg-hero-card__card">
          <!-- EDIT: Card headline -->
          <h2 class="tryg-hero-card__card-title">Beregn din pris</h2>
          <div class="tryg-hero-card__options">
            <!-- EDIT: Option 1 -->
            <button class="tryg-hero-card__option" data-track="option-car">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="12" width="24" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
                <circle cx="10" cy="24" r="3" stroke="currentColor" stroke-width="2"/>
                <circle cx="22" cy="24" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span>Bil</span>
            </button>
            <!-- EDIT: Option 2 -->
            <button class="tryg-hero-card__option" data-track="option-home">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M4 14L16 4L28 14V26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V14Z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 28V18H20V28" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span>Hjem</span>
            </button>
            <!-- EDIT: Option 3 -->
            <button class="tryg-hero-card__option" data-track="option-health">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 28C16 28 4 20 4 12C4 7.58 7.58 4 12 4C14.12 4 16 5 16 5C16 5 17.88 4 20 4C24.42 4 28 7.58 28 12C28 20 16 28 16 28Z" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span>Sundhed</span>
            </button>
            <!-- EDIT: Option 4 -->
            <button class="tryg-hero-card__option" data-track="option-travel">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28Z" stroke="currentColor" stroke-width="2"/>
                <path d="M4 16H28M16 4C12.5 8 12.5 24 16 28C19.5 24 19.5 8 16 4Z" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span>Rejse</span>
            </button>
          </div>
          <!-- EDIT: CTA button text -->
          <a href="#form" class="tryg-btn-primary tryg-btn-primary--full" data-track="cta">Fortsæt</a>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-hero-card {
      position: relative;
      min-height: 600px;
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-hero-card__bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%);
    }
    .tryg-hero-card__inner {
      position: relative;
      max-width: 1120px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: var(--spacing-xl);
      align-items: center;
    }
    .tryg-hero-card__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 3rem;
      line-height: 1.15;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-card__subtitle {
      color: var(--color-text-light);
      font-size: 1.25rem;
      line-height: 1.5;
    }
    .tryg-hero-card__card {
      background: #fff;
      border-radius: var(--radius-card);
      padding: var(--spacing-lg);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }
    .tryg-hero-card__card-title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-lg);
      text-align: center;
    }
    .tryg-hero-card__options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-lg);
    }
    .tryg-hero-card__option {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-sm);
      padding: var(--spacing-md);
      border: 2px solid var(--color-border);
      border-radius: var(--radius-sm);
      background: var(--color-bg);
      cursor: pointer;
      transition: border-color 0.2s, background 0.2s;
      color: var(--color-text);
      font-size: 0.875rem;
      font-weight: 600;
    }
    .tryg-hero-card__option:hover {
      border-color: var(--color-primary);
      background: rgba(237, 28, 36, 0.05);
    }
    .tryg-btn-primary--full {
      display: block;
      width: 100%;
      text-align: center;
      background: var(--color-primary);
      color: #fff;
      text-decoration: none;
      padding: 14px 36px;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 600;
      transition: background 0.2s;
    }
    .tryg-btn-primary--full:hover {
      background: var(--color-primary-dark);
    }
    @media (max-width: 900px) {
      .tryg-hero-card__inner {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .tryg-hero-card__title {
        font-size: 2rem;
      }
      .tryg-hero-card__card {
        max-width: 400px;
        margin: 0 auto;
      }
    }`,
  js: ''
};
