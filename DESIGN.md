# DESIGN.md — Product Demo & Interactive Walkthrough System

Based on the [Linear Design System](https://linear.app) and Google Stitch standards. Designed specifically for professional hiring managers, recruiters, and engineering interviewers.

---

## 1. Visual Theme & Philosophy
- **Aesthetic**: *Clean Engineering Minimalism* (Linear / Vercel style).
- **Core Principle**: Zero AI cliches. No excessive neon gradients, no random blurred orb backgrounds, no saturated rainbow tags, no emoji spam.
- **Mood**: Precise, calm, authentic, and product-focused. The UI acts as a silent gallery frame that puts the developer's actual product screenshots and engineering workflow first.

---

## 2. Color Palette & Surface Hierarchy

| Token | Value | Semantic Role |
|---|---|---|
| `--color-canvas` | `#0b0c10` | Neutral dark background (slate-tinted black) |
| `--color-surface-1` | `#13151f` | Primary card & section container |
| `--color-surface-2` | `#1c1f2e` | Interactive tabs, input fields, code chips |
| `--color-surface-hover` | `#24283b` | Hover state for interactive items |
| `--color-border` | `rgba(255, 255, 255, 0.08)` | Subtle 1px hairline border |
| `--color-border-hover` | `rgba(255, 255, 255, 0.16)` | Card border on hover |
| `--color-primary` | `#6366f1` | Controlled single indigo accent (CTAs, active tab border) |
| `--color-primary-subtle` | `rgba(99, 102, 241, 0.12)` | Active tab & badge background |
| `--color-text-main` | `#f1f5f9` | High-contrast headlines and values |
| `--color-text-body` | `#94a3b8` | Neutral body copy and explanations |
| `--color-text-muted` | `#64748b` | Footnotes, step counts, metadata |
| `--color-success` | `#10b981` | Production status indicator, verified checkmarks |

---

## 3. Typography Scale & Layout
- **Font**: `'Pretendard Variable', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
- **Monospace**: `'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace`
- **Typographic Rules**:
  - Main Heading: 26px ~ 32px, font-weight 600 (not exaggerated 800+), letter-spacing `-0.02em`. Single solid color `#f8fafc` (no gradient text fill).
  - Section Title: 18px ~ 20px, font-weight 600, letter-spacing `-0.015em`.
  - Body Text: 14px ~ 15px, font-weight 400, line-height 1.6, color `#94a3b8`.
  - Code / Tokens: 13px, font-weight 500, monospace.

---

## 4. Workflow-Centric Architecture (At-a-Glance Layout)
To ensure the reviewer grasps the entire architecture in 5 seconds:
1. **Interactive Step Navigator (Horizontal Timeline Tabs)**:
   - Step 1 (Landing) → Step 2 (PIN Auth) → Step 3 (Gameplay & Hints) → Step 4 (Clear & Reviews) → Step 5 (Admin Control)
   - Clicking any step smoothly reveals the active screenshot and explanation in the main spotlight frame.
2. **All-in-One Workflow Grid (전체 워크플로우 한눈에 보기)**:
   - A synchronized 5-column (or 3x2 on tablet) pipeline board showing all screenshots sequentially with arrow flow indicators.
   - Reviewers can view every screen without multiple page scrolls.
3. **Streamlined Quick Credentials Bar**:
   - Single clean row containing the production URL, player PIN (`Z7P9NC`), admin URL (`/admin`), and admin PIN (`2026`) with 1-click copy buttons.

---

## 5. Anti-Patterns (Strictly Prohibited)
- ❌ No floating blurry colorful background blobs (`.glow-bg`).
- ❌ No text with colorful rainbow gradients.
- ❌ No casual emoji decorations as bullet points (`⚡`, `🕹️`, `🛡️`, `📡`, `📊`, `💬`).
- ❌ No long vertical infinite scrolls where steps are isolated.
- ❌ No sluggish transitions or heavy animations.
