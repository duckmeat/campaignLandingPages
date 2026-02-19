export default {
  id: 'conv-social-proof-cta',
  name: 'Conversion — Social Proof CTA',
  category: 'Conversion',
  description: 'Real-time customer count, avatar stack, star rating and live activity feed driving action',
  html: `
    <section class="cvsp">
      <div class="cvsp__inner">
        <div class="cvsp__social">
          <div class="cvsp__avatars">
            <img src="https://i.pravatar.cc/40?img=1" alt="" class="cvsp__av">
            <img src="https://i.pravatar.cc/40?img=5" alt="" class="cvsp__av">
            <img src="https://i.pravatar.cc/40?img=9" alt="" class="cvsp__av">
            <img src="https://i.pravatar.cc/40?img=12" alt="" class="cvsp__av">
            <div class="cvsp__av cvsp__av--more">+2.4M</div>
          </div>
          <div class="cvsp__rating">
            <span class="cvsp__stars">★★★★★</span>
            <strong>4.8</strong>
            <span>· 12.000+ anmeldelser</span>
          </div>
        </div>

        <div class="cvsp__content">
          <h2 class="cvsp__title">Slut dig til 2,4 millioner trygge kunder</h2>
          <p class="cvsp__sub">
            <span class="cvsp__live-dot"></span>
            <span id="cvspCount">237</span> danskere har anmodet om et tilbud i dag
          </p>
        </div>

        <div class="cvsp__actions">
          <a href="#form" class="cvsp__cta" data-track="cta">Få dit tilbud nu</a>
          <div class="cvsp__recent" id="cvspRecent">
            <span class="cvsp__recent-dot"></span>
            <span id="cvspRecentText">Erik fra Aarhus fik netop et tilbud</span>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .cvsp {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: #fff; border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
    }
    .cvsp__inner {
      max-width: 1000px; margin: 0 auto;
      display: grid; grid-template-columns: auto 1fr auto; gap: 40px; align-items: center;
    }
    .cvsp__social { display: flex; flex-direction: column; gap: 10px; }
    .cvsp__avatars { display: flex; align-items: center; }
    .cvsp__av {
      width: 36px; height: 36px; border-radius: 50%;
      border: 2px solid #fff; margin-left: -8px; object-fit: cover;
    }
    .cvsp__av:first-child { margin-left: 0; }
    .cvsp__av--more {
      background: var(--color-primary); color: #fff;
      font-size: 0.6rem; font-weight: 700; display: flex;
      align-items: center; justify-content: center;
    }
    .cvsp__rating { display: flex; align-items: center; gap: 5px; font-size: 0.8125rem; white-space: nowrap; }
    .cvsp__stars { color: #fbbf24; letter-spacing: 1px; }
    .cvsp__title {
      font-family: var(--font-heading); font-size: 1.625rem; margin-bottom: 8px;
    }
    .cvsp__sub {
      display: flex; align-items: center; gap: 8px;
      color: var(--color-text-light); font-size: 0.9rem;
    }
    .cvsp__live-dot {
      width: 8px; height: 8px; border-radius: 50%; background: #22c55e;
      flex-shrink: 0; animation: cvspPulse 1.5s infinite;
    }
    @keyframes cvspPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.3); }
    }
    .cvsp__actions { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
    .cvsp__cta {
      display: block; padding: 14px 32px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      text-decoration: none; text-align: center; transition: background 0.2s;
      white-space: nowrap;
    }
    .cvsp__cta:hover { background: var(--color-primary-dark); }
    .cvsp__recent {
      display: flex; align-items: center; gap: 6px;
      font-size: 0.78rem; color: var(--color-text-light); white-space: nowrap;
    }
    .cvsp__recent-dot {
      width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0;
    }
    @media (max-width: 768px) {
      .cvsp { padding: var(--spacing-lg) var(--spacing-md); }
      .cvsp__inner { grid-template-columns: 1fr; gap: 20px; }
      .cvsp__title { font-size: 1.375rem; }
    }`,
  js: `
    (function() {
      var countEl = document.getElementById('cvspCount');
      var recentEl = document.getElementById('cvspRecentText');
      var names = ['Erik','Sofie','Lars','Maria','Henrik','Camilla','Mads','Lotte','Peter','Anne'];
      var cities = ['København','Aarhus','Odense','Aalborg','Esbjerg','Randers','Vejle','Horsens'];
      var actions = ['fik netop et tilbud','anmodede om en beregning','tilmeldte sig','sparede 18%'];
      var count = 237;

      function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

      setInterval(function() {
        count += Math.floor(Math.random() * 3) + 1;
        if (countEl) countEl.textContent = count;
      }, 8000);

      setInterval(function() {
        if (recentEl) {
          recentEl.textContent = rand(names) + ' fra ' + rand(cities) + ' ' + rand(actions);
        }
      }, 5000);
    })();`
};
