export default {
  id: 'section-testimonials',
  name: 'Testimonials',
  category: 'Trust',
  description: 'Customer testimonials in a three-column grid layout',
  html: `
    <section class="tryg-testimonials">
      <div class="tryg-testimonials__inner">
        <!-- EDIT: Section headline -->
        <h2 class="tryg-testimonials__title">Hvad vores kunder siger</h2>
        <!-- EDIT: Section subheadline -->
        <p class="tryg-testimonials__subtitle">Tusindvis af tilfredse kunder har allerede valgt Tryg.</p>
        <div class="tryg-testimonials__grid">
          <!-- EDIT: Testimonial 1 -->
          <div class="tryg-testimonials__card">
            <div class="tryg-testimonials__stars">★★★★★</div>
            <blockquote class="tryg-testimonials__quote">"Fantastisk service! Da min bil blev stjålet, havde jeg pengene på kontoen inden for en uge. Kan varmt anbefales."</blockquote>
            <div class="tryg-testimonials__author">
              <div class="tryg-testimonials__avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="var(--color-bg-alt)"/>
                  <text x="20" y="25" text-anchor="middle" font-size="16" fill="var(--color-text-light)">MH</text>
                </svg>
              </div>
              <div class="tryg-testimonials__info">
                <span class="tryg-testimonials__name">Martin Hansen</span>
                <span class="tryg-testimonials__detail">Bilforsikring</span>
              </div>
            </div>
          </div>
          <!-- EDIT: Testimonial 2 -->
          <div class="tryg-testimonials__card">
            <div class="tryg-testimonials__stars">★★★★★</div>
            <blockquote class="tryg-testimonials__quote">"Nem oprettelse online og rigtig god pris. Jeg skiftede fra et andet selskab og sparede 2.000 kr. om året!"</blockquote>
            <div class="tryg-testimonials__author">
              <div class="tryg-testimonials__avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="var(--color-bg-alt)"/>
                  <text x="20" y="25" text-anchor="middle" font-size="16" fill="var(--color-text-light)">LP</text>
                </svg>
              </div>
              <div class="tryg-testimonials__info">
                <span class="tryg-testimonials__name">Louise Pedersen</span>
                <span class="tryg-testimonials__detail">Husforsikring</span>
              </div>
            </div>
          </div>
          <!-- EDIT: Testimonial 3 -->
          <div class="tryg-testimonials__card">
            <div class="tryg-testimonials__stars">★★★★☆</div>
            <blockquote class="tryg-testimonials__quote">"Professionel behandling af min skade. De guidede mig gennem hele processen og holdt mig opdateret undervejs."</blockquote>
            <div class="tryg-testimonials__author">
              <div class="tryg-testimonials__avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="var(--color-bg-alt)"/>
                  <text x="20" y="25" text-anchor="middle" font-size="16" fill="var(--color-text-light)">JN</text>
                </svg>
              </div>
              <div class="tryg-testimonials__info">
                <span class="tryg-testimonials__name">Jakob Nielsen</span>
                <span class="tryg-testimonials__detail">Indboforsikring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-testimonials {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-testimonials__inner {
      max-width: 1120px;
      margin: 0 auto;
    }
    .tryg-testimonials__title {
      text-align: center;
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.25rem;
      margin-bottom: var(--spacing-md);
    }
    .tryg-testimonials__subtitle {
      text-align: center;
      color: var(--color-text-light);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-testimonials__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-lg);
    }
    .tryg-testimonials__card {
      background: var(--color-bg-alt);
      padding: var(--spacing-lg);
      border-radius: var(--radius-card);
    }
    .tryg-testimonials__stars {
      color: #f5a623;
      font-size: 1.25rem;
      margin-bottom: var(--spacing-md);
      letter-spacing: 2px;
    }
    .tryg-testimonials__quote {
      font-size: 1rem;
      color: var(--color-text);
      line-height: 1.6;
      margin: 0 0 var(--spacing-lg);
      font-style: italic;
    }
    .tryg-testimonials__author {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }
    .tryg-testimonials__info {
      display: flex;
      flex-direction: column;
    }
    .tryg-testimonials__name {
      font-weight: 600;
      color: var(--color-text);
      font-size: 0.9375rem;
    }
    .tryg-testimonials__detail {
      font-size: 0.8125rem;
      color: var(--color-text-light);
    }
    @media (max-width: 900px) {
      .tryg-testimonials__grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: 0 auto;
      }
    }
    @media (max-width: 600px) {
      .tryg-testimonials {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-testimonials__title {
        font-size: 1.75rem;
      }
    }`,
  js: ''
};
