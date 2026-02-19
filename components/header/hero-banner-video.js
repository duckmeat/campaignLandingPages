export default {
  id: 'hero-banner-video',
  name: 'Hero Banner - Video Background',
  category: 'Header',
  description: 'Full-width hero with video background and overlay text',
  html: `
    <section class="tryg-hero-video">
      <div class="tryg-hero-video__bg">
        <!-- EDIT: Replace with video element or background image -->
        <div class="tryg-hero-video__placeholder">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="#fff" stroke-width="2" opacity="0.5"/>
            <polygon points="26,20 26,44 46,32" fill="#fff" opacity="0.8"/>
          </svg>
        </div>
      </div>
      <div class="tryg-hero-video__overlay"></div>
      <div class="tryg-hero-video__inner">
        <!-- EDIT: Hero headline -->
        <h1 class="tryg-hero-video__title">Oplev tryghed i hverdagen</h1>
        <!-- EDIT: Hero subheadline -->
        <p class="tryg-hero-video__subtitle">Vi beskytter det, der betyder mest for dig og din familie.</p>
        <!-- EDIT: CTA button text -->
        <a href="#form" class="tryg-btn-primary tryg-btn-primary--light" data-track="cta">Start her</a>
      </div>
    </section>`,
  css: `
    .tryg-hero-video {
      position: relative;
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .tryg-hero-video__bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    }
    .tryg-hero-video__placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tryg-hero-video__overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
    }
    .tryg-hero-video__inner {
      position: relative;
      z-index: 1;
      max-width: 720px;
      text-align: center;
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-hero-video__title {
      color: #fff;
      font-family: var(--font-heading);
      font-size: 3rem;
      line-height: 1.15;
      margin-bottom: var(--spacing-md);
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .tryg-hero-video__subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.25rem;
      line-height: 1.5;
      margin-bottom: var(--spacing-lg);
    }
    .tryg-btn-primary--light {
      display: inline-block;
      background: #fff;
      color: var(--color-primary);
      text-decoration: none;
      padding: 16px 40px;
      border-radius: var(--radius);
      font-size: 1.125rem;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .tryg-btn-primary--light:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    }
    @media (max-width: 600px) {
      .tryg-hero-video {
        min-height: 500px;
      }
      .tryg-hero-video__title {
        font-size: 2rem;
      }
      .tryg-hero-video__subtitle {
        font-size: 1rem;
      }
    }`,
  js: ''
};
