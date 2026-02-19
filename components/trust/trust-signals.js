export default {
  id: 'trust-signals',
  name: 'Trust Signals',
  category: 'Trust',
  description: 'Social proof with star rating, review count, and partner logos',
  html: `
    <section class="tryg-trust">
      <div class="tryg-trust__inner">
        <div class="tryg-trust__rating">
          <div class="tryg-trust__stars">
            <span class="tryg-trust__star">&#9733;</span>
            <span class="tryg-trust__star">&#9733;</span>
            <span class="tryg-trust__star">&#9733;</span>
            <span class="tryg-trust__star">&#9733;</span>
            <span class="tryg-trust__star tryg-trust__star--half">&#9733;</span>
          </div>
          <!-- EDIT: Rating text -->
          <p class="tryg-trust__rating-text">4,5 ud af 5 baseret p\u00e5 <strong>12.847 anmeldelser</strong></p>
        </div>
        <div class="tryg-trust__logos">
          <!-- EDIT: Partner / trust badge 1 -->
          <div class="tryg-trust__logo-item">
            <svg width="80" height="40" viewBox="0 0 80 40"><rect width="80" height="40" rx="4" fill="var(--color-bg-alt)"/><text x="40" y="24" text-anchor="middle" font-size="10" fill="var(--color-text)">Trustpilot</text></svg>
          </div>
          <!-- EDIT: Partner / trust badge 2 -->
          <div class="tryg-trust__logo-item">
            <svg width="80" height="40" viewBox="0 0 80 40"><rect width="80" height="40" rx="4" fill="var(--color-bg-alt)"/><text x="40" y="24" text-anchor="middle" font-size="10" fill="var(--color-text)">F&amp;P</text></svg>
          </div>
          <!-- EDIT: Partner / trust badge 3 -->
          <div class="tryg-trust__logo-item">
            <svg width="80" height="40" viewBox="0 0 80 40"><rect width="80" height="40" rx="4" fill="var(--color-bg-alt)"/><text x="40" y="24" text-anchor="middle" font-size="10" fill="var(--color-text)">ISO 27001</text></svg>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-trust {
      background: var(--color-bg-alt);
      padding: var(--spacing-xl) var(--spacing-lg);
      text-align: center;
    }
    .tryg-trust__inner {
      max-width: 720px;
      margin: 0 auto;
    }
    .tryg-trust__stars {
      font-size: 1.75rem;
      margin-bottom: var(--spacing-sm);
    }
    .tryg-trust__star {
      color: #f5a623;
    }
    .tryg-trust__star--half {
      opacity: 0.5;
    }
    .tryg-trust__rating-text {
      font-size: 1rem;
      color: var(--color-text-light);
      margin-bottom: var(--spacing-lg);
    }
    .tryg-trust__logos {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-lg);
      flex-wrap: wrap;
    }
    .tryg-trust__logo-item {
      opacity: 0.8;
      transition: opacity 0.2s;
    }
    .tryg-trust__logo-item:hover {
      opacity: 1;
    }
    @media (max-width: 600px) {
      .tryg-trust {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-trust__stars {
        font-size: 1.5rem;
      }
    }`,
  js: ''
};
