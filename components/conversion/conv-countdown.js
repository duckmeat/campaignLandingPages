export default {
  id: 'conv-countdown',
  name: 'Conversion — Countdown Timer',
  category: 'Conversion',
  description: 'Live countdown timer creating urgency around a limited-time offer',
  html: `
    <section class="cvcd">
      <div class="cvcd__inner">
        <div class="cvcd__badge">⚡ Tidsbegrænset tilbud</div>
        <h2 class="cvcd__title">Spar 20% — tilbuddet udløber om</h2>
        <div class="cvcd__timer" id="cvcdTimer">
          <div class="cvcd__unit">
            <span class="cvcd__val" id="cvcdH">02</span>
            <span class="cvcd__label">timer</span>
          </div>
          <div class="cvcd__sep">:</div>
          <div class="cvcd__unit">
            <span class="cvcd__val" id="cvcdM">45</span>
            <span class="cvcd__label">min</span>
          </div>
          <div class="cvcd__sep">:</div>
          <div class="cvcd__unit">
            <span class="cvcd__val" id="cvcdS">00</span>
            <span class="cvcd__label">sek</span>
          </div>
        </div>
        <p class="cvcd__sub">Tilmeld dig inden tidtaget løber ud og få dit første år med 20% rabat.</p>
        <a href="#form" class="cvcd__cta" data-track="cta">Udnyt tilbuddet nu →</a>
        <p class="cvcd__note">Ingen binding · Kan opsiges til enhver tid</p>
      </div>
    </section>`,
  css: `
    .cvcd {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      text-align: center;
    }
    .cvcd__inner { max-width: 600px; margin: 0 auto; }
    .cvcd__badge {
      display: inline-block; padding: 6px 18px;
      background: var(--color-primary); color: #fff;
      border-radius: 20px; font-size: 0.8rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;
    }
    .cvcd__title {
      font-family: var(--font-heading); font-size: 2rem; color: #fff;
      margin-bottom: 28px; line-height: 1.2;
    }
    .cvcd__timer {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      margin-bottom: 28px;
    }
    .cvcd__unit {
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
      border-radius: 10px; padding: 16px 22px; min-width: 80px;
    }
    .cvcd__val {
      display: block; font-size: 2.5rem; font-weight: 800; color: #fff;
      font-variant-numeric: tabular-nums; line-height: 1;
    }
    .cvcd__label { font-size: 0.7rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; display: block; }
    .cvcd__sep { font-size: 2rem; color: rgba(255,255,255,0.4); font-weight: 800; }
    .cvcd__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 24px; line-height: 1.6; }
    .cvcd__cta {
      display: inline-block; padding: 16px 40px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-size: 1.125rem; font-weight: 700;
      text-decoration: none; transition: background 0.2s, transform 0.15s;
      margin-bottom: 14px;
    }
    .cvcd__cta:hover { background: var(--color-primary-dark); transform: translateY(-2px); }
    .cvcd__note { color: rgba(255,255,255,0.4); font-size: 0.8rem; margin: 0; }
    @media (max-width: 600px) {
      .cvcd { padding: var(--spacing-lg) var(--spacing-md); }
      .cvcd__title { font-size: 1.5rem; }
      .cvcd__unit { min-width: 64px; padding: 12px 14px; }
      .cvcd__val { font-size: 1.875rem; }
    }`,
  js: `
    (function() {
      var end = Date.now() + (2 * 3600 + 47 * 60) * 1000;
      function tick() {
        var diff = Math.max(0, end - Date.now());
        var h = Math.floor(diff / 3600000);
        var m = Math.floor((diff % 3600000) / 60000);
        var s = Math.floor((diff % 60000) / 1000);
        var pad = function(n) { return String(n).padStart(2, '0'); };
        var elH = document.getElementById('cvcdH');
        var elM = document.getElementById('cvcdM');
        var elS = document.getElementById('cvcdS');
        if (elH) elH.textContent = pad(h);
        if (elM) elM.textContent = pad(m);
        if (elS) elS.textContent = pad(s);
        if (diff > 0) setTimeout(tick, 1000);
      }
      tick();
    })();`
};
