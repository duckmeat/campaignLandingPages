export default {
  id: 'trust-image-testimonial',
  name: 'Trust — Photo Testimonials',
  category: 'Trust',
  description: 'Large customer quote with portrait photo, name and star rating',
  html: `
    <section class="tit">
      <div class="tit__inner">
        <div class="tit__head">
          <div class="tit__stars">★★★★★</div>
          <div class="tit__label">Hvad siger vores kunder?</div>
        </div>
        <div class="tit__cards">
          <article class="tit__card tit__card--featured">
            <div class="tit__photo">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                   alt="Sofie M." loading="lazy">
            </div>
            <blockquote class="tit__quote">
              "Da vores hus brændte, var Tryg fremragende. De svarede hurtigt, var
              empatiske og sørgede for at vi var godt dækket igennem hele processen.
              Det er den bedste oplevelse jeg har haft med et forsikringsselskab."
            </blockquote>
            <div class="tit__author">
              <strong>Sofie M.</strong>
              <span>Kunde siden 2018 · Husforsikring</span>
            </div>
            <div class="tit__rating">★★★★★</div>
          </article>
          <div class="tit__side">
            <article class="tit__card">
              <div class="tit__photo tit__photo--sm">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                     alt="Lars K." loading="lazy">
              </div>
              <blockquote class="tit__quote tit__quote--sm">
                "Super hurtig sagsbehandling. Min bil var skrevet af og pengene var
                på kontoen inden for 48 timer."
              </blockquote>
              <div class="tit__author">
                <strong>Lars K.</strong>
                <span>Bilforsikring</span>
              </div>
              <div class="tit__rating tit__rating--sm">★★★★★</div>
            </article>
            <article class="tit__card">
              <div class="tit__photo tit__photo--sm">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
                     alt="Maria L." loading="lazy">
              </div>
              <blockquote class="tit__quote tit__quote--sm">
                "Rådgiveren hjalp mig med at spare 30% uden at gå på kompromis med dækningen."
              </blockquote>
              <div class="tit__author">
                <strong>Maria L.</strong>
                <span>Indboforsikring</span>
              </div>
              <div class="tit__rating tit__rating--sm">★★★★★</div>
            </article>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tit { padding: var(--spacing-xl) var(--spacing-lg); background: var(--color-bg-alt); }
    .tit__inner { max-width: 1000px; margin: 0 auto; }
    .tit__head { text-align: center; margin-bottom: 36px; }
    .tit__stars { font-size: 1.5rem; color: #fbbf24; letter-spacing: 3px; margin-bottom: 6px; }
    .tit__label { font-size: 1.5rem; font-family: var(--font-heading); font-weight: 700; }
    .tit__cards { display: grid; grid-template-columns: 3fr 2fr; gap: 20px; align-items: start; }
    .tit__card {
      background: #fff; border-radius: var(--radius-card); padding: 32px;
      border: 1px solid var(--color-border);
    }
    .tit__card--featured { padding: 36px; }
    .tit__side { display: flex; flex-direction: column; gap: 16px; }
    .tit__photo {
      width: 64px; height: 64px; border-radius: 50%; overflow: hidden; margin-bottom: 16px;
    }
    .tit__photo img { width: 100%; height: 100%; object-fit: cover; }
    .tit__photo--sm { width: 48px; height: 48px; margin-bottom: 12px; }
    .tit__quote {
      font-size: 1.0625rem; line-height: 1.7; color: var(--color-text);
      font-style: italic; margin-bottom: 16px;
    }
    .tit__quote--sm { font-size: 0.9rem; }
    .tit__author strong { display: block; font-size: 0.9375rem; }
    .tit__author span { font-size: 0.8rem; color: var(--color-text-light); }
    .tit__rating { font-size: 1rem; color: #fbbf24; margin-top: 8px; }
    .tit__rating--sm { font-size: 0.875rem; }
    @media (max-width: 768px) {
      .tit { padding: var(--spacing-lg) var(--spacing-md); }
      .tit__cards { grid-template-columns: 1fr; }
    }`,
  js: ''
};
