export default {
  id: 'hero-banner-search',
  name: 'Hero Banner - Search Focus',
  category: 'Header',
  description: 'Hero with prominent search/input field as primary action',
  html: `
    <section class="tryg-hero-search">
      <div class="tryg-hero-search__inner">
        <!-- EDIT: Hero headline -->
        <h1 class="tryg-hero-search__title">Find den perfekte forsikring</h1>
        <!-- EDIT: Hero subheadline -->
        <p class="tryg-hero-search__subtitle">Indtast dit postnummer og se priser med det samme.</p>
        <form class="tryg-hero-search__form" data-track="search-form">
          <div class="tryg-hero-search__input-group">
            <!-- EDIT: Input placeholder -->
            <input type="text" class="tryg-hero-search__input" placeholder="Indtast dit postnummer" pattern="[0-9]{4}" maxlength="4">
            <button type="submit" class="tryg-hero-search__btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="2"/>
                <path d="M13.5 13.5L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <!-- EDIT: Button text -->
              <span>Søg</span>
            </button>
          </div>
          <!-- EDIT: Help text -->
          <p class="tryg-hero-search__help">F.eks. 2100 for København Ø</p>
        </form>
        <div class="tryg-hero-search__popular">
          <!-- EDIT: Popular searches label -->
          <span class="tryg-hero-search__popular-label">Populære:</span>
          <!-- EDIT: Popular search tags -->
          <a href="#bilforsikring" class="tryg-hero-search__tag">Bilforsikring</a>
          <a href="#indboforsikring" class="tryg-hero-search__tag">Indboforsikring</a>
          <a href="#rejseforsikring" class="tryg-hero-search__tag">Rejseforsikring</a>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-hero-search {
      background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%);
      padding: var(--spacing-xl) var(--spacing-lg);
      text-align: center;
    }
    .tryg-hero-search__inner {
      max-width: 640px;
      margin: 0 auto;
    }
    .tryg-hero-search__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.5rem;
      line-height: 1.2;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-search__subtitle {
      color: var(--color-text-light);
      font-size: 1.125rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-lg);
    }
    .tryg-hero-search__form {
      margin-bottom: var(--spacing-lg);
    }
    .tryg-hero-search__input-group {
      display: flex;
      background: var(--color-bg);
      border: 2px solid var(--color-border);
      border-radius: var(--radius);
      overflow: hidden;
      transition: border-color 0.2s;
    }
    .tryg-hero-search__input-group:focus-within {
      border-color: var(--color-primary);
    }
    .tryg-hero-search__input {
      flex: 1;
      border: none;
      padding: 18px 24px;
      font-size: 1.125rem;
      outline: none;
      background: transparent;
    }
    .tryg-hero-search__btn {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      background: var(--color-primary);
      color: #fff;
      border: none;
      padding: 18px 32px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .tryg-hero-search__btn:hover {
      background: var(--color-primary-dark);
    }
    .tryg-hero-search__help {
      font-size: 0.875rem;
      color: var(--color-text-light);
      margin-top: var(--spacing-sm);
    }
    .tryg-hero-search__popular {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-sm);
      flex-wrap: wrap;
    }
    .tryg-hero-search__popular-label {
      font-size: 0.875rem;
      color: var(--color-text-light);
    }
    .tryg-hero-search__tag {
      display: inline-block;
      background: var(--color-bg);
      color: var(--color-text);
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 50px;
      font-size: 0.875rem;
      border: 1px solid var(--color-border);
      transition: border-color 0.2s, background 0.2s;
    }
    .tryg-hero-search__tag:hover {
      border-color: var(--color-primary);
      background: rgba(237, 28, 36, 0.05);
    }
    @media (max-width: 600px) {
      .tryg-hero-search {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-hero-search__title {
        font-size: 1.75rem;
      }
      .tryg-hero-search__input-group {
        flex-direction: column;
        border-radius: var(--radius-sm);
      }
      .tryg-hero-search__btn {
        justify-content: center;
      }
    }`,
  js: ''
};
