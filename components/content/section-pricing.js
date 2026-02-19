export default {
  id: 'section-pricing',
  name: 'Pricing Table',
  category: 'Content',
  description: 'Three-tier pricing comparison with feature lists',
  html: `
    <section class="tryg-pricing">
      <div class="tryg-pricing__inner">
        <!-- EDIT: Section headline -->
        <h2 class="tryg-pricing__title">Vælg den rette pakke</h2>
        <!-- EDIT: Section subheadline -->
        <p class="tryg-pricing__subtitle">Alle pakker inkluderer 24/7 support og nem selvbetjening.</p>
        <div class="tryg-pricing__grid">
          <!-- EDIT: Tier 1 - Basic -->
          <div class="tryg-pricing__card">
            <div class="tryg-pricing__card-header">
              <h3 class="tryg-pricing__card-name">Basis</h3>
              <p class="tryg-pricing__card-desc">Til dig med simple behov</p>
            </div>
            <div class="tryg-pricing__card-price">
              <span class="tryg-pricing__amount">149</span>
              <span class="tryg-pricing__period">kr/md</span>
            </div>
            <ul class="tryg-pricing__features">
              <li class="tryg-pricing__feature">✓ Grundlæggende dækning</li>
              <li class="tryg-pricing__feature">✓ Online selvbetjening</li>
              <li class="tryg-pricing__feature">✓ 24/7 skadeservice</li>
              <li class="tryg-pricing__feature tryg-pricing__feature--disabled">✗ Udvidet ansvar</li>
              <li class="tryg-pricing__feature tryg-pricing__feature--disabled">✗ Retshjælp</li>
            </ul>
            <a href="#basis" class="tryg-pricing__btn" data-track="pricing-basis">Vælg Basis</a>
          </div>
          <!-- EDIT: Tier 2 - Popular -->
          <div class="tryg-pricing__card tryg-pricing__card--featured">
            <div class="tryg-pricing__badge">Mest populær</div>
            <div class="tryg-pricing__card-header">
              <h3 class="tryg-pricing__card-name">Plus</h3>
              <p class="tryg-pricing__card-desc">Vores mest populære valg</p>
            </div>
            <div class="tryg-pricing__card-price">
              <span class="tryg-pricing__amount">249</span>
              <span class="tryg-pricing__period">kr/md</span>
            </div>
            <ul class="tryg-pricing__features">
              <li class="tryg-pricing__feature">✓ Udvidet dækning</li>
              <li class="tryg-pricing__feature">✓ Online selvbetjening</li>
              <li class="tryg-pricing__feature">✓ 24/7 skadeservice</li>
              <li class="tryg-pricing__feature">✓ Udvidet ansvar</li>
              <li class="tryg-pricing__feature tryg-pricing__feature--disabled">✗ Retshjælp</li>
            </ul>
            <a href="#plus" class="tryg-pricing__btn tryg-pricing__btn--primary" data-track="pricing-plus">Vælg Plus</a>
          </div>
          <!-- EDIT: Tier 3 - Premium -->
          <div class="tryg-pricing__card">
            <div class="tryg-pricing__card-header">
              <h3 class="tryg-pricing__card-name">Premium</h3>
              <p class="tryg-pricing__card-desc">Komplet beskyttelse</p>
            </div>
            <div class="tryg-pricing__card-price">
              <span class="tryg-pricing__amount">399</span>
              <span class="tryg-pricing__period">kr/md</span>
            </div>
            <ul class="tryg-pricing__features">
              <li class="tryg-pricing__feature">✓ Komplet dækning</li>
              <li class="tryg-pricing__feature">✓ Online selvbetjening</li>
              <li class="tryg-pricing__feature">✓ 24/7 skadeservice</li>
              <li class="tryg-pricing__feature">✓ Udvidet ansvar</li>
              <li class="tryg-pricing__feature">✓ Retshjælp inkluderet</li>
            </ul>
            <a href="#premium" class="tryg-pricing__btn" data-track="pricing-premium">Vælg Premium</a>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-pricing {
      background: var(--color-bg-alt);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-pricing__inner {
      max-width: 1120px;
      margin: 0 auto;
    }
    .tryg-pricing__title {
      text-align: center;
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.25rem;
      margin-bottom: var(--spacing-md);
    }
    .tryg-pricing__subtitle {
      text-align: center;
      color: var(--color-text-light);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-pricing__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-lg);
      align-items: start;
    }
    .tryg-pricing__card {
      background: var(--color-bg);
      border-radius: var(--radius-card);
      padding: var(--spacing-lg);
      position: relative;
      border: 2px solid transparent;
    }
    .tryg-pricing__card--featured {
      border-color: var(--color-primary);
      transform: scale(1.05);
    }
    .tryg-pricing__badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-primary);
      color: #fff;
      padding: 6px 16px;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .tryg-pricing__card-header {
      text-align: center;
      margin-bottom: var(--spacing-md);
    }
    .tryg-pricing__card-name {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-sm);
    }
    .tryg-pricing__card-desc {
      font-size: 0.875rem;
      color: var(--color-text-light);
    }
    .tryg-pricing__card-price {
      text-align: center;
      padding: var(--spacing-md) 0;
      border-bottom: 1px solid var(--color-border);
      margin-bottom: var(--spacing-md);
    }
    .tryg-pricing__amount {
      font-family: var(--font-heading);
      font-size: 3rem;
      font-weight: 700;
      color: var(--color-text);
    }
    .tryg-pricing__period {
      font-size: 1rem;
      color: var(--color-text-light);
    }
    .tryg-pricing__features {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--spacing-lg);
    }
    .tryg-pricing__feature {
      padding: var(--spacing-sm) 0;
      font-size: 0.9375rem;
      color: var(--color-text);
    }
    .tryg-pricing__feature--disabled {
      color: var(--color-text-light);
      opacity: 0.5;
    }
    .tryg-pricing__btn {
      display: block;
      text-align: center;
      padding: 14px;
      border-radius: var(--radius);
      text-decoration: none;
      font-weight: 600;
      border: 2px solid var(--color-border);
      color: var(--color-text);
      transition: border-color 0.2s, background 0.2s;
    }
    .tryg-pricing__btn:hover {
      border-color: var(--color-primary);
    }
    .tryg-pricing__btn--primary {
      background: var(--color-primary);
      border-color: var(--color-primary);
      color: #fff;
    }
    .tryg-pricing__btn--primary:hover {
      background: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
    }
    @media (max-width: 900px) {
      .tryg-pricing__grid {
        grid-template-columns: 1fr;
        max-width: 400px;
        margin: 0 auto;
      }
      .tryg-pricing__card--featured {
        transform: none;
      }
    }`,
  js: ''
};
