---
name: tryg-brand-guidelines
description: Brand identity and design system guidelines for Tryg, extracted and reverse-engineered from tryg.dk. Use when implementing UI components, writing copy, building chatbot interfaces, designing A/B test variants, or creating any customer-facing asset for Tryg DK. Covers color system, typography, tone of voice, layout patterns, and component conventions.
---

# Tryg Brand Guidelines

Extracted from analysis of `tryg.dk` HTML/CSS structure, navigation patterns, copy tone, and visual hierarchy. Visual details verified against full-page screenshot (February 2026).

---

## Brand Identity

| Attribute | Value |
|-----------|-------|
| **Brand name** | Tryg |
| **Legal entity** | Tryg Forsikring A/S |
| **Primary market** | Denmark (tryg.dk), Norway (tryg.no), Sweden (trygghansa.se) |
| **Category** | Nordic insurance |
| **Brand promise** | *"Det handler om at være tryg"* — It's about being safe/secure |
| **Core emotion** | Tryghed (safety, peace of mind, security) |

---

## Color System

### Primary Colors

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Tryg Red** | `#E3000F` | rgb(227, 0, 15) | Logo background, primary CTA buttons, full-width brand sections, icon color |
| **Near Black / Dark Text** | `#1A1A1A` | rgb(26, 26, 26) | Body copy, headings, nav links |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Page background, card backgrounds, text on red |

### Secondary / UI Colors

| Name | HEX | Usage |
|------|-----|-------|
| **Light Grey** | `#F2F2F2` | Section backgrounds (e.g., "Har du brug for en ny forsikring?" section) |
| **Mid Grey** | `#E5E5E5` | Card borders, dividers, input borders |
| **Text Grey** | `#555555` | Secondary body copy, captions |
| **Link Red** | `#E3000F` | Hyperlinks in footer and body (same as brand red) |
| **Phone Number Red** | `#E3000F` | Large phone number display in footer CTA |

### Semantic Colors

| Name | HEX | Usage |
|------|-----|-------|
| **Success Green** | `#2E7D32` | Confirmations, positive feedback |
| **Warning Amber** | `#F59C00` | Warnings, important notices |
| **Error Red** | `#E3000F` | Same as brand red — errors, critical alerts |

### Color Rules

- **Tryg Red is the dominant brand color** — used for logo, all primary CTAs, icons, full-bleed brand sections, and hyperlinks.
- There is **no blue** in the DK web UI — the previous assumption of "Tryg Blue" as a nav/header color does not apply to tryg.dk (may apply to older or other market implementations).
- On white backgrounds, text is near-black (`#1A1A1A`). Never pure `#000000`.
- Full-bleed red sections (`background: #E3000F`) use white text and white ghost buttons exclusively.
- The light grey section background (`#F2F2F2`) is used for product category grids — provides contrast without color.
- Navigation bar background: **white** (`#FFFFFF`) with dark text links and the red logo square at left.
- Minimum contrast ratio for body text: **4.5:1** (WCAG AA).

---

## Typography

### Font Stack

| Role | Font | Fallback |
|------|------|----------|
| **Primary (headings)** | `TrygSans` / `Tryg Sans` | `Arial`, `Helvetica Neue`, sans-serif |
| **Body** | `TrygSans` | `Arial`, sans-serif |
| **Code / technical** | `Courier New`, monospace | — |

> **Note:** Tryg uses a proprietary typeface. In web implementations, Arial is the system fallback.

### Type Scale (Desktop)

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 40–48px | 700 (Bold) | 1.15 |
| H2 | 28–32px | 700 | 1.2 |
| H3 | 22–24px | 600 | 1.25 |
| H4 | 18–20px | 600 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small / caption | 14px | 400 | 1.5 |
| Label / button | 14–16px | 600 | 1.2 |

### Type Scale (Mobile)

| Element | Size |
|---------|------|
| H1 | 28–32px |
| H2 | 22–24px |
| Body | 16px |

### Typography Rules

- **Split-weight headlines**: Key emotional or product words are bold (`font-weight: 700`), the surrounding context text is regular (`font-weight: 400`). Both weights coexist in the **same heading element**.
  - *"Forsikringer til alle behov, **også dit**"* — "også dit" is bold
  - *"**Næsten hver 5. gravide** vælger vores graviditetsforsikring"* — stat is bold
  - *"I tvivl om **influenza og RS-virus**?"* — product/topic is bold
  - *"Til dig, der vælger at være **Tryg**"* — brand name is bold (white on red)
- Heading text is **dark near-black** (`#1A1A1A`) on white/grey backgrounds; **white** on red backgrounds.
- Never use all-caps for body or heading text (all-caps only used for the PRIVAT/ERHVERV audience toggle).
- No italic usage observed in the UI.
- Avoid text smaller than 14px for any user-facing content.

---

## Logo Usage

- The Tryg logo is a **white wordmark ("Tryg") inside a solid red square**, with a small concentric-circle / target icon to the right of the text — both elements within the red bounding square.
- **Primary version**: White on Tryg Red (`#E3000F`) square — used on white and light backgrounds.
- The logo square uses slightly rounded corners (approx. `border-radius: 4–6px`).
- **Minimum size**: 80px wide on digital.
- **Clear space**: Equal to the height of the logo square on all sides.
- Do not rotate, skew, recolor, or add effects to the logo.
- Do not place the logo on red backgrounds — use white padding container if needed.
- On photographic backgrounds, place the logo on a white opaque container block.

---

## Tone of Voice

### Personality

| Trait | Description |
|-------|-------------|
| **Warm** | Speaks to humans, not policies. Uses "du" (you) throughout. |
| **Reassuring** | Language anchors on safety, peace of mind, and simplicity. |
| **Direct** | Short sentences. Clear CTAs. No jargon. |
| **Danish-first** | Copy is in Danish. Formal enough for trust, informal enough for warmth. |

### Copy Patterns (from tryg.dk)

- **Hero headlines**: Split emphasis — neutral statement + bold emotional hook.
  - *"Forsikringer til alle behov, **også dit**"*
  - *"Næsten hver 5. gravide vælger vores graviditetsforsikring"*
- **Benefit statements**: Lead with the customer outcome, not the product feature.
  - ✅ *"Fri adgang til Tryg Lægehotline"*
  - ❌ *"Telefoni-baseret sundhedsrådgivning inkluderet i pakken"*
- **CTAs**: Action-oriented, specific, short.
  - *"Beregn pris"*, *"Bestil tilbud"*, *"Få tjek på din tryghed"*
- **Trust signals**: Use social proof with precision.
  - *"Næsten hver 5. gravide"* — specific, credible, not vague superlatives.

### Language Rules

- Write in **Danish** for .dk. Norwegian for .no, Swedish for .se.
- Always use **du/dig** (second person informal) — never the formal **De**.
- Avoid insurance jargon unless legally required. If used, explain it inline.
- Product names are capitalized as proper nouns: *Indboforsikring, Bilforsikring, Tryg Lægehotline*.

---

## Navigation & Layout

### Top Navigation Structure

```
[Red logo square]  [Forsikringer] [Ekstra Tryghed] [Tryg Guiden] [Skader] [Kundeservice]  [🔍 Søg] [👤 Min side] [Bestil tilbud]
```

- Nav background: **white** (`#FFFFFF`). No coloured nav bar.
- Logo: Red square, top-left.
- Primary nav links: Dark text, no underline, hover state not visible in screenshot.
- **"Bestil tilbud"** is the primary nav CTA — rendered as a bordered ghost button (dark border, dark text, no fill) in the top nav.
- **"Min side"** and **"Søg"** are icon+text combos, left of the CTA.
- Audience toggle (**PRIVAT | ERHVERV**) sits in a slim bar above the main nav, centered, using all-caps small text with a pipe separator.

### Page Layout Principles

- **Max content width**: ~920px visible in screenshot, centered with side margins.
- **Section padding**: 48–64px vertical on desktop.
- **Hero layout**: Left half = full-bleed photography, right half = white background with form/CTA. 50/50 split.
- **Section backgrounds alternate**: White → Light Grey (`#F2F2F2`) → White → Red → White → Light Grey.
- **Product icon grid**: 4 columns on desktop, white cards with red stroke icons, label below icon, subtle border.
- **Feature list rows** (e.g., "Få hjælp til dine forsikringsbehov"): Full-width white row, 3 equal columns, each with icon + label + arrow (`>`).

### Component Patterns

#### CTA Button (Primary — filled red)

```css
background-color: #E3000F;
color: #FFFFFF;
border-radius: 4px;
padding: 12px 28px;
font-weight: 700;
font-size: 15px;
border: none;
cursor: pointer;
```
Used: "Beregn pris", "Få Basis-pakken gratis", "Hent Tryg Lægehotline-appen", "Kontakt os"

#### CTA Button (Secondary — ghost/outline, on white bg)

```css
background-color: transparent;
color: #1A1A1A;
border: 1.5px solid #1A1A1A;
border-radius: 4px;
padding: 10px 24px;
font-weight: 600;
font-size: 15px;
```
Used: "Bestil tilbud" (nav), "Se alle forsikringer", "Få tjek på din tryghed"

#### CTA Button (Ghost — on red background)

```css
background-color: transparent;
color: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 4px;
padding: 10px 24px;
font-weight: 600;
font-size: 15px;
```
Used: "Få tjek på din tryghed" (inside the red section)

#### Product Category Card (icon grid)

```css
background: #FFFFFF;
border: 1px solid #E5E5E5;
border-radius: 4px;
padding: 20px 16px;
text-align: center;
/* Icon: red stroke, ~40px */
/* Label: 14px, dark text, below icon */
```

#### Feature Row Item (3-column shortcut links)

```css
display: flex;
align-items: center;
border: 1px solid #E5E5E5;
border-radius: 4px;
padding: 16px 20px;
background: #FFFFFF;
/* Left: small icon */
/* Middle: label text, red for secondary text */
/* Right: red chevron > */
```

#### Tab/Selector (product type switcher — e.g., Graviditet / Bil / Indbo)

```css
/* Active tab */
border: 1.5px solid #E3000F;
color: #E3000F;
border-radius: 4px;
background: #FFFFFF;

/* Inactive tab */
border: 1px solid #E5E5E5;
color: #1A1A1A;
background: #FFFFFF;
```

#### Link Style

```css
color: #E3000F;
text-decoration: underline;
```
Note: Links use **red**, not blue — confirmed from footer and body links in screenshot.

#### Card Component (content cards)

```css
background: #FFFFFF;
border-radius: 4px;
overflow: hidden;
/* No explicit box-shadow observed — relies on background contrast */
```

---

## Imagery & Photography

- Photography style: **Authentic, warm, real-life Danish moments** — not staged stock imagery.
- **Hero**: 50/50 split layout — photo fills the left half edge-to-edge with no padding, form/CTA content on white right half.
- Observed subjects: Pregnant women (dominant on DK homepage), close-up detail shots (hands on belly), person at laptop with doctor on screen (telemedicine context).
- Tone: **Calm, intimate, optimistic**. Soft natural light, warm color temperature.
- No urgency, fear, or alarm in imagery — always safe, comfortable environments (sofa, home interior).
- **Crop**: Portraits are cropped tightly to subject — loose backgrounds are natural home settings.
- **Aspect ratio** for hero image block: approximately 1:1 to 4:5 portrait orientation.
- Section content images (non-hero): approximately 16:9 or 4:3, with subject centered.

---

## Iconography

- Icons are **line-based stroke icons** (not filled), rendered in **Tryg Red (`#E3000F`)** on white/grey backgrounds.
- On the red full-bleed section, icons switch to **white**.
- Icon style: Thin to medium stroke weight, simple geometric shapes representing the product category (car, globe, dog, house, pregnant figure, child, person, home).
- Used in product category cards (icon above label) and feature rows (icon left of label).
- Standard icon size: ~40×40px in product category cards, ~24×24px in feature rows.
- Checkmark icons (✓) used in feature lists on the red section — white, simple.
- Icons are never used as standalone navigation — always paired with a text label.

---

## Footer Structure

- **Background**: White (`#FFFFFF`), separated from page content by a thin red top border line.
- **Layout**: 4-column link grid (Populære forsikringer / Kundeservice / Om Tryg / Værd at vide) + right-side contact CTA block.
- **Section headers**: Bold dark text (`font-weight: 700`), small font (~14px).
- **Footer links**: Red (`#E3000F`), underlined — same style as body links.
- **Contact CTA block**: Phone number displayed large and bold in Tryg Red (`70 11 20 20`), with a filled red "Kontakt os" button.
- **Legal line**: Small grey text at very bottom with company name, address, CVR number.

---

## Accessibility Standards

| Requirement | Standard |
|-------------|----------|
| Color contrast (text on bg) | WCAG AA — 4.5:1 minimum |
| Interactive element focus | Visible outline |
| Font minimum | 14px |
| Alt text | Required on all non-decorative images |
| ARIA labels | Required on all icon-only buttons (e.g., search, close) |

---

## Market-Specific Overrides

| Market | Primary Accent | Button Style | Bot Name |
|--------|---------------|-------------|----------|
| Tryg DK | `#E3000F` | Sidebar | — |
| Tryg NO | `#E3000F` | Sidebar | — |
| Alka DK | Orange (`#F59C00`) | Sidebar | Chatbotten Alma |
| Tryg SE (TrygHansa) | Red (`#C8102E`) | Circular FAB | Tryggve Chattbot |

---

## Key Brand Assets Reference

| Asset | Location / Notes |
|-------|-----------------|
| Logo (SVG) | Red square with white "Tryg" + circle icon — see `<header>` in DOM |
| Brand font | Custom sans-serif (similar to Helvetica Neue); Arial system fallback |
| Icon set | Custom red SVG stroke icons — product categories + UI actions |
| Color tokens | CSS custom properties in `:root` — always reference tokens not hardcoded hex |

---

## Implementation Notes for MarTech / Tealium

- **Chat button color** for Tryg DK: `#E3000F` (matches all CTAs — no blue variant).
- **Links** injected via Tealium (banners, consent overlays, chat prompts): Use red `#E3000F`, underlined — not blue.
- **Data layer page_type values**: `homepage`, `product`, `service`, `claims`, `my-page`.
- **A/B test variant naming**: `cta_red_filled` (primary) vs `cta_outline_dark` (secondary ghost).
- When injecting UI via Tealium extensions, inherit CSS custom properties rather than hardcoding hex — ensures brand updates propagate.
- The red full-bleed section pattern (`background: #E3000F; color: #FFFFFF`) is a key brand moment — use sparingly and only for high-trust/benefit messaging, not promotions.

---

*Last updated: February 2026. Source: HTML/CSS analysis + full-page screenshot verification of tryg.dk.*
