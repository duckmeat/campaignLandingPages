export default {
  id: 'trust-image-comparison-visual',
  name: 'Trust — Visual Before/After',
  category: 'Trust',
  description: 'Before/after image comparison slider showing peace of mind with Tryg',
  html: `
    <section class="ticv">
      <div class="ticv__inner">
        <div class="ticv__head">
          <h2 class="ticv__title">Livet med og uden Tryg</h2>
          <p class="ticv__sub">Se forskellen forsikring gør, når det virkelig gælder.</p>
        </div>
        <div class="ticv__panels">
          <div class="ticv__panel ticv__panel--before">
            <div class="ticv__panel-img">
              <img src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=600&q=80"
                   alt="Stresset uden forsikring" loading="lazy">
            </div>
            <div class="ticv__panel-label">
              <span class="ticv__pill ticv__pill--bad">Uden forsikring</span>
            </div>
            <div class="ticv__panel-body">
              <ul class="ticv__list ticv__list--bad">
                <li>✗ Betaler reparationen selv</li>
                <li>✗ Juridiske problemer ved uheld</li>
                <li>✗ Ingen erstatning ved tyveri</li>
                <li>✗ Stor usikkerhed og stress</li>
              </ul>
            </div>
          </div>
          <div class="ticv__divider">VS</div>
          <div class="ticv__panel ticv__panel--after">
            <div class="ticv__panel-img">
              <img src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80"
                   alt="Tryg med Tryg forsikring" loading="lazy">
            </div>
            <div class="ticv__panel-label">
              <span class="ticv__pill ticv__pill--good">Med Tryg</span>
            </div>
            <div class="ticv__panel-body">
              <ul class="ticv__list ticv__list--good">
                <li>✓ Fuld erstatning ved skade</li>
                <li>✓ Juridisk hjælp inkluderet</li>
                <li>✓ 24/7 vejhjælp og support</li>
                <li>✓ Fred i sindet — altid</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ticv__cta-wrap">
          <a href="#form" class="ticv__cta" data-track="cta">Bliv tryg i dag — få et tilbud</a>
        </div>
      </div>
    </section>`,
  css: `
    .ticv { padding: var(--spacing-xl) var(--spacing-lg); background: var(--color-bg-alt); }
    .ticv__inner { max-width: 900px; margin: 0 auto; }
    .ticv__head { text-align: center; margin-bottom: 40px; }
    .ticv__title { font-family: var(--font-heading); font-size: 2rem; margin-bottom: 10px; }
    .ticv__sub { color: var(--color-text-light); }
    .ticv__panels { display: grid; grid-template-columns: 1fr auto 1fr; gap: 0; align-items: stretch; }
    .ticv__panel {
      border-radius: var(--radius-card); overflow: hidden;
      background: #fff; border: 2px solid transparent;
    }
    .ticv__panel--before { border-color: #e0e0e0; }
    .ticv__panel--after { border-color: #22c55e; }
    .ticv__panel-img { height: 220px; overflow: hidden; }
    .ticv__panel-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .ticv__panel-label { padding: 14px 20px 0; }
    .ticv__pill {
      display: inline-block; padding: 4px 14px; border-radius: 20px;
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px;
    }
    .ticv__pill--bad { background: #fee2e2; color: #dc2626; }
    .ticv__pill--good { background: #dcfce7; color: #16a34a; }
    .ticv__panel-body { padding: 16px 20px 24px; }
    .ticv__list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .ticv__list li { font-size: 0.9rem; padding: 6px 0; border-bottom: 1px solid #f5f5f5; }
    .ticv__list--bad li { color: #666; }
    .ticv__list--good li { color: var(--color-text); font-weight: 500; }
    .ticv__divider {
      display: flex; align-items: center; justify-content: center;
      padding: 0 16px; font-size: 0.875rem; font-weight: 800;
      color: #bbb; flex-shrink: 0;
    }
    .ticv__cta-wrap { text-align: center; margin-top: 36px; }
    .ticv__cta {
      display: inline-block; padding: 14px 36px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-size: 1.0625rem; font-weight: 700;
      text-decoration: none; transition: background 0.2s;
    }
    .ticv__cta:hover { background: var(--color-primary-dark); }
    @media (max-width: 640px) {
      .ticv { padding: var(--spacing-lg) var(--spacing-md); }
      .ticv__panels { grid-template-columns: 1fr; }
      .ticv__divider { padding: 8px 0; }
      .ticv__panel-img { height: 160px; }
    }`,
  js: ''
};
