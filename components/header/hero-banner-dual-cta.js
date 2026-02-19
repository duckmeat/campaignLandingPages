export default {
  id: 'hero-banner-dual-cta',
  name: 'Hero Banner - Dual CTA',
  category: 'Header',
  description: 'Hero with two prominent call-to-action paths for different user journeys',
  html: `
    <section class="tryg-hero-dual">
      <div class="tryg-hero-dual__inner">
        <!-- EDIT: Hero headline -->
        <h1 class="tryg-hero-dual__title">Hvad vil du gerne forsikre?</h1>
        <!-- EDIT: Hero subheadline -->
        <p class="tryg-hero-dual__subtitle">Vælg din vej og få et skræddersyet tilbud på få minutter.</p>
        <div class="tryg-hero-dual__paths">
          <!-- EDIT: Path 1 -->
          <a href="#private" class="tryg-hero-dual__path" data-track="path-private">
            <div class="tryg-hero-dual__path-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="tryg-hero-dual__path-title">Privat</h2>
            <p class="tryg-hero-dual__path-text">Bil, hjem, rejse og sundhedsforsikring til dig og din familie.</p>
            <span class="tryg-hero-dual__path-cta">Kom i gang →</span>
          </a>
          <!-- EDIT: Path 2 -->
          <a href="#business" class="tryg-hero-dual__path" data-track="path-business">
            <div class="tryg-hero-dual__path-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="12" width="36" height="28" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M16 12V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v4" stroke="currentColor" stroke-width="2"/>
                <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="tryg-hero-dual__path-title">Erhverv</h2>
            <p class="tryg-hero-dual__path-text">Forsikringsløsninger til din virksomhed, stor som lille.</p>
            <span class="tryg-hero-dual__path-cta">Kom i gang →</span>
          </a>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-hero-dual {
      background: var(--color-bg-alt);
      padding: var(--spacing-xl) var(--spacing-lg);
      text-align: center;
    }
    .tryg-hero-dual__inner {
      max-width: 900px;
      margin: 0 auto;
    }
    .tryg-hero-dual__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.5rem;
      line-height: 1.2;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-dual__subtitle {
      color: var(--color-text-light);
      font-size: 1.125rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-hero-dual__paths {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-lg);
    }
    .tryg-hero-dual__path {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
      border-radius: var(--radius-card);
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
      border: 2px solid transparent;
    }
    .tryg-hero-dual__path:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-color: var(--color-primary);
    }
    .tryg-hero-dual__path-icon {
      color: var(--color-primary);
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-dual__path-title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-sm);
    }
    .tryg-hero-dual__path-text {
      color: var(--color-text-light);
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-dual__path-cta {
      color: var(--color-primary);
      font-weight: 600;
      font-size: 1rem;
    }
    @media (max-width: 600px) {
      .tryg-hero-dual {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-hero-dual__paths {
        grid-template-columns: 1fr;
      }
      .tryg-hero-dual__title {
        font-size: 1.75rem;
      }
      .tryg-hero-dual__path {
        padding: var(--spacing-lg);
      }
    }`,
  js: ''
};
