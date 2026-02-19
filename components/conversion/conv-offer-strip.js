export default {
  id: 'conv-offer-strip',
  name: 'Conversion — Promotional Offer Strip',
  category: 'Conversion',
  description: 'Eye-catching discount banner with offer code, deadline and one-click CTA',
  html: `
    <section class="cvos">
      <div class="cvos__ribbon">🎁 Eksklusivt onlinetilbud — kun tilgængeligt via dette link</div>
      <div class="cvos__inner">
        <div class="cvos__offer">
          <div class="cvos__discount">
            <span class="cvos__pct">20%</span>
            <span class="cvos__off">RABAT</span>
          </div>
          <div class="cvos__sep"></div>
          <div class="cvos__details">
            <h2 class="cvos__title">På din første år med Tryg</h2>
            <p class="cvos__sub">Gælder alle private forsikringer tegnet online inden midnat.</p>
            <div class="cvos__code-row">
              <span class="cvos__code-label">Rabatkode:</span>
              <button class="cvos__code" id="cvosCode" data-code="TRYG20">TRYG20</button>
              <span class="cvos__copied" id="cvosCopied">Kopieret! ✓</span>
            </div>
          </div>
        </div>
        <div class="cvos__action">
          <a href="#form" class="cvos__cta" data-track="cta">Brug tilbuddet →</a>
          <div class="cvos__deadline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Udløber i dag kl. 24:00
          </div>
          <div class="cvos__trust">✓ Ingen binding &nbsp;·&nbsp; ✓ Gratis rådgivning</div>
        </div>
      </div>
    </section>`,
  css: `
    .cvos { background: #fff; border: 2px solid var(--color-primary); border-radius: var(--radius-card); overflow: hidden; margin: var(--spacing-xl) var(--spacing-lg); }
    .cvos__ribbon {
      background: var(--color-primary); color: #fff;
      font-size: 0.8rem; font-weight: 700; text-align: center; padding: 8px 16px;
      letter-spacing: 0.3px;
    }
    .cvos__inner {
      display: flex; align-items: center; justify-content: space-between;
      padding: 32px 40px; gap: 32px; max-width: 900px; margin: 0 auto;
    }
    .cvos__offer { display: flex; align-items: center; gap: 28px; flex: 1; }
    .cvos__discount {
      display: flex; flex-direction: column; align-items: center;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius-sm); padding: 16px 20px; flex-shrink: 0;
    }
    .cvos__pct { font-size: 2.5rem; font-weight: 900; line-height: 1; }
    .cvos__off { font-size: 0.75rem; font-weight: 800; letter-spacing: 2px; opacity: 0.9; }
    .cvos__sep { width: 1px; height: 60px; background: var(--color-border); flex-shrink: 0; }
    .cvos__title { font-family: var(--font-heading); font-size: 1.375rem; margin-bottom: 4px; }
    .cvos__sub { color: var(--color-text-light); font-size: 0.875rem; margin-bottom: 12px; }
    .cvos__code-row { display: flex; align-items: center; gap: 8px; }
    .cvos__code-label { font-size: 0.8rem; color: #888; }
    .cvos__code {
      font-family: monospace; font-size: 1rem; font-weight: 800;
      letter-spacing: 2px; padding: 6px 14px;
      background: #fff8f0; border: 1.5px dashed var(--color-primary);
      border-radius: var(--radius-sm); color: var(--color-primary);
      cursor: pointer; transition: background 0.15s;
    }
    .cvos__code:hover { background: #ffeedd; }
    .cvos__copied { font-size: 0.8rem; color: #22c55e; font-weight: 700; display: none; }
    .cvos__copied.show { display: inline; }
    .cvos__action { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
    .cvos__cta {
      display: inline-block; padding: 14px 32px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      text-decoration: none; transition: background 0.2s; white-space: nowrap;
    }
    .cvos__cta:hover { background: var(--color-primary-dark); }
    .cvos__deadline {
      display: flex; align-items: center; gap: 5px;
      font-size: 0.8125rem; color: var(--color-primary); font-weight: 600;
    }
    .cvos__trust { font-size: 0.75rem; color: #aaa; }
    @media (max-width: 700px) {
      .cvos { margin: var(--spacing-lg) var(--spacing-md); }
      .cvos__inner { flex-direction: column; padding: 24px 20px; text-align: center; }
      .cvos__offer { flex-direction: column; }
      .cvos__sep { display: none; }
      .cvos__code-row { justify-content: center; }
    }`,
  js: `
    (function() {
      var btn = document.getElementById('cvosCode');
      var copied = document.getElementById('cvosCopied');
      if (btn) btn.addEventListener('click', function() {
        navigator.clipboard && navigator.clipboard.writeText(btn.dataset.code);
        if (copied) { copied.classList.add('show'); setTimeout(function() { copied.classList.remove('show'); }, 2000); }
      });
    })();`
};
