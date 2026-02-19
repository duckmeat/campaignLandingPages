export default {
  id: 'trust-image-team',
  name: 'Trust — Team & Advisors',
  category: 'Trust',
  description: 'Meet your local advisors — photo grid with names, titles and contact',
  html: `
    <section class="timt">
      <div class="timt__inner">
        <div class="timt__head">
          <h2 class="timt__title">Mød dit lokale rådgiverteam</h2>
          <p class="timt__sub">Erfarne specialister klar til at hjælpe dig med den rigtige forsikring.</p>
        </div>
        <div class="timt__grid">
          <article class="timt__person">
            <div class="timt__photo">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                   alt="Anders Skov" loading="lazy">
            </div>
            <div class="timt__info">
              <h3>Anders Skov</h3>
              <div class="timt__role">Seniorskaderådgiver</div>
              <div class="timt__exp">12 års erfaring</div>
              <a href="#form" class="timt__contact" data-track="cta">Book møde</a>
            </div>
          </article>
          <article class="timt__person">
            <div class="timt__photo">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                   alt="Camilla Berg" loading="lazy">
            </div>
            <div class="timt__info">
              <h3>Camilla Berg</h3>
              <div class="timt__role">Privatkundekonsulent</div>
              <div class="timt__exp">8 års erfaring</div>
              <a href="#form" class="timt__contact" data-track="cta">Book møde</a>
            </div>
          </article>
          <article class="timt__person">
            <div class="timt__photo">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                   alt="Mikkel Dam" loading="lazy">
            </div>
            <div class="timt__info">
              <h3>Mikkel Dam</h3>
              <div class="timt__role">Erhvervsrådgiver</div>
              <div class="timt__exp">15 års erfaring</div>
              <a href="#form" class="timt__contact" data-track="cta">Book møde</a>
            </div>
          </article>
          <article class="timt__person">
            <div class="timt__photo">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
                   alt="Laura Nissen" loading="lazy">
            </div>
            <div class="timt__info">
              <h3>Laura Nissen</h3>
              <div class="timt__role">Livsforsikringsrådgiver</div>
              <div class="timt__exp">6 års erfaring</div>
              <a href="#form" class="timt__contact" data-track="cta">Book møde</a>
            </div>
          </article>
        </div>
      </div>
    </section>`,
  css: `
    .timt { padding: var(--spacing-xl) var(--spacing-lg); background: #fff; }
    .timt__inner { max-width: 980px; margin: 0 auto; }
    .timt__head { text-align: center; margin-bottom: 48px; }
    .timt__title { font-family: var(--font-heading); font-size: 2rem; margin-bottom: 10px; }
    .timt__sub { color: var(--color-text-light); font-size: 1rem; }
    .timt__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .timt__person { text-align: center; }
    .timt__photo {
      border-radius: 50%; overflow: hidden; width: 120px; height: 120px;
      margin: 0 auto 16px; border: 3px solid var(--color-border);
      transition: border-color 0.2s;
    }
    .timt__person:hover .timt__photo { border-color: var(--color-primary); }
    .timt__photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .timt__info h3 { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
    .timt__role { font-size: 0.8rem; color: var(--color-text-light); margin-bottom: 2px; }
    .timt__exp { font-size: 0.75rem; color: #bbb; margin-bottom: 12px; }
    .timt__contact {
      display: inline-block; padding: 7px 18px;
      border: 1.5px solid var(--color-primary); border-radius: var(--radius);
      color: var(--color-primary); font-size: 0.8125rem; font-weight: 600;
      text-decoration: none; transition: all 0.15s;
    }
    .timt__contact:hover { background: var(--color-primary); color: #fff; }
    @media (max-width: 768px) {
      .timt { padding: var(--spacing-lg) var(--spacing-md); }
      .timt__grid { grid-template-columns: repeat(2, 1fr); }
    }`,
  js: ''
};
