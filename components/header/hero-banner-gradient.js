export default {
  id: 'hero-banner-gradient',
  name: 'Hero Banner - Gradient',
  category: 'Header',
  description: 'Bold gradient background with centered content and animated shapes',
  html: `
    <section class="tryg-hero-gradient">
      <div class="tryg-hero-gradient__shapes">
        <div class="tryg-hero-gradient__shape tryg-hero-gradient__shape--1"></div>
        <div class="tryg-hero-gradient__shape tryg-hero-gradient__shape--2"></div>
        <div class="tryg-hero-gradient__shape tryg-hero-gradient__shape--3"></div>
      </div>
      <div class="tryg-hero-gradient__inner">
        <!-- EDIT: Badge text -->
        <span class="tryg-hero-gradient__badge">Ny kampagne</span>
        <!-- EDIT: Hero headline -->
        <h1 class="tryg-hero-gradient__title">Spar op til 25% på din bilforsikring</h1>
        <!-- EDIT: Hero subheadline -->
        <p class="tryg-hero-gradient__subtitle">Skift til Tryg inden udgangen af måneden og få ekstra rabat. Beregn dit tilbud på 2 minutter.</p>
        <!-- EDIT: CTA button text -->
        <a href="#form" class="tryg-btn-gradient" data-track="cta">Få dit tilbud</a>
      </div>
    </section>`,
  css: `
    .tryg-hero-gradient {
      position: relative;
      background: linear-gradient(135deg, var(--color-primary) 0%, #ff6b6b 100%);
      padding: var(--spacing-xl) var(--spacing-lg);
      text-align: center;
      overflow: hidden;
      min-height: 500px;
      display: flex;
      align-items: center;
    }
    .tryg-hero-gradient__shapes {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }
    .tryg-hero-gradient__shape {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
    }
    .tryg-hero-gradient__shape--1 {
      width: 400px;
      height: 400px;
      top: -100px;
      right: -100px;
    }
    .tryg-hero-gradient__shape--2 {
      width: 300px;
      height: 300px;
      bottom: -50px;
      left: -50px;
    }
    .tryg-hero-gradient__shape--3 {
      width: 150px;
      height: 150px;
      top: 50%;
      left: 20%;
    }
    .tryg-hero-gradient__inner {
      position: relative;
      z-index: 1;
      max-width: 720px;
      margin: 0 auto;
    }
    .tryg-hero-gradient__badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: var(--spacing-md);
      backdrop-filter: blur(10px);
    }
    .tryg-hero-gradient__title {
      color: #fff;
      font-family: var(--font-heading);
      font-size: 3rem;
      line-height: 1.15;
      margin-bottom: var(--spacing-md);
    }
    .tryg-hero-gradient__subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.25rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-lg);
    }
    .tryg-btn-gradient {
      display: inline-block;
      background: #fff;
      color: var(--color-primary);
      text-decoration: none;
      padding: 16px 48px;
      border-radius: var(--radius);
      font-size: 1.125rem;
      font-weight: 700;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .tryg-btn-gradient:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 600px) {
      .tryg-hero-gradient {
        padding: var(--spacing-lg) var(--spacing-md);
        min-height: 400px;
      }
      .tryg-hero-gradient__title {
        font-size: 2rem;
      }
      .tryg-hero-gradient__subtitle {
        font-size: 1rem;
      }
    }`,
  js: ''
};
