export default {
  id: 'conv-sticky-bar',
  name: 'Conversion — Sticky Bottom Bar',
  category: 'Conversion',
  description: 'Fixed bar that appears at the bottom of the viewport after scrolling 300px',
  html: `
    <div class="cvsb" id="cvsbBar" aria-live="polite">
      <div class="cvsb__inner">
        <div class="cvsb__left">
          <span class="cvsb__icon">🛡️</span>
          <div>
            <div class="cvsb__title">Klar til at spare på din forsikring?</div>
            <div class="cvsb__sub">Få et gratis tilbud — svar inden for 2 timer</div>
          </div>
        </div>
        <div class="cvsb__right">
          <a href="#form" class="cvsb__cta" data-track="cta-sticky">Beregn pris</a>
          <a href="tel:+4570111520" class="cvsb__call">📞 Ring nu</a>
          <button class="cvsb__close" id="cvsbClose" aria-label="Luk">✕</button>
        </div>
      </div>
    </div>`,
  css: `
    .cvsb {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000;
      background: #fff; border-top: 3px solid var(--color-primary);
      box-shadow: 0 -4px 24px rgba(0,0,0,0.12);
      transform: translateY(100%); transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
    }
    .cvsb.visible { transform: translateY(0); }
    .cvsb__inner {
      max-width: 1100px; margin: 0 auto;
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 24px; gap: 16px;
    }
    .cvsb__left { display: flex; align-items: center; gap: 14px; }
    .cvsb__icon { font-size: 1.75rem; flex-shrink: 0; }
    .cvsb__title { font-weight: 700; font-size: 0.9375rem; color: var(--color-text); }
    .cvsb__sub { font-size: 0.8rem; color: var(--color-text-light); margin-top: 1px; }
    .cvsb__right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
    .cvsb__cta {
      display: inline-block; padding: 10px 24px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-weight: 700; font-size: 0.9375rem;
      text-decoration: none; transition: background 0.2s; white-space: nowrap;
    }
    .cvsb__cta:hover { background: var(--color-primary-dark); }
    .cvsb__call {
      display: inline-block; padding: 10px 18px;
      border: 1.5px solid var(--color-border); border-radius: var(--radius);
      font-size: 0.875rem; font-weight: 600; color: var(--color-text);
      text-decoration: none; transition: border-color 0.15s; white-space: nowrap;
    }
    .cvsb__call:hover { border-color: var(--color-primary); }
    .cvsb__close {
      background: none; border: none; color: #aaa; font-size: 1.125rem;
      cursor: pointer; padding: 6px; transition: color 0.15s;
    }
    .cvsb__close:hover { color: var(--color-text); }
    @media (max-width: 640px) {
      .cvsb__inner { padding: 12px 16px; }
      .cvsb__sub { display: none; }
      .cvsb__call { display: none; }
    }`,
  js: `
    (function() {
      var bar = document.getElementById('cvsbBar');
      var close = document.getElementById('cvsbClose');
      if (!bar) return;
      var dismissed = false;
      window.addEventListener('scroll', function() {
        if (dismissed) return;
        if (window.scrollY > 300) { bar.classList.add('visible'); }
        else { bar.classList.remove('visible'); }
      }, { passive: true });
      if (close) close.addEventListener('click', function() {
        dismissed = true;
        bar.classList.remove('visible');
      });
    })();`
};
