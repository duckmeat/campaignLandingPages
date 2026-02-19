export default {
  id: 'quote-form-floating',
  name: 'Quote Form — Floating Labels',
  category: 'Form',
  description: 'Modern floating label fields with animated underline focus and minimal design',
  html: `
    <section class="qf-float">
      <div class="qf-float__inner">
        <div class="qf-float__eyebrow">Gratis &amp; uforpligtende</div>
        <h2 class="qf-float__title">Få et tilbud på <em>din</em> forsikring</h2>
        <form class="qf-float__form" id="leadFormFloat">
          <div class="qf-float__field">
            <input type="text" id="fl-name" name="name" required placeholder=" ">
            <label for="fl-name">Fulde navn</label>
          </div>
          <div class="qf-float__field">
            <input type="tel" id="fl-phone" name="phone" required placeholder=" ">
            <label for="fl-phone">Telefonnummer</label>
          </div>
          <div class="qf-float__field">
            <input type="email" id="fl-email" name="email" placeholder=" ">
            <label for="fl-email">E-mailadresse (valgfrit)</label>
          </div>
          <div class="qf-float__select-wrap">
            <label class="qf-float__select-label" for="fl-prod">Forsikringstype</label>
            <div class="qf-float__select-box">
              <button type="button" class="qf-float__opt active" data-val="bil">Bil</button>
              <button type="button" class="qf-float__opt" data-val="bolig">Bolig</button>
              <button type="button" class="qf-float__opt" data-val="rejse">Rejse</button>
              <button type="button" class="qf-float__opt" data-val="indbo">Indbo</button>
            </div>
            <input type="hidden" id="fl-prod" name="product" value="bil">
          </div>
          <button type="submit" class="qf-float__submit" data-track="cta">
            <span>Send forespørgsel</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </form>
        <div class="qf-float__footer">
          <span>🔒 Dine data er sikre</span>
          <span>·</span>
          <span>Svar inden for 2 timer</span>
          <span>·</span>
          <span>Ingen forpligtelse</span>
        </div>
      </div>
    </section>`,
  css: `
    .qf-float {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: #fff;
    }
    .qf-float__inner {
      max-width: 480px; margin: 0 auto;
    }
    .qf-float__eyebrow {
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 1.5px; color: var(--color-primary); margin-bottom: 10px;
    }
    .qf-float__title {
      font-family: var(--font-heading); font-size: 2rem; line-height: 1.2;
      color: var(--color-text); margin-bottom: 36px;
    }
    .qf-float__title em { font-style: normal; color: var(--color-primary); }
    /* Floating label field */
    .qf-float__field {
      position: relative; margin-bottom: 28px;
    }
    .qf-float__field input {
      width: 100%; border: none; border-bottom: 2px solid var(--color-border);
      border-radius: 0; padding: 18px 0 6px;
      font-size: 1rem; font-family: var(--font-body); color: var(--color-text);
      background: transparent; outline: none; transition: border-color 0.2s;
    }
    .qf-float__field label {
      position: absolute; left: 0; top: 18px;
      font-size: 1rem; color: #aaa;
      pointer-events: none; transition: all 0.2s;
    }
    /* Float up when focused or filled */
    .qf-float__field input:focus + label,
    .qf-float__field input:not(:placeholder-shown) + label {
      top: 2px; font-size: 0.75rem; color: var(--color-primary); font-weight: 600;
    }
    .qf-float__field input:focus { border-color: var(--color-primary); }
    /* Animated underline */
    .qf-float__field::after {
      content: ''; position: absolute; bottom: 0; left: 0;
      width: 0; height: 2px; background: var(--color-primary);
      transition: width 0.3s ease;
    }
    .qf-float__field:focus-within::after { width: 100%; }
    /* Product toggle */
    .qf-float__select-wrap { margin-bottom: 32px; }
    .qf-float__select-label {
      display: block; font-size: 0.75rem; font-weight: 600; color: #aaa;
      text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;
    }
    .qf-float__select-box {
      display: flex; gap: 0;
      border: 1.5px solid var(--color-border); border-radius: 8px; overflow: hidden;
    }
    .qf-float__opt {
      flex: 1; padding: 10px 4px; border: none; background: #fff;
      font-size: 0.875rem; font-weight: 600; color: #aaa;
      cursor: pointer; transition: background 0.15s, color 0.15s;
      border-right: 1px solid var(--color-border);
    }
    .qf-float__opt:last-child { border-right: none; }
    .qf-float__opt.active { background: var(--color-primary); color: #fff; }
    .qf-float__opt:hover:not(.active) { background: #fff5f5; color: var(--color-primary); }
    /* Submit */
    .qf-float__submit {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      width: 100%; padding: 16px;
      background: var(--color-text); color: #fff; border: none;
      border-radius: 8px; font-size: 1rem; font-weight: 700;
      cursor: pointer; transition: background 0.2s, transform 0.1s;
      letter-spacing: 0.2px;
    }
    .qf-float__submit:hover {
      background: var(--color-primary); transform: translateY(-1px);
    }
    /* Footer trust line */
    .qf-float__footer {
      display: flex; align-items: center; justify-content: center;
      gap: 8px; margin-top: 18px;
      font-size: 0.8rem; color: #bbb;
    }
    @media (max-width: 600px) {
      .qf-float { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-float__title { font-size: 1.625rem; }
      .qf-float__footer { flex-wrap: wrap; }
    }`,
  js: `
    (function() {
      var opts = document.querySelectorAll('.qf-float__opt');
      var hidden = document.getElementById('fl-prod');
      opts.forEach(function(btn) {
        btn.addEventListener('click', function() {
          opts.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          if (hidden) hidden.value = btn.dataset.val;
        });
      });
      var f = document.getElementById('leadFormFloat');
      if (f) f.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tak! Vi vender tilbage med dit personlige tilbud inden for 2 timer.');
        f.reset();
        opts.forEach(function(b) { b.classList.remove('active'); });
        if (opts[0]) opts[0].classList.add('active');
        if (hidden) hidden.value = 'bil';
      });
    })();`
};
