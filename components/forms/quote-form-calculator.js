export default {
  id: 'quote-form-calculator',
  name: 'Quote Form — Price Calculator',
  category: 'Form',
  description: 'Interactive coverage slider with live estimated price and contact capture',
  html: `
    <section class="qf-calc">
      <div class="qf-calc__inner">
        <div class="qf-calc__left">
          <h2 class="qf-calc__title">Beregn din pris</h2>
          <p class="qf-calc__sub">Justér dækningen og se din estimerede månedspris.</p>

          <div class="qf-calc__group">
            <label for="calc-type">Forsikringstype</label>
            <div class="qf-calc__type-btns" id="calcTypeBtns">
              <button type="button" class="qf-calc__type active" data-base="149">Bil</button>
              <button type="button" class="qf-calc__type" data-base="99">Bolig</button>
              <button type="button" class="qf-calc__type" data-base="49">Rejse</button>
              <button type="button" class="qf-calc__type" data-base="79">Indbo</button>
            </div>
          </div>

          <div class="qf-calc__group">
            <div class="qf-calc__slider-head">
              <label>Dækningsniveau</label>
              <span class="qf-calc__slider-val" id="calcCovLabel">Standard</span>
            </div>
            <input type="range" id="calcCov" min="1" max="3" value="2" step="1"
                   class="qf-calc__range">
            <div class="qf-calc__slider-ticks">
              <span>Basis</span><span>Standard</span><span>Premium</span>
            </div>
          </div>

          <div class="qf-calc__price-box">
            <div class="qf-calc__price-label">Estimeret månedspris</div>
            <div class="qf-calc__price">
              <span class="qf-calc__price-val" id="calcPrice">298</span>
              <span class="qf-calc__price-cur">kr./md.</span>
            </div>
            <div class="qf-calc__price-note">Inkl. moms — præcis pris ved opkald</div>
          </div>
        </div>

        <div class="qf-calc__right">
          <h3 class="qf-calc__form-title">Få dit præcise tilbud</h3>
          <form id="leadFormCalc">
            <div class="qf-calc__field">
              <label for="calc-name">Navn</label>
              <input type="text" id="calc-name" name="name" required placeholder="Anders Jensen">
            </div>
            <div class="qf-calc__field">
              <label for="calc-phone">Telefon</label>
              <input type="tel" id="calc-phone" name="phone" required placeholder="+45 12 34 56 78">
            </div>
            <div class="qf-calc__field">
              <label for="calc-email">E-mail</label>
              <input type="email" id="calc-email" name="email" placeholder="valgfrit">
            </div>
            <div class="qf-calc__selected-price">
              Du valgte: <strong id="calcSummary">Bil · Standard · 298 kr./md.</strong>
            </div>
            <button type="submit" class="qf-calc__submit" data-track="cta">Send forespørgsel</button>
          </form>
        </div>
      </div>
    </section>`,
  css: `
    .qf-calc {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: var(--color-bg-alt);
    }
    .qf-calc__inner {
      max-width: 820px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 0;
      background: #fff; border-radius: var(--radius-card);
      overflow: hidden; box-shadow: 0 4px 32px rgba(0,0,0,0.09);
    }
    .qf-calc__left { padding: 40px; background: #fff; }
    .qf-calc__right {
      padding: 40px; background: var(--color-bg-alt);
      border-left: 1px solid var(--color-border);
    }
    .qf-calc__title {
      font-family: var(--font-heading); font-size: 1.625rem; margin-bottom: 6px;
    }
    .qf-calc__sub { color: var(--color-text-light); font-size: 0.9rem; margin-bottom: 28px; }
    .qf-calc__group { margin-bottom: 24px; }
    .qf-calc__group label {
      display: block; font-size: 0.8125rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.5px; color: #888; margin-bottom: 10px;
    }
    .qf-calc__type-btns { display: flex; gap: 8px; flex-wrap: wrap; }
    .qf-calc__type {
      padding: 8px 16px; border: 1.5px solid var(--color-border);
      border-radius: 20px; background: #fff; font-size: 0.875rem;
      font-weight: 600; cursor: pointer; transition: all 0.15s;
      color: var(--color-text);
    }
    .qf-calc__type.active {
      background: var(--color-primary); color: #fff; border-color: var(--color-primary);
    }
    .qf-calc__type:hover:not(.active) { border-color: var(--color-primary); }
    .qf-calc__slider-head {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;
    }
    .qf-calc__slider-val { font-weight: 700; color: var(--color-primary); }
    .qf-calc__range {
      width: 100%; accent-color: var(--color-primary);
      height: 4px; cursor: pointer;
    }
    .qf-calc__slider-ticks {
      display: flex; justify-content: space-between;
      font-size: 0.75rem; color: #aaa; margin-top: 4px;
    }
    .qf-calc__price-box {
      background: var(--color-bg-alt); border-radius: var(--radius-sm);
      padding: 20px 24px; text-align: center;
    }
    .qf-calc__price-label { font-size: 0.8rem; color: #999; margin-bottom: 6px; }
    .qf-calc__price { display: flex; align-items: baseline; justify-content: center; gap: 6px; }
    .qf-calc__price-val {
      font-size: 3rem; font-weight: 800; color: var(--color-primary); line-height: 1;
    }
    .qf-calc__price-cur { font-size: 1rem; color: var(--color-text-light); font-weight: 600; }
    .qf-calc__price-note { font-size: 0.75rem; color: #bbb; margin-top: 4px; }
    .qf-calc__form-title {
      font-family: var(--font-heading); font-size: 1.25rem;
      margin-bottom: 20px; color: var(--color-text);
    }
    .qf-calc__field { margin-bottom: 12px; }
    .qf-calc__field label {
      display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 4px;
    }
    .qf-calc__field input {
      width: 100%; padding: 10px 13px;
      border: 1.5px solid var(--color-border); border-radius: var(--radius-sm);
      font-size: 0.9375rem; font-family: var(--font-body);
      transition: border-color 0.2s; background: #fff;
    }
    .qf-calc__field input:focus { outline: none; border-color: var(--color-primary); }
    .qf-calc__selected-price {
      font-size: 0.8125rem; color: var(--color-text-light);
      margin-bottom: 12px; padding: 8px 12px;
      background: #fff; border-radius: var(--radius-sm);
      border: 1px solid var(--color-border);
    }
    .qf-calc__submit {
      display: block; width: 100%; padding: 13px;
      background: var(--color-primary); color: #fff; border: none;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      cursor: pointer; transition: background 0.2s;
    }
    .qf-calc__submit:hover { background: var(--color-primary-dark); }
    @media (max-width: 700px) {
      .qf-calc { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-calc__inner { grid-template-columns: 1fr; }
      .qf-calc__left, .qf-calc__right { padding: 24px 20px; }
      .qf-calc__right { border-left: none; border-top: 1px solid var(--color-border); }
    }`,
  js: `
    (function() {
      var basePrices = { 'Bil': 149, 'Bolig': 99, 'Rejse': 49, 'Indbo': 79 };
      var multipliers = { 1: 0.7, 2: 1, 3: 1.45 };
      var labels = { 1: 'Basis', 2: 'Standard', 3: 'Premium' };
      var currentType = 'Bil';
      var currentCov = 2;

      function updatePrice() {
        var price = Math.round(basePrices[currentType] * multipliers[currentCov] * 2);
        var el = document.getElementById('calcPrice');
        var sl = document.getElementById('calcCovLabel');
        var sm = document.getElementById('calcSummary');
        if (el) el.textContent = price;
        if (sl) sl.textContent = labels[currentCov];
        if (sm) sm.textContent = currentType + ' · ' + labels[currentCov] + ' · ' + price + ' kr./md.';
      }

      var typeBtns = document.querySelectorAll('.qf-calc__type');
      typeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          typeBtns.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          currentType = btn.textContent;
          updatePrice();
        });
      });

      var slider = document.getElementById('calcCov');
      if (slider) slider.addEventListener('input', function() {
        currentCov = parseInt(this.value);
        updatePrice();
      });

      var form = document.getElementById('leadFormCalc');
      if (form) form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! En rådgiver kontakter dig med dit præcise tilbud.');
        form.reset();
      });

      updatePrice();
    })();`
};
