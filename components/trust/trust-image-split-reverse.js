export default {
  id: 'trust-image-split-reverse',
  name: 'Trust — Image + Text (Reversed)',
  category: 'Trust',
  description: 'Text left, photo right — alternate layout for alternating story sections',
  html: `
    <section class="tisr">
      <div class="tisr__inner">
        <div class="tisr__content">
          <div class="tisr__tag">Skadeservice</div>
          <h2 class="tisr__title">Når uheldet er ude, er vi klar</h2>
          <p class="tisr__body">
            Et uheld kan ske for alle. Vores erfarne skadesteam er klar til at hjælpe dig
            igennem processen — fra den første anmeldelse til den endelige udbetaling.
            Vi sikrer, at du er tryg hele vejen.
          </p>
          <div class="tisr__stats">
            <div class="tisr__stat">
              <strong>87%</strong>
              <span>af skader afklaret inden for 5 dage</span>
            </div>
            <div class="tisr__stat">
              <strong>4.8★</strong>
              <span>gennemsnitlig kundebedømmelse</span>
            </div>
          </div>
          <a href="#form" class="tisr__cta" data-track="cta">Anmeld skade →</a>
        </div>
        <div class="tisr__image">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
               alt="Rådgiver hjælper kunde" loading="lazy">
          <div class="tisr__image-badge">
            <span class="tisr__image-badge-icon">🏆</span>
            Årets forsikringsselskab 2023
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tisr { padding: var(--spacing-xl) var(--spacing-lg); background: var(--color-bg-alt); }
    .tisr__inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
    }
    .tisr__tag {
      display: inline-block; padding: 4px 14px;
      background: #fff; border: 1.5px solid var(--color-border);
      border-radius: 20px; font-size: 0.75rem; font-weight: 700;
      color: var(--color-text-light); margin-bottom: 14px;
    }
    .tisr__title {
      font-family: var(--font-heading); font-size: 2rem; line-height: 1.2;
      margin-bottom: 16px;
    }
    .tisr__body { color: var(--color-text-light); line-height: 1.7; margin-bottom: 24px; }
    .tisr__stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
    .tisr__stat {
      background: #fff; border-radius: var(--radius-sm); padding: 14px 16px;
      border: 1px solid var(--color-border);
    }
    .tisr__stat strong { display: block; font-size: 1.5rem; color: var(--color-primary); font-weight: 800; }
    .tisr__stat span { font-size: 0.8rem; color: var(--color-text-light); }
    .tisr__cta {
      display: inline-block; padding: 12px 28px;
      border: 2px solid var(--color-primary); color: var(--color-primary);
      border-radius: var(--radius); font-weight: 700; font-size: 0.9375rem;
      text-decoration: none; transition: all 0.2s;
    }
    .tisr__cta:hover { background: var(--color-primary); color: #fff; }
    .tisr__image { position: relative; border-radius: var(--radius-card); overflow: visible; }
    .tisr__image img {
      width: 100%; height: 420px; object-fit: cover; display: block;
      border-radius: var(--radius-card);
    }
    .tisr__image-badge {
      position: absolute; bottom: -16px; left: 24px;
      background: #fff; border-radius: var(--radius-sm);
      padding: 10px 16px; font-size: 0.8125rem; font-weight: 600;
      box-shadow: 0 4px 20px rgba(0,0,0,0.12);
      display: flex; align-items: center; gap: 8px;
    }
    .tisr__image-badge-icon { font-size: 1.125rem; }
    @media (max-width: 768px) {
      .tisr { padding: var(--spacing-lg) var(--spacing-md); }
      .tisr__inner { grid-template-columns: 1fr; gap: 48px; }
      .tisr__image img { height: 260px; }
    }`,
  js: ''
};
