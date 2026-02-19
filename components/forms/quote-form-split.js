export default {
  id: 'quote-form-split',
  name: 'Quote Form — Split Panel',
  category: 'Form',
  description: 'Side-by-side layout: red USP panel left, white contact form right',
  html: `
    <section class="qf-split">
      <div class="qf-split__inner">
        <!-- Left: USP -->
        <div class="qf-split__left">
          <div class="qf-split__brand">Tryg</div>
          <h2 class="qf-split__title">Danmarks mest<br>anbefalede forsikring</h2>
          <ul class="qf-split__usps">
            <li>
              <span class="qf-split__usp-icon">✓</span>
              <div>
                <strong>Svar inden for 2 timer</strong>
                <p>Vi ringer dig op i hverdagstid</p>
              </div>
            </li>
            <li>
              <span class="qf-split__usp-icon">✓</span>
              <div>
                <strong>Ingen binding</strong>
                <p>Opsig til enhver tid</p>
              </div>
            </li>
            <li>
              <span class="qf-split__usp-icon">✓</span>
              <div>
                <strong>Op til 20% rabat</strong>
                <p>Samlet alle dine forsikringer</p>
              </div>
            </li>
            <li>
              <span class="qf-split__usp-icon">✓</span>
              <div>
                <strong>Skader døgnet rundt</strong>
                <p>24/7 skadeshjælp hele året</p>
              </div>
            </li>
          </ul>
          <div class="qf-split__rating">
            <span class="qf-split__stars">★★★★★</span>
            <span>4.8 / 5 · 12.000+ anmeldelser</span>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="qf-split__right">
          <h3 class="qf-split__form-title">Få et gratis tilbud</h3>
          <p class="qf-split__form-sub">Udfyld formularen — det tager under 60 sekunder.</p>
          <form id="leadFormSplit">
            <div class="qf-split__field">
              <label for="sp-name">Fulde navn</label>
              <input type="text" id="sp-name" name="name" required placeholder="Anders Jensen">
            </div>
            <div class="qf-split__field">
              <label for="sp-phone">Telefon</label>
              <input type="tel" id="sp-phone" name="phone" required placeholder="+45 12 34 56 78">
            </div>
            <div class="qf-split__field">
              <label for="sp-email">E-mail</label>
              <input type="email" id="sp-email" name="email" required placeholder="anders@eksempel.dk">
            </div>
            <div class="qf-split__field">
              <label for="sp-product">Hvad vil du forsikre?</label>
              <select id="sp-product" name="product" required>
                <option value="">Vælg produkt</option>
                <option value="bil">Bilforsikring</option>
                <option value="bolig">Boligforsikring</option>
                <option value="rejse">Rejseforsikring</option>
                <option value="indbo">Indboforsikring</option>
                <option value="erhverv">Erhvervsforsikring</option>
              </select>
            </div>
            <button type="submit" class="qf-split__submit" data-track="cta">
              Send forespørgsel →
            </button>
            <p class="qf-split__gdpr">
              Ved at indsende accepterer du vores
              <a href="#">privatlivspolitik</a>.
            </p>
          </form>
        </div>
      </div>
    </section>`,
  css: `
    .qf-split {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: var(--color-bg-alt);
    }
    .qf-split__inner {
      max-width: 860px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr;
      border-radius: var(--radius-card); overflow: hidden;
      box-shadow: 0 8px 48px rgba(0,0,0,0.12);
    }
    .qf-split__left {
      background: var(--color-primary); color: #fff;
      padding: 48px 40px; display: flex; flex-direction: column; gap: 0;
    }
    .qf-split__brand {
      font-family: var(--font-heading); font-size: 1.125rem; font-weight: 800;
      opacity: 0.85; margin-bottom: 20px; letter-spacing: 1px; text-transform: uppercase;
    }
    .qf-split__title {
      font-family: var(--font-heading); font-size: 1.875rem; line-height: 1.2;
      color: #fff; margin-bottom: 28px;
    }
    .qf-split__usps { list-style: none; display: flex; flex-direction: column; gap: 16px; flex: 1; }
    .qf-split__usps li { display: flex; align-items: flex-start; gap: 12px; }
    .qf-split__usp-icon {
      width: 22px; height: 22px; border-radius: 50%;
      background: rgba(255,255,255,0.25); display: flex; align-items: center;
      justify-content: center; font-size: 0.75rem; font-weight: 800; flex-shrink: 0; margin-top: 1px;
    }
    .qf-split__usps strong { font-size: 0.9375rem; display: block; margin-bottom: 2px; }
    .qf-split__usps p { font-size: 0.8125rem; opacity: 0.8; }
    .qf-split__rating {
      margin-top: 28px; display: flex; align-items: center; gap: 10px;
      font-size: 0.8125rem; opacity: 0.85;
    }
    .qf-split__stars { color: #ffd700; font-size: 1rem; letter-spacing: 1px; }
    .qf-split__right { background: #fff; padding: 48px 40px; }
    .qf-split__form-title {
      font-family: var(--font-heading); font-size: 1.375rem; margin-bottom: 6px;
    }
    .qf-split__form-sub { color: var(--color-text-light); font-size: 0.875rem; margin-bottom: 24px; }
    .qf-split__field { margin-bottom: 14px; }
    .qf-split__field label {
      display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 4px;
    }
    .qf-split__field input, .qf-split__field select {
      width: 100%; padding: 11px 14px;
      border: 1.5px solid var(--color-border); border-radius: var(--radius-sm);
      font-size: 0.9375rem; font-family: var(--font-body); transition: border-color 0.2s;
    }
    .qf-split__field input:focus, .qf-split__field select:focus {
      outline: none; border-color: var(--color-primary);
    }
    .qf-split__submit {
      display: block; width: 100%; padding: 14px;
      background: var(--color-primary); color: #fff; border: none;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      cursor: pointer; margin-top: 8px; transition: background 0.2s;
    }
    .qf-split__submit:hover { background: var(--color-primary-dark); }
    .qf-split__gdpr { font-size: 0.75rem; color: #bbb; margin-top: 10px; text-align: center; }
    .qf-split__gdpr a { color: #aaa; }
    @media (max-width: 700px) {
      .qf-split { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-split__inner { grid-template-columns: 1fr; }
      .qf-split__left { padding: 32px 24px; }
      .qf-split__right { padding: 32px 24px; }
    }`,
  js: `
    (function() {
      var f = document.getElementById('leadFormSplit');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! En rådgiver kontakter dig snarest muligt.');
        f.reset();
      });
    })();`
};
