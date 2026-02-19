export default {
  id: 'conv-dual-cta',
  name: 'Conversion — Dual CTA (Call vs. Online)',
  category: 'Conversion',
  description: 'Two equal-weight options: online form path and phone call — lets visitors self-select',
  html: `
    <section class="cvdc">
      <div class="cvdc__inner">
        <h2 class="cvdc__title">Vælg hvordan du vil høre fra os</h2>
        <p class="cvdc__sub">Begge veje fører til det bedste tilbud — vælg det der passer dig bedst.</p>
        <div class="cvdc__options">
          <div class="cvdc__option cvdc__option--primary">
            <div class="cvdc__opt-icon">📋</div>
            <h3>Udfyld online</h3>
            <p>Brug 60 sekunder på formularen og vi ringer dig op inden for 2 timer med et tilbud.</p>
            <ul class="cvdc__opt-perks">
              <li>✓ Under 60 sekunder</li>
              <li>✓ Svar inden for 2 timer</li>
              <li>✓ Tilgængeligt 24/7</li>
            </ul>
            <a href="#form" class="cvdc__btn cvdc__btn--fill" data-track="cta-online">
              Udfyld formularen →
            </a>
          </div>
          <div class="cvdc__divider">
            <span>eller</span>
          </div>
          <div class="cvdc__option cvdc__option--secondary">
            <div class="cvdc__opt-icon">📞</div>
            <h3>Ring til os</h3>
            <p>Tal direkte med en af vores erfarne rådgivere. Vi er klar til at hjælpe dig nu.</p>
            <ul class="cvdc__opt-perks">
              <li>✓ Øjeblikkelig hjælp</li>
              <li>✓ Personlig rådgivning</li>
              <li>✓ Hverdage 8–20, weekend 10–17</li>
            </ul>
            <a href="tel:+4570111520" class="cvdc__btn cvdc__btn--outline" data-track="cta-call">
              70 11 15 20
            </a>
            <span class="cvdc__open">Åbent nu · Venter tid: ~2 min</span>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .cvdc {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: var(--color-bg-alt);
    }
    .cvdc__inner { max-width: 860px; margin: 0 auto; }
    .cvdc__title {
      font-family: var(--font-heading); font-size: 2rem;
      text-align: center; margin-bottom: 8px;
    }
    .cvdc__sub { text-align: center; color: var(--color-text-light); margin-bottom: 40px; }
    .cvdc__options {
      display: grid; grid-template-columns: 1fr auto 1fr; gap: 0;
      background: #fff; border-radius: var(--radius-card);
      border: 1px solid var(--color-border);
      box-shadow: 0 4px 24px rgba(0,0,0,0.07); overflow: hidden;
    }
    .cvdc__option { padding: 40px 36px; }
    .cvdc__option--primary { border-right: 1px solid var(--color-border); }
    .cvdc__opt-icon { font-size: 2rem; margin-bottom: 12px; }
    .cvdc__option h3 {
      font-family: var(--font-heading); font-size: 1.375rem; margin-bottom: 10px;
    }
    .cvdc__option p {
      color: var(--color-text-light); font-size: 0.9rem; line-height: 1.6; margin-bottom: 16px;
    }
    .cvdc__opt-perks {
      list-style: none; display: flex; flex-direction: column; gap: 6px; margin-bottom: 24px;
    }
    .cvdc__opt-perks li { font-size: 0.875rem; color: var(--color-text); }
    .cvdc__btn {
      display: block; text-align: center; padding: 13px 24px;
      border-radius: var(--radius); font-size: 1rem; font-weight: 700;
      text-decoration: none; transition: all 0.2s;
    }
    .cvdc__btn--fill { background: var(--color-primary); color: #fff; }
    .cvdc__btn--fill:hover { background: var(--color-primary-dark); }
    .cvdc__btn--outline {
      border: 2px solid var(--color-primary); color: var(--color-primary);
    }
    .cvdc__btn--outline:hover { background: var(--color-primary); color: #fff; }
    .cvdc__open {
      display: block; text-align: center; font-size: 0.78rem;
      color: #22c55e; font-weight: 600; margin-top: 8px;
    }
    .cvdc__divider {
      display: flex; align-items: center; justify-content: center;
      padding: 0 20px; background: var(--color-bg-alt);
    }
    .cvdc__divider span {
      font-size: 0.8rem; color: #bbb; font-weight: 600;
      text-transform: uppercase; letter-spacing: 1px;
      writing-mode: vertical-rl;
    }
    @media (max-width: 700px) {
      .cvdc { padding: var(--spacing-lg) var(--spacing-md); }
      .cvdc__options { grid-template-columns: 1fr; }
      .cvdc__option--primary { border-right: none; border-bottom: 1px solid var(--color-border); }
      .cvdc__option { padding: 28px 24px; }
      .cvdc__divider { padding: 14px; }
      .cvdc__divider span { writing-mode: horizontal-tb; }
    }`,
  js: ''
};
