export default {
  id: 'conv-urgency-scarcity',
  name: 'Conversion — Urgency & Scarcity Banner',
  category: 'Conversion',
  description: 'Animated alert banner showing limited slots available and real-time demand indicators',
  html: `
    <section class="cvus">
      <div class="cvus__alert">
        <div class="cvus__alert-dot"></div>
        <span>🔥 Høj efterspørgsel · <strong id="cvusSlots">8</strong> tilbud sendt indenfor den seneste time</span>
      </div>
      <div class="cvus__inner">
        <div class="cvus__left">
          <div class="cvus__capacity">
            <div class="cvus__cap-label">Ledige rådgivertider i dag</div>
            <div class="cvus__slots">
              <div class="cvus__slot cvus__slot--taken" title="Optaget"></div>
              <div class="cvus__slot cvus__slot--taken" title="Optaget"></div>
              <div class="cvus__slot cvus__slot--taken" title="Optaget"></div>
              <div class="cvus__slot cvus__slot--taken" title="Optaget"></div>
              <div class="cvus__slot cvus__slot--taken" title="Optaget"></div>
              <div class="cvus__slot cvus__slot--free" title="Ledig"></div>
              <div class="cvus__slot cvus__slot--free" title="Ledig"></div>
              <div class="cvus__slot cvus__slot--free" title="Ledig"></div>
            </div>
            <div class="cvus__cap-sub">
              <span class="cvus__cap-taken">5 optaget</span> · <span class="cvus__cap-free">3 ledige</span>
            </div>
          </div>
          <h2 class="cvus__title">Reservér din plads nu</h2>
          <p class="cvus__sub">Vores rådgivere er meget efterspurgte i dag. Indsend din anmodning nu for at sikre dig en ledig tid i dag.</p>
        </div>
        <div class="cvus__right">
          <form class="cvus__form" id="cvusForm">
            <div class="cvus__field">
              <label for="cvus-phone">Dit telefonnummer</label>
              <input type="tel" id="cvus-phone" name="phone" required placeholder="+45 12 34 56 78">
            </div>
            <div class="cvus__field">
              <label for="cvus-time">Hvornår passer det?</label>
              <select id="cvus-time" name="time">
                <option value="nu">Så hurtigt som muligt</option>
                <option value="morgen">I morgen</option>
                <option value="uge">I løbet af ugen</option>
              </select>
            </div>
            <button type="submit" class="cvus__cta" data-track="cta">
              Reservér min tid →
            </button>
            <div class="cvus__guarantee">🔒 Vi deler ikke dine oplysninger</div>
          </form>
        </div>
      </div>
    </section>`,
  css: `
    .cvus { background: #fff; border-left: 4px solid var(--color-primary); }
    .cvus__alert {
      background: #fff8e7; padding: 10px 24px;
      display: flex; align-items: center; gap: 10px;
      font-size: 0.875rem; color: #7a4f00; border-bottom: 1px solid #ffe8a0;
    }
    .cvus__alert-dot {
      width: 8px; height: 8px; border-radius: 50%; background: var(--color-primary);
      animation: cvusBlink 1s infinite; flex-shrink: 0;
    }
    @keyframes cvusBlink {
      0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
    }
    .cvus__inner {
      display: grid; grid-template-columns: 1fr 1fr; gap: 0;
      max-width: 100%;
    }
    .cvus__left { padding: 40px; border-right: 1px solid var(--color-border); }
    .cvus__right { padding: 40px; background: var(--color-bg-alt); }
    .cvus__capacity { margin-bottom: 24px; }
    .cvus__cap-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #888; margin-bottom: 10px; }
    .cvus__slots { display: flex; gap: 6px; margin-bottom: 8px; }
    .cvus__slot { width: 28px; height: 12px; border-radius: 3px; }
    .cvus__slot--taken { background: var(--color-primary); }
    .cvus__slot--free { background: #e0e0e0; }
    .cvus__cap-sub { font-size: 0.8rem; }
    .cvus__cap-taken { color: var(--color-primary); font-weight: 700; }
    .cvus__cap-free { color: #22c55e; font-weight: 700; }
    .cvus__title { font-family: var(--font-heading); font-size: 1.625rem; margin-bottom: 10px; }
    .cvus__sub { color: var(--color-text-light); font-size: 0.9rem; line-height: 1.6; }
    .cvus__field { margin-bottom: 14px; }
    .cvus__field label { display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 4px; }
    .cvus__field input, .cvus__field select {
      width: 100%; padding: 11px 14px;
      border: 1.5px solid var(--color-border); border-radius: var(--radius-sm);
      font-size: 0.9375rem; font-family: var(--font-body); background: #fff;
      transition: border-color 0.2s;
    }
    .cvus__field input:focus, .cvus__field select:focus { outline: none; border-color: var(--color-primary); }
    .cvus__cta {
      display: block; width: 100%; padding: 14px;
      background: var(--color-primary); color: #fff; border: none;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      cursor: pointer; transition: background 0.2s;
    }
    .cvus__cta:hover { background: var(--color-primary-dark); }
    .cvus__guarantee { text-align: center; font-size: 0.78rem; color: #aaa; margin-top: 10px; }
    @media (max-width: 700px) {
      .cvus__inner { grid-template-columns: 1fr; }
      .cvus__left { border-right: none; border-bottom: 1px solid var(--color-border); padding: 24px 20px; }
      .cvus__right { padding: 24px 20px; }
    }`,
  js: `
    (function() {
      var el = document.getElementById('cvusSlots');
      if (el) {
        setInterval(function() {
          var n = parseInt(el.textContent);
          el.textContent = n + Math.floor(Math.random() * 3) + 1;
        }, 12000);
      }
      var f = document.getElementById('cvusForm');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! En rådgiver ringer dig op hurtigst muligt.');
        f.reset();
      });
    })();`
};
