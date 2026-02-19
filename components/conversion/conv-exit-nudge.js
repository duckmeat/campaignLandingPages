export default {
  id: 'conv-exit-nudge',
  name: 'Conversion — Exit Intent Nudge',
  category: 'Conversion',
  description: 'A friendly nudge card that slides in when the user\'s mouse leaves the top of the viewport',
  html: `
    <div class="cven" id="cvenPanel" aria-modal="true" role="dialog">
      <div class="cven__card">
        <button class="cven__x" id="cvenClose" aria-label="Luk">✕</button>
        <div class="cven__emoji">🤔</div>
        <h3 class="cven__title">Vent — har du glemt noget?</h3>
        <p class="cven__body">
          Du er ved at forlade siden uden at have fået dit tilbud.
          Det tager kun 60 sekunder — og du er ikke forpligtet til noget.
        </p>
        <div class="cven__offer">
          <span class="cven__offer-tag">🎁 Ekstra tilbud</span>
          Bliv nu og få <strong>3 måneder gratis</strong> på din første forsikring
        </div>
        <div class="cven__actions">
          <a href="#form" class="cven__yes" data-track="cta-exit">Ja, jeg vil have mit tilbud</a>
          <button class="cven__no" id="cvenNo">Nej tak, jeg forlader siden</button>
        </div>
      </div>
      <div class="cven__backdrop" id="cvenBackdrop"></div>
    </div>`,
  css: `
    .cven {
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none;
      transition: opacity 0.3s;
    }
    .cven.active { opacity: 1; pointer-events: all; }
    .cven__backdrop {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.5); backdrop-filter: blur(2px);
    }
    .cven__card {
      position: relative; z-index: 1;
      background: #fff; border-radius: var(--radius-card);
      padding: 40px; max-width: 460px; width: 90%;
      box-shadow: 0 24px 80px rgba(0,0,0,0.2);
      transform: translateY(20px); transition: transform 0.3s;
      text-align: center;
    }
    .cven.active .cven__card { transform: translateY(0); }
    .cven__x {
      position: absolute; top: 14px; right: 14px;
      background: none; border: none; color: #ccc;
      font-size: 1.125rem; cursor: pointer; transition: color 0.15s;
    }
    .cven__x:hover { color: var(--color-text); }
    .cven__emoji { font-size: 2.5rem; margin-bottom: 12px; }
    .cven__title { font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 10px; }
    .cven__body { color: var(--color-text-light); line-height: 1.6; margin-bottom: 18px; }
    .cven__offer {
      background: #fff8e7; border: 1px solid #ffe8a0;
      border-radius: var(--radius-sm); padding: 12px 16px;
      font-size: 0.875rem; color: #6b4a00; margin-bottom: 24px;
      display: flex; flex-direction: column; gap: 4px;
    }
    .cven__offer-tag {
      font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.8px; color: #c97a00;
    }
    .cven__actions { display: flex; flex-direction: column; gap: 10px; }
    .cven__yes {
      display: block; padding: 13px 24px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      text-decoration: none; transition: background 0.2s;
    }
    .cven__yes:hover { background: var(--color-primary-dark); }
    .cven__no {
      background: none; border: none; color: #aaa;
      font-size: 0.8125rem; cursor: pointer; text-decoration: underline;
      transition: color 0.15s;
    }
    .cven__no:hover { color: var(--color-text); }`,
  js: `
    (function() {
      var panel = document.getElementById('cvenPanel');
      var closeBtn = document.getElementById('cvenClose');
      var noBtn = document.getElementById('cvenNo');
      var backdrop = document.getElementById('cvenBackdrop');
      if (!panel) return;
      var shown = false;
      function show() { if (!shown) { shown = true; panel.classList.add('active'); } }
      function hide() { panel.classList.remove('active'); }
      document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 20) show();
      });
      if (closeBtn) closeBtn.addEventListener('click', hide);
      if (noBtn) noBtn.addEventListener('click', hide);
      if (backdrop) backdrop.addEventListener('click', hide);
    })();`
};
