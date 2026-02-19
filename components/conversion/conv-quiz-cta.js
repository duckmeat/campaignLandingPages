export default {
  id: 'conv-quiz-cta',
  name: 'Conversion — Mini Quiz / Selector',
  category: 'Conversion',
  description: 'Interactive "find your insurance" mini quiz that ends with a personalised CTA',
  html: `
    <section class="cvqz">
      <div class="cvqz__inner">
        <div class="cvqz__progress-bar"><div class="cvqz__progress-fill" id="cvqzFill" style="width:0%"></div></div>

        <!-- Q1 -->
        <div class="cvqz__pane" id="cvqzQ1">
          <div class="cvqz__step">Spørgsmål 1 / 3</div>
          <h2 class="cvqz__q">Hvad vil du primært forsikre?</h2>
          <div class="cvqz__opts">
            <button class="cvqz__opt" data-q="1" data-v="bil">🚗 Min bil</button>
            <button class="cvqz__opt" data-q="1" data-v="bolig">🏠 Min bolig</button>
            <button class="cvqz__opt" data-q="1" data-v="rejse">🌍 Mine rejser</button>
            <button class="cvqz__opt" data-q="1" data-v="alt">📦 Alt ovenstående</button>
          </div>
        </div>

        <!-- Q2 -->
        <div class="cvqz__pane" id="cvqzQ2" style="display:none">
          <div class="cvqz__step">Spørgsmål 2 / 3</div>
          <h2 class="cvqz__q">Hvor mange er I i husstanden?</h2>
          <div class="cvqz__opts">
            <button class="cvqz__opt" data-q="2" data-v="1">👤 Kun mig</button>
            <button class="cvqz__opt" data-q="2" data-v="2">👫 Os to</button>
            <button class="cvqz__opt" data-q="2" data-v="familie">👨‍👩‍👧 Familie med børn</button>
          </div>
        </div>

        <!-- Q3 -->
        <div class="cvqz__pane" id="cvqzQ3" style="display:none">
          <div class="cvqz__step">Spørgsmål 3 / 3</div>
          <h2 class="cvqz__q">Hvad er vigtigst for dig i en forsikring?</h2>
          <div class="cvqz__opts">
            <button class="cvqz__opt" data-q="3" data-v="pris">💰 Laveste pris</button>
            <button class="cvqz__opt" data-q="3" data-v="daek">🛡️ Bredest dækning</button>
            <button class="cvqz__opt" data-q="3" data-v="service">⭐ Bedst service</button>
          </div>
        </div>

        <!-- Result -->
        <div class="cvqz__pane cvqz__result" id="cvqzResult" style="display:none">
          <div class="cvqz__result-icon">🎯</div>
          <h2 class="cvqz__result-title">Din anbefalede løsning er klar!</h2>
          <p class="cvqz__result-sub" id="cvqzResultText">
            Baseret på dine svar har vi sammensat et tilbud, der passer perfekt til dig.
          </p>
          <a href="#form" class="cvqz__cta" data-track="cta">Se dit personlige tilbud →</a>
          <button class="cvqz__restart" id="cvqzRestart">Start forfra</button>
        </div>
      </div>
    </section>`,
  css: `
    .cvqz { padding: var(--spacing-xl) var(--spacing-lg); background: var(--color-bg-alt); }
    .cvqz__inner {
      max-width: 580px; margin: 0 auto;
      background: #fff; border-radius: var(--radius-card); overflow: hidden;
      box-shadow: 0 4px 32px rgba(0,0,0,0.08);
    }
    .cvqz__progress-bar { height: 4px; background: #f0f0f0; }
    .cvqz__progress-fill {
      height: 100%; background: var(--color-primary);
      transition: width 0.4s ease;
    }
    .cvqz__pane { padding: 40px; }
    .cvqz__step {
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 1px; color: #aaa; margin-bottom: 12px;
    }
    .cvqz__q {
      font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 28px;
      line-height: 1.3;
    }
    .cvqz__opts { display: flex; flex-direction: column; gap: 10px; }
    .cvqz__opt {
      text-align: left; padding: 14px 20px;
      border: 2px solid var(--color-border); border-radius: var(--radius-sm);
      background: #fff; font-size: 1rem; cursor: pointer;
      transition: all 0.15s; color: var(--color-text);
    }
    .cvqz__opt:hover { border-color: var(--color-primary); background: #fff5f5; color: var(--color-primary); }
    .cvqz__result { text-align: center; }
    .cvqz__result-icon { font-size: 3rem; margin-bottom: 12px; }
    .cvqz__result-title { font-family: var(--font-heading); font-size: 1.625rem; margin-bottom: 10px; }
    .cvqz__result-sub { color: var(--color-text-light); margin-bottom: 28px; line-height: 1.6; }
    .cvqz__cta {
      display: inline-block; padding: 14px 36px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      text-decoration: none; transition: background 0.2s; margin-bottom: 14px;
    }
    .cvqz__cta:hover { background: var(--color-primary-dark); }
    .cvqz__restart {
      display: block; margin: 0 auto;
      background: none; border: none; color: #aaa;
      font-size: 0.875rem; cursor: pointer; transition: color 0.15s;
    }
    .cvqz__restart:hover { color: var(--color-text); }
    @media (max-width: 600px) {
      .cvqz { padding: var(--spacing-lg) var(--spacing-md); }
      .cvqz__pane { padding: 24px 20px; }
    }`,
  js: `
    (function() {
      var answers = {};
      var panes = { 1: 'cvqzQ1', 2: 'cvqzQ2', 3: 'cvqzQ3', result: 'cvqzResult' };
      var fill = document.getElementById('cvqzFill');

      function show(key) {
        Object.values(panes).forEach(function(id) {
          var el = document.getElementById(id);
          if (el) el.style.display = 'none';
        });
        var target = document.getElementById(typeof key === 'number' ? panes[key] : panes[key]);
        if (target) target.style.display = 'block';
        var pct = key === 'result' ? 100 : ((key - 1) / 3) * 100;
        if (fill) fill.style.width = pct + '%';
      }

      document.querySelectorAll('.cvqz__opt').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var q = parseInt(btn.dataset.q);
          answers[q] = btn.dataset.v;
          if (q < 3) { show(q + 1); }
          else {
            var txt = document.getElementById('cvqzResultText');
            if (txt) {
              var prod = answers[1] === 'bil' ? 'Bilforsikring' : answers[1] === 'bolig' ? 'Boligforsikring' : answers[1] === 'rejse' ? 'Rejseforsikring' : 'Kombipakke';
              txt.textContent = 'Vi anbefaler vores ' + prod + ' til dig — perfekt tilpasset din situation og dit budget.';
            }
            show('result');
          }
        });
      });

      var restart = document.getElementById('cvqzRestart');
      if (restart) restart.addEventListener('click', function() {
        answers = {}; show(1);
      });

      show(1);
    })();`
};
