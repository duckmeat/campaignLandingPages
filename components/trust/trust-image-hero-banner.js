export default {
  id: 'trust-image-hero-banner',
  name: 'Trust — Full-Width Photo Banner',
  category: 'Trust',
  description: 'Cinematic full-width image with overlaid headline, stats and CTA',
  html: `
    <section class="tihb">
      <div class="tihb__bg">
        <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80"
             alt="Tryg lokalsamfund" loading="lazy">
        <div class="tihb__overlay"></div>
      </div>
      <div class="tihb__content">
        <div class="tihb__inner">
          <div class="tihb__eyebrow">Tryg siden 1924</div>
          <h2 class="tihb__title">Nordens mest<br>betroede forsikring</h2>
          <p class="tihb__sub">2,4 millioner kunder stoler på os i Norden.<br>Bliv en del af familien.</p>
          <div class="tihb__stats">
            <div class="tihb__stat">
              <strong>2.4M</strong><span>kunder</span>
            </div>
            <div class="tihb__sep"></div>
            <div class="tihb__stat">
              <strong>100+</strong><span>år i branchen</span>
            </div>
            <div class="tihb__sep"></div>
            <div class="tihb__stat">
              <strong>4.8/5</strong><span>kunderate</span>
            </div>
          </div>
          <a href="#form" class="tihb__cta" data-track="cta">Få et tilbud i dag</a>
        </div>
      </div>
    </section>`,
  css: `
    .tihb { position: relative; min-height: 520px; display: flex; align-items: center; overflow: hidden; }
    .tihb__bg { position: absolute; inset: 0; }
    .tihb__bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .tihb__overlay {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 100%);
    }
    .tihb__content { position: relative; z-index: 1; width: 100%; padding: var(--spacing-xl) var(--spacing-lg); }
    .tihb__inner { max-width: 640px; }
    .tihb__eyebrow {
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 2px; color: rgba(255,255,255,0.7); margin-bottom: 12px;
    }
    .tihb__title {
      font-family: var(--font-heading); font-size: 3rem; line-height: 1.15;
      color: #fff; margin-bottom: 16px;
    }
    .tihb__sub { color: rgba(255,255,255,0.8); font-size: 1.0625rem; line-height: 1.6; margin-bottom: 32px; }
    .tihb__stats {
      display: flex; align-items: center; gap: 0; margin-bottom: 36px;
    }
    .tihb__stat { text-align: center; padding: 0 24px; }
    .tihb__stat:first-child { padding-left: 0; }
    .tihb__stat strong { display: block; font-size: 1.75rem; color: #fff; font-weight: 800; }
    .tihb__stat span { font-size: 0.8125rem; color: rgba(255,255,255,0.7); }
    .tihb__sep { width: 1px; height: 40px; background: rgba(255,255,255,0.3); }
    .tihb__cta {
      display: inline-block; padding: 14px 32px;
      background: var(--color-primary); color: #fff;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      text-decoration: none; transition: background 0.2s, transform 0.1s;
    }
    .tihb__cta:hover { background: var(--color-primary-dark); transform: translateY(-2px); }
    @media (max-width: 768px) {
      .tihb { min-height: 400px; }
      .tihb__content { padding: var(--spacing-lg) var(--spacing-md); }
      .tihb__title { font-size: 2rem; }
      .tihb__stats { flex-wrap: wrap; }
    }`,
  js: ''
};
