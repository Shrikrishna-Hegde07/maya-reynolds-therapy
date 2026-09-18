# Dr. Maya Reynolds, PsyD — Therapy Practice Website

A polished, professional frontend web application for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in Santa Monica, California.

This project was built from start to finish according to rigorous frontend engineering, accessibility, SEO, and UI/UX design specifications.

---

## 🌟 Live Routes & Structure

| Route | Description |
| :--- | :--- |
| **`/`** | **Dr. Maya Reynolds, PsyD — Final Practice Website (Parts 2 & 3)**: Complete redesigned brand identity featuring editorial typography, calm color palette, 3 core clinical services, evidence-based approach (CBT, EMDR, Somatics), and the new custom **Our Office** section. |
| **`/clone`** | **Conejo Valley Family Counseling — Original Homepage Clone (Part 1)**: Pixel-accurate structural recreation of the reference website ([conejovalleycounseling.com/home](https://www.conejovalleycounseling.com/home)). |

---

## 📑 Project Parts Overview

### Part 1: Conejo Valley Counseling Homepage Clone
- **UI Accuracy Test**: Recreated the original homepage layout, navigation, hero with arched imagery, hope section, 3-column "Who we help" cards, quote banner, 12-item expertise grid, "How we work" narrative, statement photo banner, 4 specialty cards, appointment CTA, and complete footer.
- Accessible at `/clone` or via the switcher banner on the header.

### Part 2: Redesign for Dr. Maya Reynolds, PsyD
- **Single Source of Truth**: All copy, credentials, modalities, and locations are strictly derived from `Dr. Maya Reynolds, PsyD.pdf`.
  - **No invented information**: No fake reviews, testimonials, insurance, unverified fees, or unsupported medical claims.
- **Visual Design System**:
  - **Color Palette**: Deep Forest Green (`#3a5646`, `#273a30`), Warm Sand (`#faf8f5`, `#f5ede0`), Muted Sage (`#e8eee8`, `#5d876e`), Warm Charcoal (`#222924`).
  - **Typography**: Editorial serif (*Cormorant Garamond*) for headlines paired with clean geometric sans-serif (*Plus Jakarta Sans* / *Inter*) for comfortable body readability.
- **Sections**:
  1. **Navbar**: Responsive practice branding, navigation links, Santa Monica badge, consultation CTA, and mobile drawer.
  2. **Hero**: High-impact H1, supporting copy, primary & secondary CTAs, framed portrait of Dr. Maya Reynolds, in-person and California telehealth badges.
  3. **Intro / Welcome**: Welcoming philosophy addressing the quiet struggle of feeling "functional" on the outside while exhausted on the inside.
  4. **Who I Work With**: High-achieving adults, professionals & entrepreneurs, and creatives navigating intense internal pressure.
  5. **Therapy Services (Exactly 3)**:
     - *01. Anxiety & Panic*
     - *02. Trauma & EMDR*
     - *03. Burnout, Perfectionism & High Internal Pressure*
  6. **About Dr. Maya Reynolds**: Warm, collaborative, grounded profile with provided portrait and core clinical philosophy.
  7. **My Approach**: 4 core principles (Warm & Collaborative, Safety & Stabilization, Mind & Body, Insight & Resilience) and 4 explicit evidence-based modalities (CBT, EMDR, Mindfulness, Body-Oriented Techniques).
  8. **Areas of Focus**: Bento-style grid covering Anxiety, Panic, Trauma, Burnout, Perfectionism, Chronic Stress, High Internal Pressure, and Earlier Life Experiences.
  9. **FAQ**: Accessible accordion covering clientele, modalities, in-person Santa Monica sessions, and California telehealth.
  10. **Final CTA**: Grounded invitation to begin therapy with consultation inquiry trigger.
  11. **Footer**: Address (`123th Street 45 W, Santa Monica, CA 90401`), California telehealth notice, navigation, and disclaimer.

### Part 3: "Our Office" — New Custom Section
- **Location**: Section `#office` on the homepage.
- **Title**: *Our Office: A Calm Space for Healing*
- **Provided Office Imagery**: Extracted directly from the PDF:
  - `office-seating-area.jpeg`: Naturally lit, calm seating area with soft morning sunlight.
  - `office-consultation-room.jpeg`: Uncluttered consultation room structured for reflection and comfort.
- **Attributes Highlighted**: Quiet & Private, Calm & Grounding, Naturally Lit, Comfortable & Uncluttered.
- **Care Modalities**: In-person sessions in Santa Monica + Secure telehealth throughout California.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router, Server & Client Components)
- **Language**: TypeScript (strict type checking)
- **Styling**: Tailwind CSS + Custom CSS Design System Variables
- **Icons**: Lucide React
- **Images**: Next.js `<Image />` component with responsive sizing and optimization
- **Interactions**: Interactive Appointment Modal, FAQ accordion, mobile navigation drawer

---

## 📱 Responsive Testing & Breakpoints

The application was tested across standard responsive viewports:
- **1440px** (Large Desktop)
- **1280px** (Standard Desktop)
- **1024px** (Tablet Landscape / Small Laptop)
- **768px** (Tablet Portrait)
- **430px** (Large Mobile / iPhone Pro Max)
- **390px** (Standard Mobile / iPhone 14/15)

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```
