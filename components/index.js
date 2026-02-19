// Header components (Hero Banners)
import heroBanner from './header/hero-banner.js';
import heroBannerSplit from './header/hero-banner-split.js';
import heroBannerVideo from './header/hero-banner-video.js';
import heroBannerGradient from './header/hero-banner-gradient.js';
import heroBannerCard from './header/hero-banner-card.js';
import heroBannerStats from './header/hero-banner-stats.js';
import heroBannerTestimonial from './header/hero-banner-testimonial.js';
import heroBannerDualCta from './header/hero-banner-dual-cta.js';
import heroBannerSearch from './header/hero-banner-search.js';
import heroBannerAnimated from './header/hero-banner-animated.js';
import heroBannerMinimal from './header/hero-banner-minimal.js';

// Form components (10 quote form variants)
import quoteFormCar from './forms/quote-form-car.js';
import quoteFormHome from './forms/quote-form-home.js';
import quoteFormTravel from './forms/quote-form-travel.js';
import quoteFormStepper from './forms/quote-form-stepper.js';
import quoteFormInline from './forms/quote-form-inline.js';
import quoteFormCalculator from './forms/quote-form-calculator.js';
import quoteFormSplit from './forms/quote-form-split.js';
import quoteFormChat from './forms/quote-form-chat.js';
import quoteFormDark from './forms/quote-form-dark.js';
import quoteFormFloating from './forms/quote-form-floating.js';
import quoteFormCardSelect from './forms/quote-form-card-select.js';

// Content components
import uspStrip from './content/usp-strip.js';
import quoteForm from './content/quote-form.js';
import sectionFeaturesGrid from './content/section-features-grid.js';
import sectionPricing from './content/section-pricing.js';
import sectionFaq from './content/section-faq.js';
import sectionComparison from './content/section-comparison.js';
import sectionSteps from './content/section-steps.js';
import sectionBenefits from './content/section-benefits.js';
import sectionContact from './content/section-contact.js';

// Trust components
import trustSignals from './trust/trust-signals.js';
import sectionTestimonials from './trust/section-testimonials.js';
import sectionStatsBar from './trust/section-stats-bar.js';
import trustImageSplit from './trust/trust-image-split.js';
import trustImageSplitReverse from './trust/trust-image-split-reverse.js';
import trustImageCards from './trust/trust-image-cards.js';
import trustImageHeroBanner from './trust/trust-image-hero-banner.js';
import trustImageTestimonial from './trust/trust-image-testimonial.js';
import trustImageTeam from './trust/trust-image-team.js';
import trustImageMagazine from './trust/trust-image-magazine.js';
import trustImageAwards from './trust/trust-image-awards.js';
import trustImageProcess from './trust/trust-image-process.js';
import trustImageCommunity from './trust/trust-image-community.js';
import trustImageComparisonVisual from './trust/trust-image-comparison-visual.js';

// Conversion components
import sectionCtaBanner from './conversion/section-cta-banner.js';
import convCountdown from './conversion/conv-countdown.js';
import convStickyBar from './conversion/conv-sticky-bar.js';
import convDualCta from './conversion/conv-dual-cta.js';
import convSocialProofCta from './conversion/conv-social-proof-cta.js';
import convOfferStrip from './conversion/conv-offer-strip.js';
import convQuizCta from './conversion/conv-quiz-cta.js';
import convGuarantee from './conversion/conv-guarantee.js';
import convUrgencyScarcity from './conversion/conv-urgency-scarcity.js';
import convExitNudge from './conversion/conv-exit-nudge.js';
import convReferral from './conversion/conv-referral.js';

// Footer components
import footer from './footer/footer.js';

// Export all components
export const COMPONENTS = [
  // Header
  heroBanner,
  heroBannerSplit,
  heroBannerVideo,
  heroBannerGradient,
  heroBannerCard,
  heroBannerStats,
  heroBannerTestimonial,
  heroBannerDualCta,
  heroBannerSearch,
  heroBannerAnimated,
  heroBannerMinimal,
  // Forms
  quoteForm,
  quoteFormCar,
  quoteFormHome,
  quoteFormTravel,
  quoteFormStepper,
  quoteFormInline,
  quoteFormCalculator,
  quoteFormSplit,
  quoteFormChat,
  quoteFormDark,
  quoteFormFloating,
  quoteFormCardSelect,
  // Content
  uspStrip,
  sectionFeaturesGrid,
  sectionPricing,
  sectionFaq,
  sectionComparison,
  sectionSteps,
  sectionBenefits,
  sectionContact,
  // Trust
  trustSignals,
  sectionTestimonials,
  sectionStatsBar,
  trustImageSplit,
  trustImageSplitReverse,
  trustImageCards,
  trustImageHeroBanner,
  trustImageTestimonial,
  trustImageTeam,
  trustImageMagazine,
  trustImageAwards,
  trustImageProcess,
  trustImageCommunity,
  trustImageComparisonVisual,
  // Conversion
  sectionCtaBanner,
  convCountdown,
  convStickyBar,
  convDualCta,
  convSocialProofCta,
  convOfferStrip,
  convQuizCta,
  convGuarantee,
  convUrgencyScarcity,
  convExitNudge,
  convReferral,
  // Footer
  footer
];

// Export by category for easier filtering
export const HEADER_COMPONENTS = [
  heroBanner,
  heroBannerSplit,
  heroBannerVideo,
  heroBannerGradient,
  heroBannerCard,
  heroBannerStats,
  heroBannerTestimonial,
  heroBannerDualCta,
  heroBannerSearch,
  heroBannerAnimated,
  heroBannerMinimal
];

export const CONTENT_COMPONENTS = [
  uspStrip,
  quoteForm,
  sectionFeaturesGrid,
  sectionPricing,
  sectionFaq,
  sectionComparison,
  sectionSteps,
  sectionBenefits,
  sectionContact
];

export const TRUST_COMPONENTS = [
  trustSignals,
  sectionTestimonials,
  sectionStatsBar
];

export const CONVERSION_COMPONENTS = [
  sectionCtaBanner
];

export const FOOTER_COMPONENTS = [
  footer
];
