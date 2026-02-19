export default {
  id: 'trust-image-awards',
  name: 'Trust — Awards & Recognition',
  category: 'Trust',
  description: 'Industry awards and certifications with logos, photo background and descriptive text',
  html: `
    <section class="tiaw">
      <div class="tiaw__inner">
        <div class="tiaw__left">
          <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=700&q=80"
               alt="Prisceremoni" loading="lazy" class="tiaw__photo">
          <div class="tiaw__photo-caption">Tryg modtog 4 priser ved Insurance Awards 2023</div>
        </div>
        <div class="tiaw__right">
          <div class="tiaw__eyebrow">Anerkendt af branchen</div>
          <h2 class="tiaw__title">Priser &amp; certifikationer</h2>
          <p class="tiaw__body">
            Vores arbejde for kunderne er blevet anerkendt igennem en lang række
            branchens højest estimerede priser. Det er et bevis på vores løbende
            engagement i kvalitet og kundetilfredshed.
          </p>
          <div class="tiaw__awards">
            <div class="tiaw__award">
              <div class="tiaw__award-icon">🏆</div>
              <div>
                <strong>Årets forsikringsselskab</strong>
                <span>Insurance Awards 2023</span>
              </div>
            </div>
            <div class="tiaw__award">
              <div class="tiaw__award-icon">⭐</div>
              <div>
                <strong>Bedst i test — bilforsikring</strong>
                <span>Forbrugerrådet Tænk 2023</span>
              </div>
            </div>
            <div class="tiaw__award">
              <div class="tiaw__award-icon">🌿</div>
              <div>
                <strong>Grøn virksomhed af året</strong>
                <span>Nordic Sustainability Awards 2023</span>
              </div>
            </div>
            <div class="tiaw__award">
              <div class="tiaw__award-icon">💙</div>
              <div>
                <strong>Højest kundetilfredshed</strong>
                <span>EPSI Rating 2022 &amp; 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tiaw { padding: var(--spacing-xl) var(--spacing-lg); background: #fff; }
    .tiaw__inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
    }
    .tiaw__left { position: relative; }
    .tiaw__photo {
      width: 100%; height: 400px; object-fit: cover; display: block;
      border-radius: var(--radius-card);
    }
    .tiaw__photo-caption {
      margin-top: 10px; font-size: 0.8rem; color: #aaa; text-align: center; font-style: italic;
    }
    .tiaw__eyebrow {
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 1.5px; color: var(--color-primary); margin-bottom: 10px;
    }
    .tiaw__title {
      font-family: var(--font-heading); font-size: 2rem; margin-bottom: 14px;
    }
    .tiaw__body { color: var(--color-text-light); line-height: 1.7; margin-bottom: 28px; }
    .tiaw__awards { display: flex; flex-direction: column; gap: 16px; }
    .tiaw__award {
      display: flex; align-items: center; gap: 16px;
      padding: 14px 16px; background: var(--color-bg-alt);
      border-radius: var(--radius-sm); border: 1px solid var(--color-border);
    }
    .tiaw__award-icon { font-size: 1.5rem; flex-shrink: 0; }
    .tiaw__award strong { display: block; font-size: 0.9375rem; margin-bottom: 2px; }
    .tiaw__award span { font-size: 0.8rem; color: var(--color-text-light); }
    @media (max-width: 768px) {
      .tiaw { padding: var(--spacing-lg) var(--spacing-md); }
      .tiaw__inner { grid-template-columns: 1fr; gap: 32px; }
      .tiaw__photo { height: 260px; }
    }`,
  js: ''
};
