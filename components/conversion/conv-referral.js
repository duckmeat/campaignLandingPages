export default {
  id: 'conv-referral',
  name: 'Conversion — Referral & Share',
  category: 'Conversion',
  description: 'Refer-a-friend block with unique link generator, share buttons and reward display',
  html: `
    <section class="cvrf">
      <div class="cvrf__inner">
        <div class="cvrf__left">
          <div class="cvrf__gift">🎁</div>
          <h2 class="cvrf__title">Del Tryg — tjen penge</h2>
          <p class="cvrf__body">
            Invitér venner og familie til Tryg. Når de tegner en forsikring,
            får I begge <strong>500 kr.</strong> på næste præmie.
          </p>
          <div class="cvrf__how">
            <div class="cvrf__step">
              <div class="cvrf__step-num">1</div>
              <div>Del dit personlige link</div>
            </div>
            <div class="cvrf__step">
              <div class="cvrf__step-num">2</div>
              <div>Din ven tegner en forsikring</div>
            </div>
            <div class="cvrf__step">
              <div class="cvrf__step-num">3</div>
              <div>I får begge 500 kr. rabat</div>
            </div>
          </div>
        </div>
        <div class="cvrf__right">
          <div class="cvrf__reward">
            <div class="cvrf__reward-val">500 kr.</div>
            <div class="cvrf__reward-label">til dig &amp; din ven</div>
          </div>
          <div class="cvrf__link-box">
            <label class="cvrf__link-label">Dit personlige link</label>
            <div class="cvrf__link-row">
              <input type="text" class="cvrf__link-input" id="cvrfLink"
                     value="tryg.dk/ref/DK8821A" readonly>
              <button class="cvrf__copy" id="cvrfCopy">Kopiér</button>
            </div>
            <span class="cvrf__copied-msg" id="cvrfCopied">Kopieret! ✓</span>
          </div>
          <div class="cvrf__share-label">Del via</div>
          <div class="cvrf__share-btns">
            <a class="cvrf__share cvrf__share--fb" href="#" data-track="cta-ref-fb">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              Facebook
            </a>
            <a class="cvrf__share cvrf__share--wa" href="#" data-track="cta-ref-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              WhatsApp
            </a>
            <a class="cvrf__share cvrf__share--mail" href="#" data-track="cta-ref-mail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              E-mail
            </a>
          </div>
          <p class="cvrf__terms">Gælder for nye kunder · Se <a href="#">vilkår</a></p>
        </div>
      </div>
    </section>`,
  css: `
    .cvrf { padding: var(--spacing-xl) var(--spacing-lg); background: var(--color-bg-alt); }
    .cvrf__inner {
      max-width: 900px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 0;
      background: #fff; border-radius: var(--radius-card);
      box-shadow: 0 4px 32px rgba(0,0,0,0.08); overflow: hidden;
    }
    .cvrf__left { padding: 48px 40px; border-right: 1px solid var(--color-border); }
    .cvrf__right { padding: 48px 40px; }
    .cvrf__gift { font-size: 2.5rem; margin-bottom: 14px; }
    .cvrf__title { font-family: var(--font-heading); font-size: 1.75rem; margin-bottom: 12px; }
    .cvrf__body { color: var(--color-text-light); line-height: 1.7; margin-bottom: 28px; }
    .cvrf__how { display: flex; flex-direction: column; gap: 14px; }
    .cvrf__step { display: flex; align-items: center; gap: 14px; font-size: 0.9rem; }
    .cvrf__step-num {
      width: 28px; height: 28px; border-radius: 50%;
      background: var(--color-primary); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem; font-weight: 800; flex-shrink: 0;
    }
    .cvrf__reward { text-align: center; margin-bottom: 24px; }
    .cvrf__reward-val {
      font-family: var(--font-heading); font-size: 3.5rem; font-weight: 900;
      color: var(--color-primary); line-height: 1;
    }
    .cvrf__reward-label { font-size: 0.875rem; color: var(--color-text-light); margin-top: 4px; }
    .cvrf__link-label { display: block; font-size: 0.8rem; font-weight: 600; color: #888; margin-bottom: 6px; }
    .cvrf__link-row { display: flex; margin-bottom: 4px; }
    .cvrf__link-input {
      flex: 1; padding: 10px 14px;
      border: 1.5px solid var(--color-border); border-right: none;
      border-radius: var(--radius-sm) 0 0 var(--radius-sm);
      font-size: 0.875rem; font-family: monospace; color: var(--color-text-light);
      background: var(--color-bg-alt);
    }
    .cvrf__copy {
      padding: 10px 18px;
      background: var(--color-primary); color: #fff; border: none;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      font-size: 0.875rem; font-weight: 700; cursor: pointer; transition: background 0.2s;
    }
    .cvrf__copy:hover { background: var(--color-primary-dark); }
    .cvrf__copied-msg {
      font-size: 0.78rem; color: #22c55e; font-weight: 700;
      display: none; margin-bottom: 16px;
    }
    .cvrf__copied-msg.show { display: block; }
    .cvrf__share-label {
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.8px; color: #aaa; margin: 20px 0 10px;
    }
    .cvrf__share-btns { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px; }
    .cvrf__share {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 9px 16px; border-radius: var(--radius-sm);
      font-size: 0.8125rem; font-weight: 600; text-decoration: none;
      transition: opacity 0.15s;
    }
    .cvrf__share:hover { opacity: 0.85; }
    .cvrf__share--fb { background: #1877f2; color: #fff; }
    .cvrf__share--wa { background: #25d366; color: #fff; }
    .cvrf__share--mail { background: #f5f5f5; color: var(--color-text); border: 1px solid var(--color-border); }
    .cvrf__terms { font-size: 0.75rem; color: #bbb; }
    .cvrf__terms a { color: #aaa; }
    @media (max-width: 700px) {
      .cvrf { padding: var(--spacing-lg) var(--spacing-md); }
      .cvrf__inner { grid-template-columns: 1fr; }
      .cvrf__left { border-right: none; border-bottom: 1px solid var(--color-border); padding: 28px 22px; }
      .cvrf__right { padding: 28px 22px; }
    }`,
  js: `
    (function() {
      var copy = document.getElementById('cvrfCopy');
      var input = document.getElementById('cvrfLink');
      var msg = document.getElementById('cvrfCopied');
      if (copy && input) copy.addEventListener('click', function() {
        input.select();
        navigator.clipboard && navigator.clipboard.writeText(input.value);
        if (msg) { msg.classList.add('show'); setTimeout(function() { msg.classList.remove('show'); }, 2000); }
      });
    })();`
};
