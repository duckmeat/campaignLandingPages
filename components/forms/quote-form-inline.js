export default {
  id: 'quote-form-inline',
  name: 'Quote Form — Inline Compact',
  category: 'Form',
  description: 'Ultra-compact single-row horizontal form — ideal for embedding in hero sections',
  html: `
    <section class="qf-inline">
      <div class="qf-inline__inner">
        <div class="qf-inline__heading">
          <h2 class="qf-inline__title">Få dit tilbud nu</h2>
          <p class="qf-inline__sub">Hurtig beregning — ingen forpligtelser</p>
        </div>
        <form class="qf-inline__form" id="leadFormInline">
          <div class="qf-inline__bar">
            <div class="qf-inline__segment">
              <label for="il-prod">Produkt</label>
              <select id="il-prod" name="product" required>
                <option value="">Vælg forsikring…</option>
                <option value="bil">Bilforsikring</option>
                <option value="bolig">Boligforsikring</option>
                <option value="rejse">Rejseforsikring</option>
                <option value="indbo">Indboforsikring</option>
              </select>
            </div>
            <div class="qf-inline__divider"></div>
            <div class="qf-inline__segment">
              <label for="il-phone">Telefon</label>
              <input type="tel" id="il-phone" name="phone" required placeholder="+45 12 34 56 78">
            </div>
            <div class="qf-inline__divider"></div>
            <div class="qf-inline__segment">
              <label for="il-zip">Postnummer</label>
              <input type="text" id="il-zip" name="zip" maxlength="4" placeholder="2100">
            </div>
            <button type="submit" class="qf-inline__btn" data-track="cta">Beregn</button>
          </div>
          <p class="qf-inline__note">✓ Ingen binding &nbsp;·&nbsp; ✓ Svar inden for 24 timer &nbsp;·&nbsp; ✓ Gratis rådgivning</p>
        </form>
      </div>
    </section>`,
  css: `
    .qf-inline {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: var(--color-primary);
    }
    .qf-inline__inner { max-width: 860px; margin: 0 auto; }
    .qf-inline__heading { text-align: center; margin-bottom: 24px; }
    .qf-inline__title {
      font-family: var(--font-heading); font-size: 2rem;
      color: #fff; margin-bottom: 6px;
    }
    .qf-inline__sub { color: rgba(255,255,255,0.8); font-size: 1rem; }
    .qf-inline__bar {
      display: flex; align-items: stretch;
      background: #fff; border-radius: var(--radius);
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.2);
    }
    .qf-inline__segment {
      flex: 1; display: flex; flex-direction: column;
      padding: 12px 18px; min-width: 0;
    }
    .qf-inline__segment label {
      font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.8px; color: #999; margin-bottom: 3px;
    }
    .qf-inline__segment input,
    .qf-inline__segment select {
      border: none; font-size: 0.9375rem; font-family: var(--font-body);
      color: var(--color-text); background: transparent;
      padding: 0; outline: none; width: 100%;
    }
    .qf-inline__divider {
      width: 1px; background: #e8e8e8; margin: 12px 0;
    }
    .qf-inline__btn {
      padding: 0 28px; background: var(--color-primary); color: #fff;
      border: none; font-size: 1rem; font-weight: 700; cursor: pointer;
      white-space: nowrap; transition: background 0.2s;
      flex-shrink: 0;
    }
    .qf-inline__btn:hover { background: var(--color-primary-dark); }
    .qf-inline__note {
      text-align: center; color: rgba(255,255,255,0.7);
      font-size: 0.8125rem; margin-top: 14px;
    }
    @media (max-width: 700px) {
      .qf-inline { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-inline__bar { flex-direction: column; border-radius: var(--radius-card); }
      .qf-inline__divider { width: 100%; height: 1px; margin: 0 12px; }
      .qf-inline__btn { padding: 16px; }
    }`,
  js: `
    (function() {
      var f = document.getElementById('leadFormInline');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! Vi ringer dig op inden for 24 timer.');
        f.reset();
      });
    })();`
};
