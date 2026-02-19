export default {
  id: 'trust-image-community',
  name: 'Trust — Community & CSR',
  category: 'Trust',
  description: 'Photo mosaic showing Tryg\'s community impact with stats and text',
  html: `
    <section class="ticm">
      <div class="ticm__inner">
        <div class="ticm__content">
          <div class="ticm__eyebrow">TrygFonden</div>
          <h2 class="ticm__title">Vi investerer i Danmarks tryghed</h2>
          <p class="ticm__body">
            Hvert år donerer Tryg hundredevis af millioner til TrygFonden, som støtter
            frivillige organisationer, nærpoliti og forebyggende projekter over hele landet.
            Når du vælger Tryg, er du med til at gøre en forskel.
          </p>
          <div class="ticm__impact">
            <div class="ticm__impact-item">
              <strong>500M+</strong>
              <span>kr. doneret siden 2002</span>
            </div>
            <div class="ticm__impact-item">
              <strong>3.700+</strong>
              <span>projekter støttet</span>
            </div>
            <div class="ticm__impact-item">
              <strong>1,5M</strong>
              <span>danskere berørt hvert år</span>
            </div>
          </div>
          <a href="#form" class="ticm__cta" data-track="cta">Læs om TrygFonden →</a>
        </div>
        <div class="ticm__mosaic">
          <div class="ticm__mosaic-grid">
            <img class="ticm__mimg ticm__mimg--tall"
                 src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80"
                 alt="Frivillige" loading="lazy">
            <img class="ticm__mimg"
                 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80"
                 alt="Børn" loading="lazy">
            <img class="ticm__mimg"
                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80"
                 alt="Fællesskab" loading="lazy">
            <img class="ticm__mimg ticm__mimg--wide"
                 src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                 alt="Sport og fællesskab" loading="lazy">
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .ticm { padding: var(--spacing-xl) var(--spacing-lg); background: #fff; }
    .ticm__inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
    }
    .ticm__eyebrow {
      display: inline-block; padding: 4px 14px;
      background: #e8f4e8; color: #2d7a2d;
      border-radius: 20px; font-size: 0.75rem; font-weight: 700;
      letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px;
    }
    .ticm__title { font-family: var(--font-heading); font-size: 2rem; line-height: 1.2; margin-bottom: 14px; }
    .ticm__body { color: var(--color-text-light); line-height: 1.7; margin-bottom: 28px; }
    .ticm__impact { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 28px; }
    .ticm__impact-item { text-align: center; padding: 14px 8px; background: var(--color-bg-alt); border-radius: var(--radius-sm); }
    .ticm__impact-item strong { display: block; font-size: 1.25rem; color: var(--color-primary); font-weight: 800; }
    .ticm__impact-item span { font-size: 0.75rem; color: var(--color-text-light); }
    .ticm__cta {
      display: inline-block; padding: 11px 26px;
      background: #fff; border: 2px solid var(--color-text);
      color: var(--color-text); border-radius: var(--radius);
      font-weight: 700; font-size: 0.9rem; text-decoration: none;
      transition: all 0.2s;
    }
    .ticm__cta:hover { background: var(--color-text); color: #fff; }
    .ticm__mosaic-grid {
      display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 200px 200px;
      gap: 10px; border-radius: var(--radius-card); overflow: hidden;
    }
    .ticm__mimg { width: 100%; height: 100%; object-fit: cover; display: block; }
    .ticm__mimg--tall { grid-row: span 2; }
    .ticm__mimg--wide { grid-column: span 2; }
    @media (max-width: 768px) {
      .ticm { padding: var(--spacing-lg) var(--spacing-md); }
      .ticm__inner { grid-template-columns: 1fr; gap: 32px; }
      .ticm__impact { grid-template-columns: repeat(3, 1fr); }
    }`,
  js: ''
};
