export default {
  id: 'quote-form-home',
  name: 'Quote Form — Home',
  category: 'Form',
  description: 'Home insurance quote with address, property type and size in m²',
  html: `
    <section class="qf-home">
      <div class="qf-home__inner">
        <div class="qf-home__header">
          <span class="qf-home__badge">🏠 Boligforsikring</span>
          <h2 class="qf-home__title">Få tilbud på din boligforsikring</h2>
          <p class="qf-home__sub">Vi finder den bedste pris — ingen binding, ingen skjulte gebyrer.</p>
        </div>
        <form class="qf-home__form" id="leadFormHome">
          <div class="qf-home__field qf-home__field--full">
            <label for="home-address">Boligens adresse</label>
            <input type="text" id="home-address" name="address" required
                   placeholder="Strandvejen 100, 2900 Hellerup">
          </div>
          <div class="qf-home__grid">
            <div class="qf-home__field">
              <label for="home-type">Boligtype</label>
              <select id="home-type" name="type" required>
                <option value="">Vælg type</option>
                <option value="villa">Villa / Hus</option>
                <option value="raekkehus">Rækkehus</option>
                <option value="lejlighed">Lejlighed</option>
                <option value="sommerhus">Sommerhus</option>
              </select>
            </div>
            <div class="qf-home__field">
              <label for="home-size">Størrelse (m²)</label>
              <input type="number" id="home-size" name="size" min="10" max="2000"
                     required placeholder="120">
            </div>
            <div class="qf-home__field">
              <label for="home-year">Byggeår</label>
              <input type="number" id="home-year" name="buildYear" min="1850" max="2024"
                     required placeholder="1998">
            </div>
            <div class="qf-home__field">
              <label for="home-phone">Telefon</label>
              <input type="tel" id="home-phone" name="phone" required placeholder="+45 12 34 56 78">
            </div>
          </div>
          <button type="submit" class="qf-home__submit" data-track="cta">Beregn tilbud</button>
        </form>
        <p class="qf-home__note">Vi kontakter dig inden for 1 hverdag.</p>
      </div>
    </section>`,
  css: `
    .qf-home {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: linear-gradient(160deg, #fff8f4 0%, #fff 60%);
    }
    .qf-home__inner { max-width: 600px; margin: 0 auto; }
    .qf-home__header { margin-bottom: var(--spacing-lg); }
    .qf-home__badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: var(--color-primary); color: #fff;
      font-size: 0.75rem; font-weight: 700; letter-spacing: 0.8px;
      text-transform: uppercase; padding: 5px 14px;
      border-radius: 20px; margin-bottom: 14px;
    }
    .qf-home__title {
      font-family: var(--font-heading);
      font-size: 1.875rem; line-height: 1.2;
      color: var(--color-text); margin-bottom: 8px;
    }
    .qf-home__sub { color: var(--color-text-light); }
    .qf-home__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .qf-home__field { margin-bottom: 0; }
    .qf-home__field--full { margin-bottom: 14px; }
    .qf-home__field label {
      display: block; font-size: 0.8125rem; font-weight: 600;
      color: var(--color-text); margin-bottom: 5px;
    }
    .qf-home__field input, .qf-home__field select {
      width: 100%; padding: 11px 14px;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-sm);
      font-size: 0.9375rem; font-family: var(--font-body);
      transition: border-color 0.2s;
    }
    .qf-home__field input:focus, .qf-home__field select:focus {
      outline: none; border-color: var(--color-primary);
    }
    .qf-home__submit {
      display: block; width: 100%; padding: 15px;
      background: var(--color-primary); color: #fff;
      border: none; border-radius: var(--radius);
      font-size: 1.0625rem; font-weight: 700; cursor: pointer;
      margin-top: 20px; transition: background 0.2s;
    }
    .qf-home__submit:hover { background: var(--color-primary-dark); }
    .qf-home__note {
      text-align: center; font-size: 0.8rem;
      color: #bbb; margin-top: 12px;
    }
    @media (max-width: 600px) {
      .qf-home { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-home__grid { grid-template-columns: 1fr; }
    }`,
  js: `
    (function() {
      var f = document.getElementById('leadFormHome');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! Vi vender tilbage med et tilbud på din bolig.');
        f.reset();
      });
    })();`
};
