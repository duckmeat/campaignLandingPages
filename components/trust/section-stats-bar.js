export default {
  id: 'section-stats-bar',
  name: 'Statistics Bar',
  category: 'Trust',
  description: 'Horizontal bar displaying key metrics and statistics',
  html: `
    <section class="tryg-stats-bar">
      <div class="tryg-stats-bar__inner">
        <!-- EDIT: Stat 1 -->
        <div class="tryg-stats-bar__item">
          <span class="tryg-stats-bar__value">4,2M</span>
          <span class="tryg-stats-bar__label">Tilfredse kunder</span>
        </div>
        <div class="tryg-stats-bar__divider"></div>
        <!-- EDIT: Stat 2 -->
        <div class="tryg-stats-bar__item">
          <span class="tryg-stats-bar__value">98%</span>
          <span class="tryg-stats-bar__label">Anbefaler os</span>
        </div>
        <div class="tryg-stats-bar__divider"></div>
        <!-- EDIT: Stat 3 -->
        <div class="tryg-stats-bar__item">
          <span class="tryg-stats-bar__value">&lt;24t</span>
          <span class="tryg-stats-bar__label">Svar på skader</span>
        </div>
        <div class="tryg-stats-bar__divider"></div>
        <!-- EDIT: Stat 4 -->
        <div class="tryg-stats-bar__item">
          <span class="tryg-stats-bar__value">4,6</span>
          <span class="tryg-stats-bar__label">Trustpilot score</span>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-stats-bar {
      background: var(--color-text);
      padding: var(--spacing-lg);
    }
    .tryg-stats-bar__inner {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .tryg-stats-bar__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex: 1;
    }
    .tryg-stats-bar__value {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      line-height: 1;
      margin-bottom: 4px;
    }
    .tryg-stats-bar__label {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.7);
    }
    .tryg-stats-bar__divider {
      width: 1px;
      height: 50px;
      background: rgba(255, 255, 255, 0.2);
    }
    @media (max-width: 768px) {
      .tryg-stats-bar__inner {
        flex-wrap: wrap;
        gap: var(--spacing-md);
      }
      .tryg-stats-bar__item {
        flex: 1 1 40%;
      }
      .tryg-stats-bar__divider {
        display: none;
      }
      .tryg-stats-bar__value {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 480px) {
      .tryg-stats-bar {
        padding: var(--spacing-md);
      }
      .tryg-stats-bar__item {
        flex: 1 1 100%;
      }
    }`,
  js: ''
};
