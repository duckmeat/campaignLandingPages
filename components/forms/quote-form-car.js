export default {
  id: 'quote-form-car',
  name: 'Quote Form — Car',
  category: 'Form',
  description: 'Car insurance quote with Danish plate input, birth year and km/year',
  html: `
    <section class="qf-car">
      <div class="qf-car__inner">
        <div class="qf-car__icon">🚗</div>
        <h2 class="qf-car__title">Bilforsikring — hurtigt tilbud</h2>
        <p class="qf-car__sub">Indtast dine oplysninger og få et tilbud på 2 minutter.</p>
        <form class="qf-car__form" id="leadFormCar">
          <div class="qf-car__field">
            <label for="car-plate">Nummerplade</label>
            <div class="qf-car__plate-wrap">
              <span class="qf-car__plate-dk">DK</span>
              <input type="text" id="car-plate" name="plate" maxlength="7"
                     placeholder="AB 12 345" required autocomplete="off">
            </div>
          </div>
          <div class="qf-car__row">
            <div class="qf-car__field">
              <label for="car-birth">Fødselsår</label>
              <select id="car-birth" name="birthYear" required>
                <option value="">Vælg år</option>
                <option value="2005">2005</option><option value="2000">2000</option>
                <option value="1995">1995</option><option value="1990">1990</option>
                <option value="1985">1985</option><option value="1980">1980</option>
                <option value="1975">1975</option><option value="1970">1970</option>
                <option value="1965">1965</option><option value="1960">1960</option>
              </select>
            </div>
            <div class="qf-car__field">
              <label for="car-km">Km / år</label>
              <select id="car-km" name="km" required>
                <option value="">Vælg</option>
                <option value="10000">Op til 10.000 km</option>
                <option value="20000">10–20.000 km</option>
                <option value="30000">20–30.000 km</option>
                <option value="40000">Over 30.000 km</option>
              </select>
            </div>
          </div>
          <div class="qf-car__field">
            <label for="car-phone">Telefon</label>
            <input type="tel" id="car-phone" name="phone" required placeholder="+45 12 34 56 78">
          </div>
          <button type="submit" class="qf-car__submit" data-track="cta">Beregn pris →</button>
        </form>
      </div>
    </section>`,
  css: `
    .qf-car {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: var(--color-bg-alt);
    }
    .qf-car__inner {
      max-width: 520px;
      margin: 0 auto;
      background: #fff;
      border-radius: var(--radius-card);
      padding: 36px 40px;
      box-shadow: 0 4px 32px rgba(0,0,0,0.09);
    }
    .qf-car__icon { font-size: 2.25rem; text-align: center; margin-bottom: 8px; }
    .qf-car__title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 6px;
    }
    .qf-car__sub {
      text-align: center;
      color: var(--color-text-light);
      font-size: 0.9rem;
      margin-bottom: var(--spacing-lg);
    }
    .qf-car__row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .qf-car__field { margin-bottom: 14px; }
    .qf-car__field label {
      display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 4px;
    }
    .qf-car__field input, .qf-car__field select {
      width: 100%; padding: 10px 13px;
      border: 1.5px solid var(--color-border);
      border-radius: var(--radius-sm);
      font-size: 1rem; font-family: var(--font-body);
      transition: border-color 0.2s, box-shadow 0.2s;
      background: #fff;
    }
    .qf-car__field input:focus, .qf-car__field select:focus {
      outline: none; border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(237,28,36,0.1);
    }
    .qf-car__plate-wrap {
      display: flex; align-items: stretch;
      border: 1.5px solid var(--color-border);
      border-radius: var(--radius-sm); overflow: hidden;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .qf-car__plate-wrap:focus-within {
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(237,28,36,0.1);
    }
    .qf-car__plate-dk {
      background: #003399; color: #fff;
      font-size: 0.7rem; font-weight: 700; letter-spacing: 1px;
      padding: 0 11px; display: flex; align-items: center;
    }
    .qf-car__plate-wrap input {
      border: none; border-radius: 0; flex: 1;
      text-transform: uppercase; letter-spacing: 3px; font-weight: 700;
    }
    .qf-car__plate-wrap input:focus { box-shadow: none; }
    .qf-car__submit {
      display: block; width: 100%; padding: 14px;
      background: var(--color-primary); color: #fff;
      border: none; border-radius: var(--radius);
      font-size: 1rem; font-weight: 700; cursor: pointer;
      margin-top: 8px; transition: background 0.2s, transform 0.1s;
    }
    .qf-car__submit:hover { background: var(--color-primary-dark); transform: translateY(-1px); }
    @media (max-width: 600px) {
      .qf-car { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-car__inner { padding: 24px 20px; }
      .qf-car__row { grid-template-columns: 1fr; }
    }`,
  js: `
    (function() {
      var f = document.getElementById('leadFormCar');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! Vi beregner dit tilbud og vender snart tilbage.');
        f.reset();
      });
    })();`
};
