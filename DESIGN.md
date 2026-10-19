# DESIGN.md — Project Demo & Live Walkthrough Guide

This document defines the visual design system, token architecture, and user experience principles for the **Interactive Project Demo & Walkthrough Guide** website.

---

## 1. Visual Theme & Atmosphere
- **Concept**: *Sleek Cyber Detective & Modern SaaS Showcase* (Inspired by Linear, Vercel, and Raycast).
- **Mood**: High-contrast, dark mode, precise engineering, mysterious detective narrative, premium and trustworthy for hiring managers and interviewers.
- **Background**: Deep void obsidian (`#07080d`) with subtle ambient radial gradients in indigo/emerald to create depth.

---

## 2. Color Palette & Semantic Roles

| Token | Hex / HSL | Role / Description |
|---|---|---|
| `--bg-canvas` | `#08090e` | Root background |
| `--bg-surface-1` | `#11131c` | Primary container & card background |
| `--bg-surface-2` | `#181b29` | Elevated widgets, interactive elements, code blocks |
| `--bg-surface-hover` | `#202538` | Hover state for interactive cards and buttons |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Default card border |
| `--border-accent` | `rgba(139, 92, 246, 0.35)` | Violet accent border for primary elements |
| `--border-emerald` | `rgba(16, 185, 129, 0.35)` | Live / Success border |
| `--accent-primary` | `#8b5cf6` | Violet core accent (brand button, active tab) |
| `--accent-primary-hover` | `#7c3aed` | Button hover |
| `--accent-emerald` | `#10b981` | Live production status, game clear state |
| `--accent-amber` | `#f59e0b` | Passcode / PIN badges, hints & keys |
| `--accent-cyan` | `#06b6d4` | Admin dashboard badge, telemetry metrics |
| `--text-primary` | `#f8fafc` | Main headings, primary copy |
| `--text-secondary` | `#94a3b8` | Subtext, descriptive guidance, hints |
| `--text-muted` | `#64748b` | Timestamps, metadata, labels |

---

## 3. Typography Scale & Font Hierarchy
- **Primary Font Family**: `'Pretendard Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Monospace Font Family**: `'JetBrains Mono', 'SF Mono', Consolas, Menlo, monospace`
- **Hierarchy**:
  - `Display Title (H1)`: 32px / 1.25, weight 800, tracking -0.03em, soft linear gradient (`#ffffff` -> `#cbd5e1`).
  - `Section Title (H2)`: 22px / 1.35, weight 700, tracking -0.02em, with inline step counter pill.
  - `Card Title (H3)`: 17px / 1.4, weight 600, tracking -0.01em.
  - `Body Regular`: 15px / 1.6, weight 400.
  - `Code / Badge`: 13px / 1.4, weight 600, mono font, tracking +0.02em.

---

## 4. Component Stylings & Micro-interactions
- **Buttons**:
  - Primary Action Button: Pill/Rounded (10px border radius), gradient background (`#8b5cf6` to `#6366f1`), glowing hover shadow (`0 0 20px rgba(139,92,246,0.4)`), smooth transform `translateY(-1px)`.
  - Secondary / Copy Button: Surface background with subtle border, flex layout with icon, active state `scale(0.97)` and instant visual feedback (text changes to "복사 완료! ✓" with emerald green color).
- **Interactive Code Badges**:
  - Clicking on the PIN code (`Z7P9NC`, `2026`) or website links automatically copies them to the clipboard and shows a floating toast banner.
- **Screenshot Presentation**:
  - Encapsulated in sleek glassmorphic browser window frames with mockup traffic-light dots (`🔴 🟡 🟢`).
  - Hover effect: subtle scale (`scale(1.01)`), glow border, and a zoom indicator icon (`🔍`).
  - Click-to-zoom Lightbox modal with backdrop blur (`backdrop-filter: blur(12px)`) and keyboard navigation (`ESC` to exit).

---

## 5. Layout & Spacing Principles
- Container Max Width: `1080px`, centered with fluid auto margins.
- Vertical Rhythm: 48px to 64px between primary sections, 20px to 24px between subcomponents.
- Grid: Single-column flow with responsive 2-column breakdowns for screenshots and guide details on desktop (min-width: 860px).

---

## 6. Depth & Elevation
- Multi-tier z-indexing: Canvas (0), Ambient Glow (1), Surface Cards (10), Sticky Top Banner (100), Toast / Lightbox Modal (1000).
- Glassmorphism: `background: rgba(17, 19, 28, 0.75); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08);`.

---

## 7. Do's & Don'ts
- **DO**: Provide instant one-click copy with distinct positive feedback for interviewers.
- **DO**: Place live links prominently at the very top and in a persistent header.
- **DO**: Keep text concise, bulleted, and immediately scannable in 30 seconds.
- **DON'T**: Use raw harsh colors or unstyled native alerts.
- **DON'T**: Require interviewers to re-type 6-digit access codes manually.
- **DON'T**: Leave images without zoom capability.

---

## 8. Responsive Design
- Mobile First & Desktop Enhanced (Breakpoints: 640px, 860px, 1080px).
- Minimum tap target: 44px for all mobile buttons.
- Sticky floating quick bar for mobile users to quickly copy demo credentials.
