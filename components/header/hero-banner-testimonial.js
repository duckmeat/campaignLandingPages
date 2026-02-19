export default {
  id: 'hero-banner-testimonial',
  name: 'Hero Banner - With Testimonial',
  category: 'Header',
  description: 'Hero featuring an integrated customer testimonial for social proof',
  html: `
    <section class="tryg-hero-testimonial">
      <div class="tryg-hero-testimonial__inner">
        <!-- EDIT: Hero headline -->
        <h1 class="tryg-hero-testimonial__title">Beskyt din familie med Tryg</h1>
        <!-- EDIT: Hero subheadline -->
        <p class="tryg-hero-testimonial__subtitle">Få den bedste dækning til en fair pris. Se hvad vores kunder siger.</p>
        <div class="tryg-hero-testimonial__quote">
          <div class="tryg-hero-testimonial__avatar">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="var(--color-bg-alt)"/>
              <circle cx="24" cy="18" r="8" fill="var(--color-text-light)" opacity="0.3"/>
              <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="var(--color-text-light)" opacity="0.3"/>
            </svg>
          </div>
          <div class="tryg-hero-testimonial__quote-content">
            <!-- EDIT: Customer quote -->
            <blockquote class="tryg-hero-testimonial__text">"Tryg har altid været der, når vi havde brug for dem. Hurtig service og fair priser."</blockquote>
            <!-- EDIT: Customer name and details -->
            <cite class="tryg-hero-testimonial__author">— Maria Hansen, kunde siden 2018</cite>
          </div>
        </div>
        <!-- EDIT: CTA button text -->
        <a href="#form" class="tryg-btn-primary" data-track="cta">Få et tilbud</a>
      </div>
    </section>`,
  css: `
    .tryg-hero-testimonial {
      background: var(--color-bg);
      padding: var(--spacing-xl) var(--spacing-lg);
      text-align: center;
    }
    .tryg-hero-testimonial__inner {
      max-width: 720px;
      margin: 0 auto;
    }
    .tryg-hero-testimonial__title {
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.5rem;
      line-height: 1.2;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-testimonial__subtitle {
      color: var(--color-text-light);
      font-size: 1.125rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-lg);
    }
    .tryg-hero-testimonial__quote {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-md);
      background: var(--color-bg-alt);
      padding: var(--spacing-lg);
      border-radius: var(--radius-card);
      margin-bottom: var(--spacing-lg);
      text-align: left;
    }
    .tryg-hero-testimonial__avatar {
      flex-shrink: 0;
    }
    .tryg-hero-testimonial__quote-content {
      flex: 1;
    }
    .tryg-hero-testimonial__text {
      font-size: 1.125rem;
      font-style: italic;
      color: var(--color-text);
      line-height: 1.6;
      margin: 0 0 var(--spacing-sm);
    }
    .tryg-hero-testimonial__author {
      font-size: 0.875rem;
      color: var(--color-text-light);
      font-style: normal;
    }
    .tryg-btn-primary {
      display: inline-block;
      background: var(--color-primary);
      color: #fff;
      text-decoration: none;
      padding: 14px 36px;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 600;
      transition: background 0.2s;
    }
    .tryg-btn-primary:hover {
      background: var(--color-primary-dark);
    }
    @media (max-width: 600px) {
      .tryg-hero-testimonial {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-hero-testimonial__title {
        font-size: 1.75rem;
      }
      .tryg-hero-testimonial__quote {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }`,
  js: ''
};
