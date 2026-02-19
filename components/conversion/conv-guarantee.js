export default {
  id: 'conv-guarantee',
  name: 'Conversion — Guarantee CTA',
  category: 'Conversion',
  description: 'CTA anchored by a prominent satisfaction/price-match guarantee badge to reduce hesitation',
  html: `
    <section class="cvgu">
      <div class="cvgu__inner">
        <div class="cvgu__badge-wrap">
          <div class="cvgu__badge">
            <div class="cvgu__badge-ring">
              <span class="cvgu__badge-check">✓</span>
            </div>
            <div class="cvgu__badge-text">
              <strong>Prisgaranti</strong>
              <span>Vi matcher ethvert tilbud</span>
            </div>
          </div>
        </div>

        <div class="cvgu__content">
          <h2 class="cvgu__title">Din tryghed — garanteret</h2>
          <p class="cvgu__sub">
            Finder du en tilsvarende dækning billigere et andet sted, matcher vi prisen.
            Ingen spørgsmål, ingen besvær.
          </p>
          <div class="cvgu__guarantees">
            <div class="cvgu__g">
              <span class="cvgu__g-icon">💰</span>
              <div>
                <strong>Prisgaranti</strong>
                <p>Vi matcher konkurrenternes pris</p>
              </div>
            </div>
            <div class="cvgu__g">
              <span class="cvgu__g-icon">🔄</span>
              <div>
                <strong>Fortrydelsesret</strong>
                <p>14 dages fuld fortrydelsesret</p>
              </div>
            </div>
            <div class="cvgu__g">
              <span class="cvgu__g-icon">📞</span>
              <div>
                <strong>Personlig hjælp</strong>
                <p>Din egen rådgiver når du har brug for det</p>
              </div>
            </div>
          </div>
          <a href="#form" class="cvgu__cta" data-track="cta">Få et risikofrit tilbud →</a>
          <p class="cvgu__legal">Ingen binding · Ingen skjulte gebyrer · Opsig til enhver tid</p>
        </div>
      </div>
    </section>`,
  css: `
    .cvgu { padding: var(--spacing-xl) var(--spacing-lg); background: #fff; }
    .cvgu__inner {
      max-width: 920px; margin: 0 auto;
      display: grid; grid-template-columns: auto 1fr; gap: 56px; align-items: center;
    }
    .cvgu__badge-wrap { display: flex; justify-content: center; }
    .cvgu__badge {
      width: 160px; height: 160px; border-radius: 50%;
      border: 3px solid var(--color-primary);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: #fff5f5; text-align: center; padding: 16px; gap: 8px;
      position: relative;
    }
    .cvgu__badge::before {
      content: ''; position: absolute; inset: 6px; border-radius: 50%;
      border: 1.5px dashed rgba(237,28,36,0.3);
    }
    .cvgu__badge-ring {
      width: 44px; height: 44px; border-radius: 50%;
      background: var(--color-primary); display: flex; align-items: center; justify-content: center;
    }
    .cvgu__badge-check { color: #fff; font-size: 1.25rem; font-weight: 900; }
    .cvgu__badge-text strong { display: block; font-size: 0.875rem; font-weight: 800; color: var(--color-primary); }
    .cvgu__badge-text span { font-size: 0.72rem; color: var(--color-text-light); }
    .cvgu__title { font-family: var(--font-heading); font-size: 2rem; margin-bottom: 10px; }
    .cvgu__sub { color: var(--color-text-light); line-height: 1.7; margin-bottom: 24px; }
    .cvgu__guarantees { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
    .cvgu__g { display: flex; align-items: flex-start; gap: 14px; }
    .cvgu__g-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 1px; }
    .cvgu__g strong { display: block; font-size: 0.9375rem; margin-bottom: 1px; }
    .cvgu__g p { font-size: 0.8rem; color: var(--color-text-light); margin: 0; }
    .cvgu__cta {
      display: inline-block; padding: 14px 36px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-size: 1.0625rem; font-weight: 700;
      text-decoration: none; transition: background 0.2s;
    }
    .cvgu__cta:hover { background: var(--color-primary-dark); }
    .cvgu__legal { font-size: 0.78rem; color: #bbb; margin-top: 12px; }
    @media (max-width: 700px) {
      .cvgu { padding: var(--spacing-lg) var(--spacing-md); }
      .cvgu__inner { grid-template-columns: 1fr; text-align: center; }
      .cvgu__g { text-align: left; }
    }`,
  js: ''
};
