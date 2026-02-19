export default {
  id: 'quote-form',
  name: 'Quote / Lead Form',
  category: 'Form',
  description: 'Lead capture form with name, phone, email, and product type',
  html: `
    <section class="tryg-form" id="form">
      <div class="tryg-form__inner">
        <!-- EDIT: Form heading -->
        <h2 class="tryg-form__title">Beregn dit tilbud</h2>
        <!-- EDIT: Form subheading -->
        <p class="tryg-form__subtitle">Udfyld formularen, s\u00e5 kontakter vi dig inden for 24 timer.</p>
        <form class="tryg-form__form" id="leadForm">
          <div class="tryg-form__field">
            <!-- EDIT: Name field label -->
            <label for="field-name">Fulde navn</label>
            <input type="text" id="field-name" name="name" required placeholder="Anders Jensen">
          </div>
          <div class="tryg-form__field">
            <!-- EDIT: Phone field label -->
            <label for="field-phone">Telefon</label>
            <input type="tel" id="field-phone" name="phone" required placeholder="+45 12 34 56 78">
          </div>
          <div class="tryg-form__field">
            <!-- EDIT: Email field label -->
            <label for="field-email">E-mail</label>
            <input type="email" id="field-email" name="email" required placeholder="anders@eksempel.dk">
          </div>
          <div class="tryg-form__field">
            <!-- EDIT: Product type label and options -->
            <label for="field-product">Produkttype</label>
            <select id="field-product" name="product" required>
              <option value="">V\u00e6lg produkt</option>
              <option value="bilforsikring">Bilforsikring</option>
              <option value="husforsikring">Husforsikring</option>
              <option value="rejseforsikring">Rejseforsikring</option>
              <option value="indboforsikring">Indboforsikring</option>
            </select>
          </div>
          <!-- EDIT: Submit button text -->
          <button type="submit" class="tryg-form__submit" data-track="cta">Send foresp\u00f8rgsel</button>
        </form>
      </div>
    </section>`,
  css: `
    .tryg-form {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: var(--color-bg);
    }
    .tryg-form__inner {
      max-width: 560px;
      margin: 0 auto;
    }
    .tryg-form__title {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-sm);
      text-align: center;
    }
    .tryg-form__subtitle {
      text-align: center;
      color: var(--color-text-light);
      margin-bottom: var(--spacing-lg);
    }
    .tryg-form__field {
      margin-bottom: var(--spacing-md);
    }
    .tryg-form__field label {
      display: block;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-text);
      margin-bottom: 4px;
    }
    .tryg-form__field input,
    .tryg-form__field select {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      font-size: 1rem;
      font-family: var(--font-body);
      transition: border-color 0.2s;
    }
    .tryg-form__field input:focus,
    .tryg-form__field select:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px rgba(237, 28, 36, 0.1);
    }
    .tryg-form__submit {
      display: block;
      width: 100%;
      padding: 14px;
      background: var(--color-primary);
      color: #fff;
      border: none;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      margin-top: var(--spacing-md);
      transition: background 0.2s;
    }
    .tryg-form__submit:hover {
      background: var(--color-primary-dark);
    }
    @media (max-width: 600px) {
      .tryg-form {
        padding: var(--spacing-lg) var(--spacing-md);
      }
    }`,
  js: `
    (function() {
      var form = document.getElementById('leadForm');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          if (typeof s !== 'undefined' && s.t) { s.t(); }
          alert('Tak! Vi kontakter dig snarest.');
          form.reset();
        });
      }
    })();`
};
