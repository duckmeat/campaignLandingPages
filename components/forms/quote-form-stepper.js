export default {
  id: 'quote-form-stepper',
  name: 'Quote Form — Multi-Step',
  category: 'Form',
  description: '3-step guided quote: choose product → contact details → confirmation',
  html: `
    <section class="qf-step">
      <div class="qf-step__inner">
        <!-- Progress -->
        <div class="qf-step__progress">
          <div class="qf-step__prog-item active" data-step="1"><span>1</span> Produkt</div>
          <div class="qf-step__prog-sep"></div>
          <div class="qf-step__prog-item" data-step="2"><span>2</span> Kontakt</div>
          <div class="qf-step__prog-sep"></div>
          <div class="qf-step__prog-item" data-step="3"><span>3</span> Bekræft</div>
        </div>

        <!-- Step 1: Product picker -->
        <div class="qf-step__pane" id="qfStep1">
          <h2 class="qf-step__title">Hvad vil du forsikre?</h2>
          <p class="qf-step__sub">Vælg det produkt du ønsker et tilbud på.</p>
          <div class="qf-step__products">
            <button type="button" class="qf-step__prod" data-val="bil">🚗<span>Bil</span></button>
            <button type="button" class="qf-step__prod" data-val="bolig">🏠<span>Bolig</span></button>
            <button type="button" class="qf-step__prod" data-val="rejse">🌍<span>Rejse</span></button>
            <button type="button" class="qf-step__prod" data-val="indbo">📦<span>Indbo</span></button>
          </div>
          <input type="hidden" id="qfProduct" value="">
          <button type="button" class="qf-step__next" id="qfNext1" disabled>Næste →</button>
        </div>

        <!-- Step 2: Contact -->
        <div class="qf-step__pane" id="qfStep2" style="display:none">
          <h2 class="qf-step__title">Dine oplysninger</h2>
          <p class="qf-step__sub">Vi bruger dem til at sende dig et præcist tilbud.</p>
          <form id="leadFormStepper">
            <div class="qf-step__field">
              <label for="qs-name">Fulde navn</label>
              <input type="text" id="qs-name" name="name" required placeholder="Anders Jensen">
            </div>
            <div class="qf-step__field">
              <label for="qs-phone">Telefon</label>
              <input type="tel" id="qs-phone" name="phone" required placeholder="+45 12 34 56 78">
            </div>
            <div class="qf-step__field">
              <label for="qs-email">E-mail</label>
              <input type="email" id="qs-email" name="email" required placeholder="anders@eksempel.dk">
            </div>
            <div class="qf-step__btns">
              <button type="button" class="qf-step__back" id="qfBack2">← Tilbage</button>
              <button type="submit" class="qf-step__next" id="qfNext2">Send →</button>
            </div>
          </form>
        </div>

        <!-- Step 3: Confirmation -->
        <div class="qf-step__pane" id="qfStep3" style="display:none">
          <div class="qf-step__confirm">
            <div class="qf-step__checkmark">✓</div>
            <h2 class="qf-step__title">Tak for din henvendelse!</h2>
            <p class="qf-step__sub">Vi kontakter dig inden for 24 timer med dit personlige tilbud.</p>
            <button type="button" class="qf-step__restart" id="qfRestart">Start forfra</button>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .qf-step {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: var(--color-bg);
    }
    .qf-step__inner {
      max-width: 540px; margin: 0 auto;
      background: #fff; border-radius: var(--radius-card);
      padding: 40px; box-shadow: 0 4px 32px rgba(0,0,0,0.08);
    }
    .qf-step__progress {
      display: flex; align-items: center; margin-bottom: 36px;
    }
    .qf-step__prog-item {
      display: flex; align-items: center; gap: 7px;
      font-size: 0.8125rem; font-weight: 600; color: #bbb;
      white-space: nowrap;
    }
    .qf-step__prog-item span {
      width: 26px; height: 26px; border-radius: 50%;
      background: #e8e8e8; color: #aaa;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem; font-weight: 700; flex-shrink: 0;
      transition: background 0.3s, color 0.3s;
    }
    .qf-step__prog-item.active { color: var(--color-primary); }
    .qf-step__prog-item.active span { background: var(--color-primary); color: #fff; }
    .qf-step__prog-item.done span { background: #22c55e; color: #fff; }
    .qf-step__prog-sep {
      flex: 1; height: 2px; background: #e8e8e8; margin: 0 8px;
    }
    .qf-step__title {
      font-family: var(--font-heading); font-size: 1.5rem;
      margin-bottom: 6px;
    }
    .qf-step__sub { color: var(--color-text-light); font-size: 0.9rem; margin-bottom: 24px; }
    .qf-step__products {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
      margin-bottom: 24px;
    }
    .qf-step__prod {
      display: flex; flex-direction: column; align-items: center; gap: 8px;
      padding: 18px 8px; border: 2px solid var(--color-border);
      border-radius: var(--radius-card); background: #fff;
      font-size: 1.75rem; cursor: pointer; transition: all 0.15s;
    }
    .qf-step__prod span { font-size: 0.8125rem; font-weight: 600; color: var(--color-text); }
    .qf-step__prod:hover { border-color: var(--color-primary); background: #fff5f5; }
    .qf-step__prod.selected { border-color: var(--color-primary); background: #fff5f5; }
    .qf-step__field { margin-bottom: 14px; }
    .qf-step__field label {
      display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 4px;
    }
    .qf-step__field input {
      width: 100%; padding: 11px 14px;
      border: 1.5px solid var(--color-border); border-radius: var(--radius-sm);
      font-size: 1rem; font-family: var(--font-body); transition: border-color 0.2s;
    }
    .qf-step__field input:focus { outline: none; border-color: var(--color-primary); }
    .qf-step__btns { display: flex; gap: 10px; margin-top: 20px; }
    .qf-step__next {
      flex: 1; padding: 13px; background: var(--color-primary); color: #fff;
      border: none; border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      cursor: pointer; transition: background 0.2s;
    }
    .qf-step__next:hover:not(:disabled) { background: var(--color-primary-dark); }
    .qf-step__next:disabled { background: #ddd; cursor: not-allowed; }
    .qf-step__back {
      padding: 13px 20px; background: #fff; color: #666;
      border: 1.5px solid var(--color-border); border-radius: var(--radius);
      font-size: 1rem; cursor: pointer; transition: background 0.2s;
    }
    .qf-step__back:hover { background: #f5f5f5; }
    .qf-step__confirm { text-align: center; padding: 20px 0; }
    .qf-step__checkmark {
      width: 64px; height: 64px; border-radius: 50%;
      background: #22c55e; color: #fff; font-size: 2rem;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 20px;
    }
    .qf-step__restart {
      margin-top: 20px; padding: 10px 28px;
      background: #fff; border: 1.5px solid var(--color-border);
      border-radius: var(--radius); font-size: 0.9rem; cursor: pointer;
      color: var(--color-text-light); transition: background 0.15s;
    }
    .qf-step__restart:hover { background: #f5f5f5; }
    @media (max-width: 540px) {
      .qf-step { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-step__inner { padding: 24px 18px; }
      .qf-step__products { grid-template-columns: repeat(2, 1fr); }
    }`,
  js: `
    (function() {
      var selected = '';
      var prods = document.querySelectorAll('.qf-step__prod');
      var next1 = document.getElementById('qfNext1');
      var back2 = document.getElementById('qfBack2');
      var step1 = document.getElementById('qfStep1');
      var step2 = document.getElementById('qfStep2');
      var step3 = document.getElementById('qfStep3');
      var progItems = document.querySelectorAll('.qf-step__prog-item');
      var restart = document.getElementById('qfRestart');

      function goTo(n) {
        [step1, step2, step3].forEach(function(el, i) {
          el.style.display = (i + 1 === n) ? 'block' : 'none';
        });
        progItems.forEach(function(el, i) {
          el.classList.remove('active', 'done');
          if (i + 1 < n) el.classList.add('done');
          if (i + 1 === n) el.classList.add('active');
        });
      }

      prods.forEach(function(btn) {
        btn.addEventListener('click', function() {
          prods.forEach(function(b) { b.classList.remove('selected'); });
          btn.classList.add('selected');
          selected = btn.dataset.val;
          document.getElementById('qfProduct').value = selected;
          next1.disabled = false;
        });
      });

      if (next1) next1.addEventListener('click', function() { goTo(2); });
      if (back2) back2.addEventListener('click', function() { goTo(1); });

      var form = document.getElementById('leadFormStepper');
      if (form) form.addEventListener('submit', function(e) {
        e.preventDefault(); goTo(3);
      });

      if (restart) restart.addEventListener('click', function() {
        prods.forEach(function(b) { b.classList.remove('selected'); });
        selected = ''; next1.disabled = true;
        form.reset(); goTo(1);
      });
    })();`
};
