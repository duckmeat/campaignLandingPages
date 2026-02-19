export default {
  id: 'quote-form-travel',
  name: 'Quote Form — Travel',
  category: 'Form',
  description: 'Travel insurance quote with destination, date range and traveler counter',
  html: `
    <section class="qf-travel">
      <div class="qf-travel__inner">
        <div class="qf-travel__top">
          <div class="qf-travel__globe">🌍</div>
          <h2 class="qf-travel__title">Rejseforsikring</h2>
          <p class="qf-travel__sub">Dækning i hele verden — fra 1 dag til helårsforsikring.</p>
        </div>
        <form class="qf-travel__form" id="leadFormTravel">
          <div class="qf-travel__field">
            <label for="tv-dest">Destination</label>
            <select id="tv-dest" name="destination" required>
              <option value="">Vælg region</option>
              <option value="europa">Europa</option>
              <option value="usa">USA / Canada</option>
              <option value="asien">Asien</option>
              <option value="verden">Hele verden</option>
            </select>
          </div>
          <div class="qf-travel__dates">
            <div class="qf-travel__field">
              <label for="tv-from">Afrejse</label>
              <input type="date" id="tv-from" name="departure" required>
            </div>
            <div class="qf-travel__field">
              <label for="tv-to">Hjemkomst</label>
              <input type="date" id="tv-to" name="return" required>
            </div>
          </div>
          <div class="qf-travel__field">
            <label>Antal rejsende</label>
            <div class="qf-travel__counter">
              <button type="button" class="qf-travel__cnt-btn" id="tvMinus">−</button>
              <span class="qf-travel__cnt-val" id="tvCount">1</span>
              <button type="button" class="qf-travel__cnt-btn" id="tvPlus">+</button>
              <input type="hidden" name="travelers" id="tvHidden" value="1">
              <span class="qf-travel__cnt-label">rejsende</span>
            </div>
          </div>
          <div class="qf-travel__field">
            <label for="tv-phone">Telefon</label>
            <input type="tel" id="tv-phone" name="phone" required placeholder="+45 12 34 56 78">
          </div>
          <button type="submit" class="qf-travel__submit" data-track="cta">Se pris</button>
        </form>
      </div>
    </section>`,
  css: `
    .qf-travel {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: #f0f6ff;
    }
    .qf-travel__inner {
      max-width: 520px; margin: 0 auto;
      background: #fff; border-radius: var(--radius-card);
      overflow: hidden; box-shadow: 0 6px 40px rgba(0,0,80,0.1);
    }
    .qf-travel__top {
      background: linear-gradient(135deg, #1a3a6b 0%, #2a5298 100%);
      color: #fff; padding: 28px 32px 24px; text-align: center;
    }
    .qf-travel__globe { font-size: 2.5rem; margin-bottom: 8px; }
    .qf-travel__title {
      font-family: var(--font-heading); font-size: 1.625rem;
      margin-bottom: 6px; color: #fff;
    }
    .qf-travel__sub { font-size: 0.9rem; opacity: 0.85; }
    .qf-travel__form { padding: 28px 32px; }
    .qf-travel__dates { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .qf-travel__field { margin-bottom: 14px; }
    .qf-travel__field label {
      display: block; font-size: 0.8125rem; font-weight: 600;
      color: var(--color-text); margin-bottom: 5px;
    }
    .qf-travel__field input, .qf-travel__field select {
      width: 100%; padding: 10px 13px;
      border: 1.5px solid var(--color-border); border-radius: var(--radius-sm);
      font-size: 0.9375rem; font-family: var(--font-body);
      transition: border-color 0.2s;
    }
    .qf-travel__field input:focus, .qf-travel__field select:focus {
      outline: none; border-color: #2a5298;
    }
    .qf-travel__counter {
      display: flex; align-items: center; gap: 12px;
      padding: 8px 0;
    }
    .qf-travel__cnt-btn {
      width: 34px; height: 34px; border-radius: 50%;
      border: 2px solid var(--color-border); background: #fff;
      font-size: 1.25rem; font-weight: 700; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      line-height: 1; transition: border-color 0.15s, background 0.15s;
    }
    .qf-travel__cnt-btn:hover { border-color: #2a5298; background: #f0f6ff; }
    .qf-travel__cnt-val { font-size: 1.25rem; font-weight: 700; min-width: 24px; text-align: center; }
    .qf-travel__cnt-label { color: var(--color-text-light); font-size: 0.9rem; }
    .qf-travel__submit {
      display: block; width: 100%; padding: 14px;
      background: #2a5298; color: #fff; border: none;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      cursor: pointer; margin-top: 4px; transition: background 0.2s;
    }
    .qf-travel__submit:hover { background: #1a3a6b; }
    @media (max-width: 600px) {
      .qf-travel { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-travel__top { padding: 24px 20px; }
      .qf-travel__form { padding: 20px; }
      .qf-travel__dates { grid-template-columns: 1fr; }
    }`,
  js: `
    (function() {
      var count = 1;
      var minus = document.getElementById('tvMinus');
      var plus  = document.getElementById('tvPlus');
      var val   = document.getElementById('tvCount');
      var hidden = document.getElementById('tvHidden');
      if (plus) plus.addEventListener('click', function() {
        if (count < 9) { count++; val.textContent = count; hidden.value = count; }
      });
      if (minus) minus.addEventListener('click', function() {
        if (count > 1) { count--; val.textContent = count; hidden.value = count; }
      });
      var f = document.getElementById('leadFormTravel');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! Vi sender dig et tilbud på din rejseforsikring.');
        f.reset(); count = 1; val.textContent = 1; hidden.value = 1;
      });
    })();`
};
