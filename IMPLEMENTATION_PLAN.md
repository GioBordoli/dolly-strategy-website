# Dolly Strategy Website Redesign - Implementation Plan

## Overview
This document details the complete technical implementation needed to transform the current Dolly Strategy website according to the redesign brief. The plan addresses UX issues, implements modern design principles, and creates a conversion-optimized experience.

## Current State Analysis

### Existing Strengths ✅
- Next.js 15 with TypeScript and Tailwind CSS
- Internationalization with next-intl (EN/IT translations)
- Modular React component structure
- Basic quiz functionality exists

### Critical Issues to Fix ⚠️
1. **Navigation**: Hamburger menu instead of persistent navigation
2. **Language Switcher**: Text-only, no visual cues or accessibility features
3. **Lead Capture**: Quiz and booking are separate, causing drop-off
4. **Page Structure**: Single long homepage creates cognitive overload
5. **Accessibility**: Missing ARIA labels, focus management, color contrast
6. **Styling**: Inconsistent button styles, no design system
7. **Mobile UX**: Not optimized for touch interactions

---

## Phase 1: Unified Navigation + Language Switcher (3 days)

### 1.1 Header Component Redesign
**File: `app/components/Header.tsx`**

**Changes:**
- Remove hamburger menu for desktop
- Implement F-pattern layout: Logo (left) → Navigation (center) → CTAs (right)
- Add flag icons to language switcher
- Implement 48px minimum touch targets
- Add ARIA labels and keyboard navigation

```typescript
// New structure
<header className="bg-primary-blue text-white fixed w-full z-50">
  <div className="container-custom flex items-center justify-between py-3">
    <Logo />
    <DesktopNavigation /> {/* Center navigation */}
    <div className="flex items-center space-x-4">
      <LanguageToggle withFlags={true} />
      <Button variant="primary">Free Strategy Call</Button>
    </div>
  </div>
</header>
```

### 1.2 Language Toggle Enhancement
**File: `app/components/LanguageToggle.tsx` (New)**

**Features:**
- Flag icons for visual recognition
- Analytics tracking for language switches
- Keyboard accessibility
- No full-page reload (≤2sec switch time)

### 1.3 Exit Criteria
- [ ] Language switch ≤2 seconds
- [ ] Lighthouse accessibility score ≥95
- [ ] Keyboard navigation works completely
- [ ] Touch targets ≥48px

---

## Phase 2: Streamlined Lead-Capture Funnel (4 days)

### 2.1 Quiz Modification
**File: `app/components/QuizForm.tsx` (Modify existing)**

**Changes:**
- Keep existing quiz structure and flow
- Remove name/email fields from Step 1 (currently first question)
- Move name/email collection to Step 2 (after business info questions)
- Keep all other quiz logic unchanged
- Integrate Calendly booking after quiz completion

**Modified Flow:**
1. **Step 1**: Start directly with business questions (no personal data)
2. **Steps 2-3**: Existing business/financial questions  
3. **Step 4**: Collect name/email before showing results
4. **Results**: Show calculated savings + embedded Calendly with prefilled data

### 2.2 Calendly Integration
**File: `app/components/QuizForm.tsx`**
- After quiz submission, show inline Calendly widget
- Prefill name/email from collected data
- Remove popup widget, use embedded iframe

### 2.3 State Persistence
- Keep existing formData state management
- Add localStorage persistence for quiz progress
- Clear after successful submission

### 2.4 API Integration
**File: `app/api/lead/route.ts` (New)**
- Consolidate quiz answers + Calendly booking data
- Send to CRM system
- Email notifications

### 2.5 Exit Criteria
- [ ] Quiz starts without personal info request
- [ ] Name/email moved to later in flow
- [ ] Calendly embedded (not popup)
- [ ] Data persists between sessions

---

## Phase 3: Minor Improvements (8 tickets, 1-2 days each)

### 3.1 Hero Section Accessibility (m-1)
**File: `app/styles/hero.css`**
- Replace gradient text with `#E9F1FF`
- Add `2px text-shadow` for nebula contrast
- Ensure WCAG AA compliance (4.5:1 contrast)

### 3.2 Quiz Navigation (m-2)
**File: `app/components/QuizNavigation.tsx`**
- Add Back button with `history.back()` fallback
- Inline email validation
- Keyboard navigation support

### 3.3 Button Standardization (m-3)
**File: `app/styles/buttons.css`**
- `.btn--primary`: Gradient background
- `.btn--secondary`: Outline style
- Remove duplicate styles from globals.css
- Consistent hover states

### 3.4 Accessibility Audit (m-4)
**All Components**
- Add descriptive `alt=""` attributes
- Ensure `<label for="">` associations
- Axe-core compliance
- Focus indicators
- Semantic HTML structure

### 3.5 Team Section (m-5)
**File: `app/components/TeamSection.tsx`**
- Show founder only
- Add LinkedIn icon + 70-word bio
- Move section near footer

### 3.6 Pricing Section (m-6)
**File: `app/components/PricingSection.tsx`**
- 30-min Strategy Call card
- Price anchor: `<del>$99</del> FREE`
- CTA scrolls to Calendly

### 3.7 Page Structure (m-7)
**Break long homepage:**
- `/` - Hero + overview only
- `/services` - Detailed services
- `/about` - About + team
- `/contact` - Contact form
- Update navigation links

### 3.8 Back-to-Top Button (m-8)
**File: `app/components/BackToTop.tsx`**
- Sticky button, fade-in after 600px scroll
- Smooth scroll to top
- Accessibility compliant

---

## Phase 4: Visual Documentation (0.5 day)

### 4.1 Before/After Screenshots
**Tool**: Chrome DevTools
**Presets**: Desktop (1440px), Mobile (390px)

**Required Screenshots:**
- `nav_before.png` / `nav_after.png`
- `quiz_before.png` / `quiz_after.png`
- `hero_before.png` / `hero_after.png`
- `mobile_before.png` / `mobile_after.png`

**Storage**: `docs/slides/assets/`

### 4.2 Update PowerPoint Slides
- Side-by-side comparisons
- 2-line captions: Issue → Fix + UX Principle

---

## Phase 5: Deployment Checklist (0.5 day)

### 5.1 Quality Gates
```bash
npm run build && npm run cypress:ci
npm run lighthouse:ci  # Must pass ≥90% performance/accessibility
npm run axe:test       # Accessibility compliance
```

### 5.2 Performance Targets
- [ ] Lighthouse Performance ≥90
- [ ] Lighthouse Accessibility ≥95
- [ ] First Contentful Paint <2s
- [ ] Cumulative Layout Shift <0.1

### 5.3 Analytics Setup
**File: `app/lib/analytics.ts`**
- Track language switches
- Monitor quiz completion rates
- Conversion funnel analysis

---

## Development Dependencies to Add

```json
{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "prettier": "^3.0.0",
    "@commitlint/cli": "^17.6.0",
    "husky": "^8.0.0",
    "@axe-core/playwright": "^4.7.0"
  },
  "dependencies": {
    "react-i18next": "^13.0.0" // If not using next-intl
  }
}
```

---

## Success Metrics

### Technical Metrics
- [ ] Language switch ≤2 seconds, no reload
- [ ] Quiz completion rate >25%
- [ ] Lighthouse scores: Performance ≥90, Accessibility ≥95
- [ ] Zero console errors in production

### Business Metrics (30-day post-launch)
- [ ] Strategy call bookings +40%
- [ ] Contact form submissions +25%
- [ ] Session duration +30%
- [ ] Bounce rate -15%

### UX Validation
- [ ] Find language toggle ≤2 clicks in usability test
- [ ] Quiz flow ≤3 minutes for novice user
- [ ] Mobile touch interactions feel native

---

## Risk Mitigation

### Technical Risks
1. **Calendly CORS Issues**
   - Mitigation: Test in staging, implement fallback form

2. **Mobile Performance**
   - Mitigation: Image optimization, lazy loading

3. **Translation Quality**
   - Mitigation: Professional review of auto-translations

### Timeline Risks
1. **Scope Creep**
   - Mitigation: Strict ticket adherence, future features → next sprint

2. **Browser Compatibility**
   - Mitigation: Define supported browser matrix, progressive enhancement

---

## Implementation Order

1. **Week 1**: Phase 1 (Navigation) + Phase 2 (Quiz Wizard)
2. **Week 2**: Phase 3 (Minor improvements, 4 tickets/day)
3. **Week 3**: Phase 4-5 (Documentation + Deployment)

**Total Timeline**: 16-18 days
**Priority**: Navigation → Quiz → Polish → Launch

This plan transforms the website into a conversion-optimized, accessible, modern application while maintaining functionality throughout development. 