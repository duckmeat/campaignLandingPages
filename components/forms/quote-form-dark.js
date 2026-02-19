export default {
  id: 'quote-form-dark',
  name: 'Quote Form — Dark Theme',
  category: 'Form',
  description: 'Dark charcoal background with high-contrast fields and red CTA',
  html: `
    <section class="qf-dark">
      <div class="qf-dark__inner">
        <div class="qf-dark__left">
          <div class="qf-dark__tagline">Gratis tilbud · Ingen binding</div>
          <h2 class="qf-dark__title">Spar op til<br><span>20%</span> på din<br>forsikring</h2>
          <p class="qf-dark__sub">Sammenlign og skift nemt til Tryg.<br>Vi klarer papirarbejdet for dig.</p>
          <div class="qf-dark__trust">
            <div class="qf-dark__trust-item">
              <strong>2.4 mio.</strong>
              <span>kunder i Norden</span>
            </div>
            <div class="qf-dark__trust-sep"></div>
            <div class="qf-dark__trust-item">
              <strong>1924</strong>
              <span>grundlagt</span>
            </div>
            <div class="qf-dark__trust-sep"></div>
            <div class="qf-dark__trust-item">
              <strong>24/7</strong>
              <span>skadeshjælp</span>
            </div>
          </div>
        </div>
        <div class="qf-dark__right">
          <form id="leadFormDark">
            <h3 class="qf-dark__form-title">Beregn dit tilbud</h3>
            <div class="qf-dark__field">
              <label for="dk-product">Forsikringstype</label>
              <select id="dk-product" name="product" required>
                <option value="">Vælg produkt…</option>
                <option value="bil">Bilforsikring</option>
                <option value="bolig">Boligforsikring</option>
                <option value="rejse">Rejseforsikring</option>
                <option value="indbo">Indboforsikring</option>
                <option value="ulykke">Ulykkesforsikring</option>
              </select>
            </div>
            <div class="qf-dark__row">
              <div class="qf-dark__field">
                <label for="dk-name">Navn</label>
                <input type="text" id="dk-name" name="name" required placeholder="Anders Jensen">
              </div>
              <div class="qf-dark__field">
                <label for="dk-zip">Postnr.</label>
                <input type="text" id="dk-zip" name="zip" maxlength="4" placeholder="2100">
              </div>
            </div>
            <div class="qf-dark__field">
              <label for="dk-phone">Telefon</label>
              <input type="tel" id="dk-phone" name="phone" required placeholder="+45 12 34 56 78">
            </div>
            <div class="qf-dark__consent">
              <input type="checkbox" id="dk-consent" required>
              <label for="dk-consent">Jeg accepterer at Tryg må kontakte mig</label>
            </div>
            <button type="submit" class="qf-dark__submit" data-track="cta">
              Få gratis tilbud →
            </button>
          </form>
        </div>
      </div>
    </section>`,
  css: `
    .qf-dark {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: #0f1923;
    }
    .qf-dark__inner {
      max-width: 860px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 0;
      border-radius: var(--radius-card); overflow: hidden;
    }
    .qf-dark__left {
      background: #1a2634; padding: 48px 40px;
      display: flex; flex-direction: column; justify-content: center;
    }
    .qf-dark__tagline {
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 1.5px; color: var(--color-primary); margin-bottom: 16px;
    }
    .qf-dark__title {
      font-family: var(--font-heading); font-size: 2.25rem; line-height: 1.15;
      color: #fff; margin-bottom: 16px;
    }
    .qf-dark__title span { color: var(--color-primary); }
    .qf-dark__sub { color: #8899aa; font-size: 0.9375rem; line-height: 1.6; margin-bottom: 32px; }
    .qf-dark__trust { display: flex; gap: 0; align-items: center; }
    .qf-dark__trust-item { text-align: center; flex: 1; }
    .qf-dark__trust-item strong { display: block; font-size: 1.25rem; color: #fff; font-weight: 700; }
    .qf-dark__trust-item span { font-size: 0.75rem; color: #667; }
    .qf-dark__trust-sep { width: 1px; height: 36px; background: #2a3a4a; flex-shrink: 0; }
    .qf-dark__right { background: #22303f; padding: 48px 40px; }
    .qf-dark__form-title {
      font-family: var(--font-heading); font-size: 1.25rem; color: #fff; margin-bottom: 24px;
    }
    .qf-dark__row { display: grid; grid-template-columns: 3fr 2fr; gap: 12px; }
    .qf-dark__field { margin-bottom: 14px; }
    .qf-dark__field label {
      display: block; font-size: 0.8rem; font-weight: 600; color: #8899aa;
      text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 6px;
    }
    .qf-dark__field input, .qf-dark__field select {
      width: 100%; padding: 11px 14px;
      background: #1a2634; border: 1px solid #2a3a4a;
      border-radius: var(--radius-sm); color: #fff;
      font-size: 0.9375rem; font-family: var(--font-body);
      transition: border-color 0.2s;
    }
    .qf-dark__field input::placeholder { color: #445566; }
    .qf-dark__field input:focus, .qf-dark__field select:focus {
      outline: none; border-color: var(--color-primary);
    }
    .qf-dark__field select option { background: #1a2634; }
    .qf-dark__consent {
      display: flex; align-items: flex-start; gap: 10px;
      margin-bottom: 16px; font-size: 0.8125rem; color: #667788;
    }
    .qf-dark__consent input { margin-top: 2px; accent-color: var(--color-primary); flex-shrink: 0; }
    .qf-dark__submit {
      display: block; width: 100%; padding: 14px;
      background: var(--color-primary); color: #fff; border: none;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      cursor: pointer; letter-spacing: 0.3px; transition: background 0.2s;
    }
    .qf-dark__submit:hover { background: var(--color-primary-dark); }
    @media (max-width: 700px) {
      .qf-dark { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-dark__inner { grid-template-columns: 1fr; }
      .qf-dark__left, .qf-dark__right { padding: 28px 22px; }
      .qf-dark__row { grid-template-columns: 1fr; }
    }`,
  js: `
    (function() {
      var f = document.getElementById('leadFormDark');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! En Tryg-rådgiver kontakter dig snarest.');
        f.reset();
      });
    })();`
};
