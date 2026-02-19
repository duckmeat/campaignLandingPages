export default {
  id: 'trust-image-process',
  name: 'Trust — Process Steps with Photos',
  category: 'Trust',
  description: 'Numbered step-by-step process with alternating photo and text columns',
  html: `
    <section class="tipr">
      <div class="tipr__inner">
        <div class="tipr__head">
          <h2 class="tipr__title">Sådan kommer du i gang</h2>
          <p class="tipr__sub">Fra forespørgsel til dækning — enkelt og hurtigt.</p>
        </div>
        <div class="tipr__steps">
          <div class="tipr__step">
            <div class="tipr__step-img">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b6985?w=600&q=80"
                   alt="Udfyld formularen" loading="lazy">
            </div>
            <div class="tipr__step-content">
              <div class="tipr__num">01</div>
              <h3>Udfyld formularen</h3>
              <p>Det tager under 60 sekunder. Fortæl os hvad du vil forsikre og vi kontakter dig hurtigt.</p>
            </div>
          </div>
          <div class="tipr__step tipr__step--rev">
            <div class="tipr__step-img">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
                   alt="Vi ringer dig op" loading="lazy">
            </div>
            <div class="tipr__step-content">
              <div class="tipr__num">02</div>
              <h3>Vi ringer dig op</h3>
              <p>En dedikeret rådgiver gennemgår dine behov og sammensætter et tilbud skræddersyet til dig.</p>
            </div>
          </div>
          <div class="tipr__step">
            <div class="tipr__step-img">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                   alt="Godkend og vær dækket" loading="lazy">
            </div>
            <div class="tipr__step-content">
              <div class="tipr__num">03</div>
              <h3>Godkend og vær dækket</h3>
              <p>Acceptér tilbuddet online. Vi sender dig en bekræftelse og din police starter straks.</p>
              <a href="#form" class="tipr__cta" data-track="cta">Start nu →</a>
            </div>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tipr { padding: var(--spacing-xl) var(--spacing-lg); background: var(--color-bg-alt); }
    .tipr__inner { max-width: 960px; margin: 0 auto; }
    .tipr__head { text-align: center; margin-bottom: 56px; }
    .tipr__title { font-family: var(--font-heading); font-size: 2rem; margin-bottom: 10px; }
    .tipr__sub { color: var(--color-text-light); }
    .tipr__steps { display: flex; flex-direction: column; gap: 56px; }
    .tipr__step {
      display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center;
    }
    .tipr__step--rev { direction: rtl; }
    .tipr__step--rev > * { direction: ltr; }
    .tipr__step-img { border-radius: var(--radius-card); overflow: hidden; }
    .tipr__step-img img { width: 100%; height: 300px; object-fit: cover; display: block; }
    .tipr__num {
      font-family: var(--font-heading); font-size: 4rem; font-weight: 900;
      color: var(--color-primary); opacity: 0.15; line-height: 1; margin-bottom: -8px;
    }
    .tipr__step-content h3 {
      font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 12px;
    }
    .tipr__step-content p { color: var(--color-text-light); line-height: 1.7; margin-bottom: 16px; }
    .tipr__cta {
      display: inline-block; padding: 11px 24px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-weight: 700; font-size: 0.9rem;
      text-decoration: none; transition: background 0.2s;
    }
    .tipr__cta:hover { background: var(--color-primary-dark); }
    @media (max-width: 768px) {
      .tipr { padding: var(--spacing-lg) var(--spacing-md); }
      .tipr__step, .tipr__step--rev { grid-template-columns: 1fr; direction: ltr; gap: 20px; }
      .tipr__step-img img { height: 220px; }
    }`,
  js: ''
};
