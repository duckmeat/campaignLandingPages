export default {
  id: 'hero-banner-animated',
  name: 'Hero Banner - Animated',
  category: 'Header',
  description: 'Hero with CSS animations and floating elements',
  html: `
    <section class="tryg-hero-animated">
      <div class="tryg-hero-animated__bg">
        <div class="tryg-hero-animated__float tryg-hero-animated__float--1"></div>
        <div class="tryg-hero-animated__float tryg-hero-animated__float--2"></div>
        <div class="tryg-hero-animated__float tryg-hero-animated__float--3"></div>
        <div class="tryg-hero-animated__float tryg-hero-animated__float--4"></div>
      </div>
      <div class="tryg-hero-animated__inner">
        <!-- EDIT: Hero headline -->
        <h1 class="tryg-hero-animated__title">
          <span class="tryg-hero-animated__title-line">Forsikring der</span>
          <span class="tryg-hero-animated__title-line tryg-hero-animated__title-line--highlight">bevæger sig med dig</span>
        </h1>
        <!-- EDIT: Hero subheadline -->
        <p class="tryg-hero-animated__subtitle">Fleksible løsninger der tilpasser sig dit liv. Ingen binding, ingen overraskelser.</p>
        <div class="tryg-hero-animated__ctas">
          <!-- EDIT: Primary CTA -->
          <a href="#form" class="tryg-btn-animated-primary" data-track="cta-primary">Start nu</a>
          <!-- EDIT: Secondary CTA -->
          <a href="#video" class="tryg-btn-animated-secondary" data-track="cta-video">
            <span class="tryg-btn-animated-secondary__icon">▶</span>
            Se video
          </a>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-hero-animated {
      position: relative;
      background: var(--color-text);
      padding: var(--spacing-xl) var(--spacing-lg);
      min-height: 580px;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .tryg-hero-animated__bg {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
    .tryg-hero-animated__float {
      position: absolute;
      border-radius: 50%;
      background: var(--color-primary);
      opacity: 0.1;
      animation: float 8s ease-in-out infinite;
    }
    .tryg-hero-animated__float--1 {
      width: 300px;
      height: 300px;
      top: -50px;
      right: 10%;
      animation-delay: 0s;
    }
    .tryg-hero-animated__float--2 {
      width: 200px;
      height: 200px;
      bottom: 10%;
      left: 5%;
      animation-delay: -2s;
    }
    .tryg-hero-animated__float--3 {
      width: 150px;
      height: 150px;
      top: 40%;
      left: 20%;
      animation-delay: -4s;
    }
    .tryg-hero-animated__float--4 {
      width: 100px;
      height: 100px;
      bottom: 20%;
      right: 20%;
      animation-delay: -6s;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-30px) scale(1.05); }
    }
    .tryg-hero-animated__inner {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    .tryg-hero-animated__title {
      color: #fff;
      font-family: var(--font-heading);
      font-size: 3.5rem;
      line-height: 1.1;
      margin-bottom: var(--spacing-lg);
    }
    .tryg-hero-animated__title-line {
      display: block;
    }
    .tryg-hero-animated__title-line--highlight {
      color: var(--color-primary);
    }
    .tryg-hero-animated__subtitle {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.25rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-hero-animated__ctas {
      display: flex;
      gap: var(--spacing-md);
      justify-content: center;
      flex-wrap: wrap;
    }
    .tryg-btn-animated-primary {
      display: inline-block;
      background: var(--color-primary);
      color: #fff;
      text-decoration: none;
      padding: 16px 40px;
      border-radius: var(--radius);
      font-size: 1.125rem;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .tryg-btn-animated-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(237, 28, 36, 0.4);
    }
    .tryg-btn-animated-secondary {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-sm);
      color: #fff;
      text-decoration: none;
      padding: 16px 24px;
      font-size: 1rem;
      font-weight: 500;
      transition: color 0.2s;
    }
    .tryg-btn-animated-secondary:hover {
      color: var(--color-primary);
    }
    .tryg-btn-animated-secondary__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      font-size: 0.75rem;
    }
    @media (max-width: 600px) {
      .tryg-hero-animated {
        padding: var(--spacing-lg) var(--spacing-md);
        min-height: 480px;
      }
      .tryg-hero-animated__title {
        font-size: 2.25rem;
      }
      .tryg-hero-animated__subtitle {
        font-size: 1rem;
      }
    }`,
  js: ''
};
