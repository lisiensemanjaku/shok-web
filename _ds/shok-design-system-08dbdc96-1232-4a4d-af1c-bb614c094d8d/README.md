# Shok Design System

## Overview

**Shok** is a dark-mode-only iOS community platform for hyper-local task exchange. Neighbours, friends, and strangers help each other with real-world tasks (moving furniture, tutoring, fixing bikes) using a credits-based economy. The tagline is *"Rebuilding the fabric of human connection through meaningful acts of kindness."*

**Platform:** iOS native (Swift/SwiftUI), dark mode only  
**Backend:** Python gRPC  
**Auth:** Apple Sign In only  
**Localization:** 11 languages (en, de, es, ar, fa, he, hi, ja, sq, uk, zh-Hans)

---

## Sources

| Source | Path / Link |
|--------|-------------|
| iOS Swift codebase | `Shok/` (mounted via File System Access API) |
| App screenshots | `uploads/` (35 PNG screenshots, all screens) |
| App icon | `assets/app_icon_1024.png` |
| Illustrations | `assets/illustrations/` |
| Custom icons | `assets/icons/` |

---

## App Structure

Five tab bar items: **Home** (feed), **Messages**, **Post** (create), **Notifications**, **Account**

Core loop: Post a request → Bid to help → Accept a bid → Complete the task → Credits transfer

---

## Content Fundamentals

### Tone & Voice
- **Warm, encouraging, community-first.** Copy celebrates human connection, not transactions.
- **Second person ("you")** throughout. Direct and personal, never corporate.
- **Sentence case** for all UI strings. Title case only for tab labels and navigation titles.
- **No jargon.** Simple, plain English. Assumes multilingual audience.
- **Emojis used sparingly in push notification banners only** — not in UI labels or cards.
- Notification banners use emoji (🎉 🙌 💸 💬) for energy; in-app UI is emoji-free.

### Example Copy
- *"Get help when you need it, give help when you can — be part of a supportive community"*
- *"Start with 100 credits, and let the community help you thrive in a caring network"*
- *"How can the community help you?"* (post composer placeholder)
- *"It's empty over here"* (empty state title — conversational, gentle)
- *"We're sorry to see you go"* (account deletion)
- *"Hooray! You've received %@. Check your account for more info."* (credits notification)
- *"Be courteous and respectful, and avoid sharing sensitive information."* (new conversation)

### Casing Conventions
| Element | Case |
|---------|------|
| Navigation titles | Title Case |
| Tab labels | Title Case |
| Buttons | Title Case |
| Body copy / placeholders | Sentence case |
| Error messages | Sentence case |
| Notification titles | Title Case |
| Notification bodies | Sentence case with emoji |

---

## Visual Foundations

### Colors
Dual-theme. **Dark** is the shipped default (pure black background, dark gray cards, mint green accents). **Light** is a polished companion theme for designing in both appearances — a designed, accessibility-tuned palette, not a raw inversion. Set `data-theme="light"` on `<html>` (or any container) to opt in; default / `data-theme="dark"` stays dark. Full token list with every UI role: `uploads/color_usage_map.md`.

| Token | Hex (dark) | Hex (light) | Usage |
|-------|-----------|------------|-------|
| `primaryGreen` | `#79EDAF` | `#0E8C4F` | CTAs, credits, active icons, accepted states |
| `primaryYellow` | `#FFCE2F` | `#A87400` | Secondary highlights |
| `accentBlue` | `#75AFEF` | `#0A6CE0` | Links, hashtags, location text, interactive |
| `errorRed` | `#FF6B57` | `#D62A22` | Destructive actions, expired posts, errors |
| `appBackground` | `#000000` | `#F4F5F7` | Screen background |
| `cardBackground` | `#2D2B30` @ 80% | `#FFFFFF` | Post cards, settings cards |
| `elevatedSurface` | `#3E3D41` @ 90% | `#ECEDF1` | Menus, sheets, inset controls, badges |
| `primaryText` | `#FFFFFF` | `#16161B` | Headings, body text |
| `secondaryText` | `#FFFFFF` @ 85% | `#3C3C44` | Row labels, buttons |
| `tertiaryText` | `#C2C2C3` | `#6C6C75` | Placeholders, inactive icons |
| `mutedText` | `#868586` | `#8C8C95` | Meta info (bid count, timestamps) |
| `subtleText` | `#5D5D5E` | `#BCBCC4` | De-emphasised content |
| `borderSubtle` | `#FFFFFF` @ 20% | `#14151C` @ 12% | Dividers |

**Light-theme design notes**
- Soft cool canvas (`#F4F5F7`) with **white** cards lifted on real shadow — replaces the muddy `#E0E0E0`-on-white flatness of the raw inversion.
- Smooth 7-step cool-neutral text ramp (the old light values had `quaternaryText` == `secondaryText`).
- Accents deepened for AA legibility on white while keeping brand identity (mint → emerald, sky → true blue, coral → strong red, gold → deep amber).
- Gray button flips to a light fill (`#E6E7EB`) so the universal black label stays legible.
- Light theme leans on `--shadow-card` / `--shadow-sm` for elevation since it has no background contrast to rely on.

### Typography
- **Helvetica Neue** — primary typeface for all headings, body copy, post content, navigation titles
- **Helvetica** — utility typeface for smaller labels, info text, credit transfer info
- **SF Pro (system)** — iOS system font for controls, inputs, pickers
- Google Fonts substitute: **DM Sans** (used in this design system)

| Style | Size | Weight |
|-------|------|--------|
| Nav Title | 20px | Bold |
| Author Name | 18px | Bold |
| Body / Content | 18px | Regular |
| Action / Button | 16px | Regular / Semibold |
| Meta | 14px | Regular |
| Credits Caption | 13px | Semibold |
| Timestamp | 11px | Regular |

### Spacing
From Swift layout constants:
- `4px` — tight icon/label gaps (creditsSpacing)
- `8px` — info row gaps (infoSpacing)
- `12px` — PostHeader avatar/text gap
- `16px` — card padding, list row insets, item spacing
- `20px` — action button gap, screen top padding
- `24px` — content block spacing, screen horizontal padding

### Backgrounds
- **Pure black** `#000000` screen background — very deliberate, high contrast
- **Dark gray cards** `#2D2B30` — slight warm-gray tint, not pure neutral
- No background images or textures on UI surfaces
- **Illustration images** used only on onboarding slides (SVG, flat style, dark backgrounds)

### Illustrations
Flat vector style (undraw-inspired). Dark navy figure tones (#1E2033 range) with **mint green** (#79EDAF) as the accent colour (capes, clothing accents, highlighted elements). Consistent with the brand's green. Rounded, friendly, humanistic.

### Animations & Motion
- SwiftUI default animation (`.default`) for filter type changes
- `.easeInOut(duration: 0.2)` for search bar toggle
- Shimmer loading animation on skeleton states
- No bouncy spring animations — smooth and composed
- Transition style: fade/slide, not dramatic

### Hover/Press States
- iOS: tap highlighting via `.opacity` reduction (30% disabled opacity for disabled buttons)
- Buttons use `.buttonStyle(.plain)` — custom press feedback via opacity
- Active icon states: `primaryGreen` replaces `secondaryText` color

### Corner Radii
| Element | Radius |
|---------|--------|
| Cards (post cards, settings groups) | 16px |
| Message bubbles | 18px (large), 4px (tail corner) |
| Pill buttons (Post, Continue with Apple) | ~100px (pill) |
| Inputs / text fields | ~10px |
| Profile images (post size) | ~8px |

### Borders & Dividers
- `borderSubtle` = `rgba(255,255,255,0.2)` — used as list item dividers
- No heavy borders on cards — shape defined by background color contrast
- Cards have no visible border stroke

### Shadows
- Minimal — dark theme relies on background color contrast
- `0 2px 12px rgba(0,0,0,0.6)` for card elevation

### Message Bubbles
- Sent (mine): `primaryGreenMuted` background — rgba(121,237,175,0.5)
- Received: `accentBlueMuted` — rgba(117,175,239,0.5)
- Asymmetric corner rounding: tail corner = 4px, all others = 18px

### Tab Bar
- Pure black background
- Active tab: `primaryGreen` icon
- Inactive tabs: `secondaryText` (white @ 85%)
- Tab items: house.fill / message.fill / plus.app.fill / bell.fill / person.circle.fill (SF Symbols)

### Cards
- Background: `cardBackground` (#2D2B30 @ 80%)
- Corner radius: 16px
- Internal padding: 16px
- No border stroke — blends into black background via contrast
- Expired post cards: `errorRedSubtle` background tint
- List row insets: 16px

### Iconography
See ICONOGRAPHY section below.

---

## Iconography

### SF Symbols (primary icon system)
Shok uses **Apple SF Symbols** exclusively for all UI icons. No third-party icon library.

Key icons used:
| Symbol | Usage |
|--------|-------|
| `house.fill` | Home tab |
| `message.fill` | Messages tab |
| `plus.app.fill` | Post tab |
| `bell.fill` | Notifications tab |
| `person.circle.fill` | Account tab |
| `magnifyingglass` | Search |
| `mappin.and.ellipse` | Location |
| `checkmark.circle.fill` | Accepted bid, read receipt |
| `checkmark.circle` | Accept bid action |
| `xmark` | Close/dismiss |
| `person.slash.fill` | Blocked users |
| `trash.fill` | Delete |
| `list.clipboard.fill` | Provide feedback |
| `exclamationmark.circle` | Warning/expired |
| `info.circle` | Info |
| `person.badge.shield.checkmark` | Completed task |

### Custom SVG Icons (`assets/icons/`)
| File | Usage |
|------|-------|
| `credit_icon.svg` | Credits currency symbol (custom coin icon used in bidder rows) |
| `log_out_icon.svg` | Log out action in Account tab |

### Illustrations (`assets/illustrations/`)
All illustrations are SVG, flat style, undraw-inspired. Dark navy figure palette with mint green accents.
| File | Used on |
|------|---------|
| `welcome_to_shok.svg` | Onboarding slide 1 — superhero figure with green cape |
| `bid_earn_spend.svg` | Onboarding slide 2 — figure posting to a feed |
| `grow_community.svg` | Onboarding slide 3 — community/referral theme |
| `smily_sad.svg` | Empty state / sad face |
| `undraw_heavy_box.svg` | Empty state / heavy lifting |
| `delete_account.svg` | Account deletion confirmation |

---

## File Index

```
README.md                     ← This file
SKILL.md                      ← Agent skill definition
colors_and_type.css           ← CSS variables: colors, typography, spacing, radii

assets/
  app_icon_1024.png           ← App icon (1024×1024)
  icons/
    credit_icon.svg           ← Custom credits icon
    log_out_icon.svg          ← Custom log out icon
  illustrations/
    welcome_to_shok.svg       ← Onboarding slide 1 illustration
    bid_earn_spend.svg        ← Onboarding slide 2 illustration
    grow_community.svg        ← Onboarding slide 3 illustration
    smily_sad.svg             ← Empty state illustration
    undraw_heavy_box.svg      ← Empty state illustration
    delete_account.svg        ← Delete account illustration

preview/
  colors-brand.html           ← Primary / accent color swatches
  colors-surface.html         ← Background & surface colors
  colors-text.html            ← Text hierarchy colors
  colors-semantic.html        ← Semantic colors (error, warning, success)
  type-scale.html             ← Full type size scale specimen
  type-specimens.html         ← Contextual typography examples
  spacing-tokens.html         ← Spacing, radius, shadow tokens
  components-post-card.html   ← Post card component
  components-buttons.html     ← Button variants
  components-inputs.html      ← Input fields, text areas
  components-tab-bar.html     ← Tab bar component
  components-messages.html    ← Message bubbles

ui_kits/
  ios_app/
    README.md                 ← UI kit notes
    index.html                ← Interactive prototype (5-tab app)
    Components.jsx            ← Shared UI components
    FeedScreen.jsx            ← Home / Feed screen
    PostScreen.jsx            ← New post creation screen
    MessagesScreen.jsx        ← Messages tab
    NotificationsScreen.jsx   ← Notifications tab
    AccountScreen.jsx         ← Account tab
    OnboardingScreen.jsx      ← Welcome / onboarding flow
```
