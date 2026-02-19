export default {
  id: 'section-contact',
  name: 'Contact Section',
  category: 'Content',
  description: 'Contact information with multiple ways to reach out',
  html: `
    <section class="tryg-contact">
      <div class="tryg-contact__inner">
        <!-- EDIT: Section headline -->
        <h2 class="tryg-contact__title">Har du spørgsmål?</h2>
        <!-- EDIT: Section subheadline -->
        <p class="tryg-contact__subtitle">Vi er klar til at hjælpe dig. Vælg den måde der passer dig bedst.</p>
        <div class="tryg-contact__grid">
          <!-- EDIT: Contact method 1 - Phone -->
          <a href="tel:+4570111520" class="tryg-contact__card" data-track="contact-phone">
            <div class="tryg-contact__icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M7 4h6l2 6-3 2c1.5 3.5 4 6 7.5 7.5l2-3 6 2v6c0 1-1 2-2 2C12 26 4 18 4 9c0-1 1-2 2-2h1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="tryg-contact__card-title">Ring til os</h3>
            <p class="tryg-contact__card-text">70 11 15 20</p>
            <span class="tryg-contact__card-meta">Man-fre 8-20, lør-søn 9-17</span>
          </a>
          <!-- EDIT: Contact method 2 - Chat -->
          <a href="#chat" class="tryg-contact__card" data-track="contact-chat">
            <div class="tryg-contact__icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M28 20c0 1.1-.9 2-2 2h-4l-6 6v-6H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v12z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="tryg-contact__card-title">Chat med os</h3>
            <p class="tryg-contact__card-text">Start en chat</p>
            <span class="tryg-contact__card-meta">Gns. svartid: 2 min</span>
          </a>
          <!-- EDIT: Contact method 3 - Email -->
          <a href="mailto:kundeservice@tryg.dk" class="tryg-contact__card" data-track="contact-email">
            <div class="tryg-contact__icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M4 10l12 8 12-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="tryg-contact__card-title">Send en mail</h3>
            <p class="tryg-contact__card-text">kundeservice@tryg.dk</p>
            <span class="tryg-contact__card-meta">Svar inden for 24 timer</span>
          </a>
          <!-- EDIT: Contact method 4 - Self-service -->
          <a href="#minside" class="tryg-contact__card" data-track="contact-selfservice">
            <div class="tryg-contact__icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="12" r="6" stroke="currentColor" stroke-width="2"/>
                <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="tryg-contact__card-title">Min Side</h3>
            <p class="tryg-contact__card-text">Log ind</p>
            <span class="tryg-contact__card-meta">Selvbetjening døgnet rundt</span>
          </a>
        </div>
      </div>
    </section>`,
  css: `
    .tryg-contact {
      background: var(--color-bg-alt);
      padding: var(--spacing-xl) var(--spacing-lg);
    }
    .tryg-contact__inner {
      max-width: 1000px;
      margin: 0 auto;
    }
    .tryg-contact__title {
      text-align: center;
      color: var(--color-text);
      font-family: var(--font-heading);
      font-size: 2.25rem;
      margin-bottom: var(--spacing-md);
    }
    .tryg-contact__subtitle {
      text-align: center;
      color: var(--color-text-light);
      font-size: 1.125rem;
      margin-bottom: var(--spacing-xl);
    }
    .tryg-contact__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--spacing-md);
    }
    .tryg-contact__card {
      background: var(--color-bg);
      padding: var(--spacing-lg);
      border-radius: var(--radius-card);
      text-align: center;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
      border: 2px solid transparent;
    }
    .tryg-contact__card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      border-color: var(--color-primary);
    }
    .tryg-contact__icon {
      color: var(--color-primary);
      margin-bottom: var(--spacing-md);
    }
    .tryg-contact__card-title {
      font-family: var(--font-heading);
      font-size: 1rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-sm);
      font-weight: 700;
    }
    .tryg-contact__card-text {
      font-size: 0.9375rem;
      color: var(--color-primary);
      font-weight: 600;
      margin: 0 0 var(--spacing-sm);
    }
    .tryg-contact__card-meta {
      font-size: 0.8125rem;
      color: var(--color-text-light);
    }
    @media (max-width: 900px) {
      .tryg-contact__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .tryg-contact {
        padding: var(--spacing-lg) var(--spacing-md);
      }
      .tryg-contact__grid {
        grid-template-columns: 1fr;
      }
      .tryg-contact__title {
        font-size: 1.75rem;
      }
    }`,
  js: ''
};
