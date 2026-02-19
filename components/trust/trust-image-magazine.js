export default {
  id: 'trust-image-magazine',
  name: 'Trust — Magazine Layout',
  category: 'Trust',
  description: 'Editorial-style large hero image with 2 smaller side stories',
  html: `
    <section class="timag">
      <div class="timag__inner">
        <div class="timag__head">
          <h2 class="timag__title">Tryg i hverdagen</h2>
          <p class="timag__sub">Historier om tryghed og sikkerhed fra hele Danmark</p>
        </div>
        <div class="timag__layout">
          <!-- Featured story -->
          <article class="timag__featured">
            <div class="timag__feat-img">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                   alt="Familie i sommerhus" loading="lazy">
              <div class="timag__feat-overlay">
                <span class="timag__cat">Sommerhus</span>
                <h3>"Vi kunne nyde ferien — vidende om at vi var dækket"</h3>
                <p>Lene og Thomas havde aldrig tænkt over, hvad der ville ske, hvis sommerhuset brændte. Nu er de trygge.</p>
                <a href="#form" class="timag__read" data-track="cta">Læs historien →</a>
              </div>
            </div>
          </article>
          <!-- Side stories -->
          <div class="timag__side">
            <article class="timag__story">
              <div class="timag__story-img">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80"
                     alt="Iværksætter" loading="lazy">
              </div>
              <div class="timag__story-body">
                <span class="timag__cat timag__cat--sm">Erhverv</span>
                <h3>Mikrovirksomheden der overlevede indbruddet</h3>
                <p>Rune mistede udstyr for 80.000 kr. Tryg dækkede det hele inden for en uge.</p>
                <a href="#form" class="timag__link" data-track="cta">Læs mere →</a>
              </div>
            </article>
            <article class="timag__story">
              <div class="timag__story-img">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&q=80"
                     alt="Mor med barn" loading="lazy">
              </div>
              <div class="timag__story-body">
                <span class="timag__cat timag__cat--sm">Ulykke</span>
                <h3>Mor til to: Ulykkesforsikringen ændrede alt</h3>
                <p>Da Mette brækkede armen på arbejde, sikrede hendes ulykkesforsikring familiens økonomi.</p>
                <a href="#form" class="timag__link" data-track="cta">Læs mere →</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .timag { padding: var(--spacing-xl) var(--spacing-lg); background: var(--color-bg-alt); }
    .timag__inner { max-width: 1100px; margin: 0 auto; }
    .timag__head { text-align: center; margin-bottom: 36px; }
    .timag__title { font-family: var(--font-heading); font-size: 2rem; margin-bottom: 8px; }
    .timag__sub { color: var(--color-text-light); }
    .timag__layout { display: grid; grid-template-columns: 3fr 2fr; gap: 20px; }
    .timag__feat-img {
      position: relative; border-radius: var(--radius-card); overflow: hidden;
      height: 480px;
    }
    .timag__feat-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .timag__feat-overlay {
      position: absolute; inset: 0; padding: 32px;
      background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%);
      display: flex; flex-direction: column; justify-content: flex-end; color: #fff;
    }
    .timag__cat {
      display: inline-block; padding: 3px 10px;
      background: var(--color-primary); color: #fff;
      border-radius: 12px; font-size: 0.7rem; font-weight: 700;
      text-transform: uppercase; margin-bottom: 10px;
    }
    .timag__cat--sm { font-size: 0.65rem; }
    .timag__feat-overlay h3 {
      font-family: var(--font-heading); font-size: 1.375rem;
      line-height: 1.3; margin-bottom: 8px; color: #fff;
    }
    .timag__feat-overlay p { font-size: 0.875rem; opacity: 0.85; margin-bottom: 16px; }
    .timag__read {
      display: inline-block; padding: 9px 20px;
      background: #fff; color: var(--color-text);
      border-radius: var(--radius); font-size: 0.8125rem; font-weight: 700;
      text-decoration: none; transition: background 0.15s;
    }
    .timag__read:hover { background: var(--color-primary); color: #fff; }
    .timag__side { display: flex; flex-direction: column; gap: 16px; }
    .timag__story {
      background: #fff; border-radius: var(--radius-card); overflow: hidden;
      display: flex; flex-direction: column; flex: 1;
      border: 1px solid var(--color-border);
    }
    .timag__story-img { height: 160px; overflow: hidden; }
    .timag__story-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s; }
    .timag__story:hover .timag__story-img img { transform: scale(1.04); }
    .timag__story-body { padding: 20px; flex: 1; }
    .timag__story-body h3 { font-size: 0.9375rem; font-weight: 700; margin: 8px 0 6px; line-height: 1.4; }
    .timag__story-body p { font-size: 0.8125rem; color: var(--color-text-light); margin-bottom: 12px; }
    .timag__link {
      font-size: 0.8125rem; font-weight: 700; color: var(--color-primary);
      text-decoration: none; transition: opacity 0.15s;
    }
    .timag__link:hover { opacity: 0.7; }
    @media (max-width: 768px) {
      .timag { padding: var(--spacing-lg) var(--spacing-md); }
      .timag__layout { grid-template-columns: 1fr; }
      .timag__feat-img { height: 300px; }
    }`,
  js: ''
};
