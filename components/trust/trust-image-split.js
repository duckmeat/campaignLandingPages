export default {
  id: 'trust-image-split',
  name: 'Trust — Image + Text Split',
  category: 'Trust',
  description: 'Full-width split: photo left, headline + body + CTA right',
  html: `
    <section class="tis">
      <div class="tis__inner">
        <div class="tis__image">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
               alt="Familie i trygge omgivelser" loading="lazy">
        </div>
        <div class="tis__content">
          <div class="tis__eyebrow">Over 100 års erfaring</div>
          <h2 class="tis__title">Vi er her for dig — hele vejen</h2>
          <p class="tis__body">
            Siden 1924 har Tryg hjulpet familier og virksomheder med at beskytte
            det, der er vigtigst. Med mere end 2,4 millioner kunder i Norden er vi
            en af regionens mest betroede forsikringsselskaber.
          </p>
          <ul class="tis__bullets">
            <li>✓ Skadesanmeldelse online 24/7</li>
            <li>✓ Personlig rådgiver ved din side</li>
            <li>✓ Hurtig udbetaling ved skade</li>
          </ul>
          <a href="#form" class="tis__cta" data-track="cta">Læs mere om Tryg</a>
        </div>
      </div>
    </section>`,
  css: `
    .tis { padding: var(--spacing-xl) var(--spacing-lg); background: #fff; }
    .tis__inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
    }
    .tis__image { border-radius: var(--radius-card); overflow: hidden; }
    .tis__image img { width: 100%; height: 420px; object-fit: cover; display: block; }
    .tis__eyebrow {
      font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 1.5px; color: var(--color-primary); margin-bottom: 12px;
    }
    .tis__title {
      font-family: var(--font-heading); font-size: 2rem; line-height: 1.2;
      color: var(--color-text); margin-bottom: 16px;
    }
    .tis__body { color: var(--color-text-light); line-height: 1.7; margin-bottom: 20px; }
    .tis__bullets { list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 28px; }
    .tis__bullets li { font-size: 0.9375rem; color: var(--color-text); font-weight: 500; }
    .tis__cta {
      display: inline-block; padding: 12px 28px;
      background: var(--color-primary); color: #fff; border-radius: var(--radius);
      font-weight: 700; font-size: 0.9375rem; text-decoration: none;
      transition: background 0.2s;
    }
    .tis__cta:hover { background: var(--color-primary-dark); }
    @media (max-width: 768px) {
      .tis { padding: var(--spacing-lg) var(--spacing-md); }
      .tis__inner { grid-template-columns: 1fr; gap: 28px; }
      .tis__image img { height: 260px; }
    }`,
  js: ''
};
