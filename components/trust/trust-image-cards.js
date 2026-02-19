export default {
  id: 'trust-image-cards',
  name: 'Trust — Image Cards Grid',
  category: 'Trust',
  description: '3-column cards each with a photo, heading and short description',
  html: `
    <section class="tic">
      <div class="tic__inner">
        <div class="tic__head">
          <h2 class="tic__title">Derfor vælger danskerne Tryg</h2>
          <p class="tic__sub">Vi er mere end en forsikring — vi er din partner i hverdagen.</p>
        </div>
        <div class="tic__grid">
          <article class="tic__card">
            <div class="tic__img-wrap">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
                   alt="Håndtryk — tillid" loading="lazy">
            </div>
            <div class="tic__card-body">
              <h3>100 års tillid</h3>
              <p>Siden 1924 har vi beskyttet generationer af danske familier og virksomheder.</p>
            </div>
          </article>
          <article class="tic__card">
            <div class="tic__img-wrap">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                   alt="Skadeservice" loading="lazy">
            </div>
            <div class="tic__card-body">
              <h3>Hurtig skadeservice</h3>
              <p>87% af alle skader er afklaret inden for 5 hverdage — vi er hurtige og fair.</p>
            </div>
          </article>
          <article class="tic__card">
            <div class="tic__img-wrap">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80"
                   alt="Rådgivning" loading="lazy">
            </div>
            <div class="tic__card-body">
              <h3>Personlig rådgivning</h3>
              <p>Vores rådgivere kender dit lokale marked og finder den rigtige løsning til dig.</p>
            </div>
          </article>
        </div>
      </div>
    </section>`,
  css: `
    .tic { padding: var(--spacing-xl) var(--spacing-lg); background: #fff; }
    .tic__inner { max-width: 1100px; margin: 0 auto; }
    .tic__head { text-align: center; margin-bottom: 48px; }
    .tic__title { font-family: var(--font-heading); font-size: 2rem; margin-bottom: 12px; }
    .tic__sub { color: var(--color-text-light); font-size: 1.0625rem; }
    .tic__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
    .tic__card {
      border-radius: var(--radius-card); overflow: hidden;
      border: 1px solid var(--color-border); background: #fff;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .tic__card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); }
    .tic__img-wrap { overflow: hidden; }
    .tic__img-wrap img {
      width: 100%; height: 220px; object-fit: cover; display: block;
      transition: transform 0.4s;
    }
    .tic__card:hover .tic__img-wrap img { transform: scale(1.04); }
    .tic__card-body { padding: 24px; }
    .tic__card-body h3 {
      font-family: var(--font-heading); font-size: 1.125rem; margin-bottom: 8px;
    }
    .tic__card-body p { color: var(--color-text-light); font-size: 0.9rem; line-height: 1.6; }
    @media (max-width: 768px) {
      .tic { padding: var(--spacing-lg) var(--spacing-md); }
      .tic__grid { grid-template-columns: 1fr; }
    }`,
  js: ''
};
