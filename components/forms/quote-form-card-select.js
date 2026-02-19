export default {
  id: 'quote-form-card-select',
  name: 'Quote Form — Card Selector',
  category: 'Form',
  description: 'Visual card-based product selection with coverage tier picker and contact capture',
  html: `
    <section class="qf-card">
      <div class="qf-card__inner">
        <h2 class="qf-card__title">Vælg din forsikring</h2>
        <p class="qf-card__sub">Klik på det produkt du ønsker at forsikre, vælg dækning og udfyld dine oplysninger.</p>

        <!-- Product cards -->
        <div class="qf-card__products" id="qfCardProds">
          <label class="qf-card__prod">
            <input type="radio" name="qf-prod" value="bil">
            <div class="qf-card__prod-body">
              <div class="qf-card__prod-icon">🚗</div>
              <div class="qf-card__prod-name">Bilforsikring</div>
              <div class="qf-card__prod-desc">Fra 149 kr./md.</div>
            </div>
          </label>
          <label class="qf-card__prod">
            <input type="radio" name="qf-prod" value="bolig">
            <div class="qf-card__prod-body">
              <div class="qf-card__prod-icon">🏠</div>
              <div class="qf-card__prod-name">Boligforsikring</div>
              <div class="qf-card__prod-desc">Fra 99 kr./md.</div>
            </div>
          </label>
          <label class="qf-card__prod">
            <input type="radio" name="qf-prod" value="rejse">
            <div class="qf-card__prod-body">
              <div class="qf-card__prod-icon">🌍</div>
              <div class="qf-card__prod-name">Rejseforsikring</div>
              <div class="qf-card__prod-desc">Fra 49 kr./md.</div>
            </div>
          </label>
          <label class="qf-card__prod">
            <input type="radio" name="qf-prod" value="indbo">
            <div class="qf-card__prod-body">
              <div class="qf-card__prod-icon">📦</div>
              <div class="qf-card__prod-name">Indboforsikring</div>
              <div class="qf-card__prod-desc">Fra 79 kr./md.</div>
            </div>
          </label>
          <label class="qf-card__prod">
            <input type="radio" name="qf-prod" value="ulykke">
            <div class="qf-card__prod-body">
              <div class="qf-card__prod-icon">🏥</div>
              <div class="qf-card__prod-name">Ulykkesforsikring</div>
              <div class="qf-card__prod-desc">Fra 59 kr./md.</div>
            </div>
          </label>
          <label class="qf-card__prod">
            <input type="radio" name="qf-prod" value="erhverv">
            <div class="qf-card__prod-body">
              <div class="qf-card__prod-icon">💼</div>
              <div class="qf-card__prod-name">Erhvervsforsikring</div>
              <div class="qf-card__prod-desc">Tilpasset tilbud</div>
            </div>
          </label>
        </div>

        <!-- Coverage tier (hidden until product selected) -->
        <div class="qf-card__tiers" id="qfCardTiers" style="display:none">
          <div class="qf-card__tiers-label">Vælg dækning</div>
          <div class="qf-card__tier-row">
            <label class="qf-card__tier">
              <input type="radio" name="qf-tier" value="basis">
              <div class="qf-card__tier-body">
                <div class="qf-card__tier-name">Basis</div>
                <div class="qf-card__tier-desc">Grundlæggende dækning til den laveste pris</div>
              </div>
            </label>
            <label class="qf-card__tier qf-card__tier--popular">
              <div class="qf-card__tier-badge">Populær</div>
              <input type="radio" name="qf-tier" value="standard" checked>
              <div class="qf-card__tier-body">
                <div class="qf-card__tier-name">Standard</div>
                <div class="qf-card__tier-desc">Den rigtige balance mellem pris og dækning</div>
              </div>
            </label>
            <label class="qf-card__tier">
              <input type="radio" name="qf-tier" value="premium">
              <div class="qf-card__tier-body">
                <div class="qf-card__tier-name">Premium</div>
                <div class="qf-card__tier-desc">Maksimal tryghed — alt er inkluderet</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Contact fields (hidden until product selected) -->
        <div class="qf-card__contact" id="qfCardContact" style="display:none">
          <form id="leadFormCard">
            <div class="qf-card__contact-row">
              <div class="qf-card__field">
                <label for="qfc-name">Navn</label>
                <input type="text" id="qfc-name" name="name" required placeholder="Anders Jensen">
              </div>
              <div class="qf-card__field">
                <label for="qfc-phone">Telefon</label>
                <input type="tel" id="qfc-phone" name="phone" required placeholder="+45 12 34 56 78">
              </div>
            </div>
            <button type="submit" class="qf-card__submit" data-track="cta">
              Få mit tilbud →
            </button>
          </form>
        </div>
      </div>
    </section>`,
  css: `
    .qf-card {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: var(--color-bg-alt);
    }
    .qf-card__inner { max-width: 760px; margin: 0 auto; }
    .qf-card__title {
      font-family: var(--font-heading); font-size: 1.875rem;
      text-align: center; margin-bottom: 8px;
    }
    .qf-card__sub {
      text-align: center; color: var(--color-text-light);
      max-width: 540px; margin: 0 auto 32px;
    }
    .qf-card__products {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;
    }
    .qf-card__prod { cursor: pointer; display: block; }
    .qf-card__prod input[type="radio"] { display: none; }
    .qf-card__prod-body {
      border: 2px solid var(--color-border); border-radius: var(--radius-card);
      padding: 20px 16px; text-align: center;
      background: #fff; transition: all 0.15s;
    }
    .qf-card__prod-body:hover { border-color: var(--color-primary); background: #fff5f5; }
    .qf-card__prod input:checked + .qf-card__prod-body {
      border-color: var(--color-primary); background: #fff5f5;
      box-shadow: 0 0 0 3px rgba(237,28,36,0.12);
    }
    .qf-card__prod-icon { font-size: 1.875rem; margin-bottom: 8px; }
    .qf-card__prod-name { font-size: 0.875rem; font-weight: 700; margin-bottom: 4px; }
    .qf-card__prod-desc { font-size: 0.8rem; color: var(--color-primary); font-weight: 600; }
    /* Tiers */
    .qf-card__tiers {
      margin-bottom: 24px; animation: qfCardSlide 0.3s ease;
    }
    .qf-card__tiers-label {
      font-size: 0.8125rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.5px; color: #888; margin-bottom: 12px;
    }
    .qf-card__tier-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .qf-card__tier { cursor: pointer; position: relative; display: block; }
    .qf-card__tier input[type="radio"] { display: none; }
    .qf-card__tier-body {
      border: 2px solid var(--color-border); border-radius: var(--radius-sm);
      padding: 16px; background: #fff; transition: all 0.15s;
    }
    .qf-card__tier input:checked + .qf-card__tier-body {
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(237,28,36,0.1);
    }
    .qf-card__tier--popular .qf-card__tier-body { border-color: var(--color-primary); }
    .qf-card__tier-badge {
      position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
      background: var(--color-primary); color: #fff;
      font-size: 0.7rem; font-weight: 700; padding: 2px 10px; border-radius: 10px;
      white-space: nowrap;
    }
    .qf-card__tier-name { font-weight: 700; font-size: 0.9375rem; margin-bottom: 4px; }
    .qf-card__tier-desc { font-size: 0.8rem; color: var(--color-text-light); line-height: 1.4; }
    /* Contact */
    .qf-card__contact { animation: qfCardSlide 0.3s ease; }
    .qf-card__contact-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
    .qf-card__field label {
      display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 4px;
    }
    .qf-card__field input {
      width: 100%; padding: 11px 14px;
      border: 1.5px solid var(--color-border); border-radius: var(--radius-sm);
      font-size: 0.9375rem; font-family: var(--font-body); transition: border-color 0.2s;
    }
    .qf-card__field input:focus { outline: none; border-color: var(--color-primary); }
    .qf-card__submit {
      display: block; width: 100%; padding: 15px;
      background: var(--color-primary); color: #fff; border: none;
      border-radius: var(--radius); font-size: 1.0625rem; font-weight: 700;
      cursor: pointer; transition: background 0.2s;
    }
    .qf-card__submit:hover { background: var(--color-primary-dark); }
    @keyframes qfCardSlide {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 640px) {
      .qf-card { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-card__products { grid-template-columns: repeat(2, 1fr); }
      .qf-card__tier-row { grid-template-columns: 1fr; }
      .qf-card__contact-row { grid-template-columns: 1fr; }
    }`,
  js: `
    (function() {
      var prods = document.querySelectorAll('[name="qf-prod"]');
      var tiers = document.getElementById('qfCardTiers');
      var contact = document.getElementById('qfCardContact');

      prods.forEach(function(r) {
        r.addEventListener('change', function() {
          if (tiers) tiers.style.display = 'block';
          if (contact) contact.style.display = 'block';
        });
      });

      var f = document.getElementById('leadFormCard');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! Vi sender dit personlige tilbud inden for 2 timer.');
        f.reset();
        if (tiers) tiers.style.display = 'none';
        if (contact) contact.style.display = 'none';
      });
    })();`
};
