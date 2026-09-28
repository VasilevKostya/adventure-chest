---
name: "Сундук приключений"
description: "A warm-lit fantasy gaming table for shared-device dungeon adventures."
colors:
  bg: "#14181b"
  surface: "#1c2328"
  surface-raised: "#252e33"
  table: "#16272d"
  table-deep: "#111e23"
  text: "#f1ede3"
  muted: "#adb9bc"
  gold: "#eac181"
  gold-hover: "#f6d6a0"
  gold-ink: "#302719"
  line: "#364147"
  danger: "#f0a38d"
  success: "#aad2b9"
  bone: "#ece5d5"
  bone-ink: "#3d423c"
  enemy: "#304148"
  enemy-ink: "#d5e0de"
  field: "#141c20"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.5rem, 5.5vw, 5.6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.6rem"
    fontWeight: 600
    lineHeight: 1.04
  title:
    fontFamily: "Golos Text, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
  body:
    fontFamily: "Golos Text, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Golos Text, sans-serif"
    fontSize: ".875rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Golos Text, sans-serif"
    fontSize: ".75rem"
    fontWeight: 400
rounded:
  badge: "5px"
  small: "6px"
  control: "8px"
  banner: "12px"
  die: "11px"
  table: "14px"
  cover: "16px"
spacing:
  xs: "6px"
  sm: "8px"
  control: "10px"
  compact: "12px"
  md: "16px"
  section: "20px"
  lg: "24px"
  layout: "28px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-ink}"
    rounded: "{rounded.control}"
    padding: "11px 17px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.gold-ink}"
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "11px 17px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "11px 17px"
  input-name:
    backgroundColor: "{colors.field}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  count-chip:
    backgroundColor: "#2c353a"
    rounded: "{rounded.badge}"
    padding: "2px 8px"
  playing-table:
    backgroundColor: "{colors.table}"
    rounded: "{rounded.table}"
  die-party:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.bone-ink}"
    rounded: "{rounded.die}"
    width: "80px"
    height: "80px"
---

# Design System: Сундук приключений

## Overview

**Creative North Star: "The Fantasy Gaming Table"**

Obsidian and deep teal surfaces hold bone dice under warm amber light. The interface feels like a shared fantasy gaming table: expressive at entry and handoff, compact and legible during play.

Cormorant Garamond gives names, scores and chapter-sized moments a storybook voice; Golos Text carries Russian instructions and actions. Painted dungeon imagery supports the atmosphere while the board keeps dice, selection feedback and the current action clearly separated.

**Key Characteristics:**
- Dark dungeon surfaces and light party dice.
- Warm amber for actions, selection and the current player.
- Readable Russian controls with small, consistent inline SVG icons.
- Tactile dice, restrained panel depth and motion tied to throws.

## Colors

The palette combines cool dungeon surfaces with warm, readable action color and pale physical dice. The frontmatter owns the exact values.

### Primary
- **Warm Amber** (`gold`): primary actions, current-player cues, selected dice, treasure symbols and prominent scores.
- **Lit Amber** (`gold-hover`): primary-action hover feedback.
- **Amber Ink** (`gold-ink`): dark text and check marks on amber fills.

### Secondary
- **Copper Warning** (`danger`): fleeing and an awakened dragon.
- **Sage Success** (`success`): completed phase indicators.

### Neutral
- **Obsidian** (`bg`): page canvas.
- **Slate Surfaces** (`surface`, `surface-raised`): entry panels, dialogs and ordinary controls.
- **Deep Teal Table** (`table`, `table-deep`): party and dungeon zones.
- **Warm Chalk** (`text`) and **Mist** (`muted`): primary text and explanatory copy.
- **Slate Seam** (`line`): divisions and control borders.
- **Bone** (`bone`, `bone-ink`): light party die material and default mark.
- **Dungeon Dice** (`enemy`, `enemy-ink`): dark opposing dice and default mark.
- **Recessed Field** (`field`): name-entry background.

**The Amber Guidance Rule.** Use amber to connect the current player, selected source and available primary action; use copper danger and green success for their distinct states.

## Typography

**Display Font:** Cormorant Garamond, with Georgia and serif fallbacks; locally supplied normal weights 500 and 600.

**Body Font:** Golos Text, with sans-serif fallback; locally supplied normal weights 400, 500, 600 and 700. Fonts use `font-display: swap`.

**Character:** A literary serif creates the fantasy voice; a clear Cyrillic sans makes repeated play and short instructions practical. There is no mono face.

### Hierarchy
- **Display:** cover title; the frontmatter clamp is the desktop role, with explicit compact-screen overrides.
- **Headline:** default section heading. Entry, handoff, board identity, dialogs and results use contextual serif sizes rather than a strict mathematical scale.
- **Title:** sans section labels. The action heading is a serif exception (1.9rem desktop, 1.7rem compact).
- **Body:** root text role. Paragraphs use a more open line height (1.65); action guidance is bounded at 78ch and setup guidance at 35ch.
- **Label:** die labels, action instructions and most controls; mobile die labels remain .875rem through the final stylesheet override.
- **Caption:** score metadata, footer and auxiliary labels. Numeric scores and progress counters use tabular numerals where declared.

**The Two Voices Rule.** Use Cormorant Garamond for narrative headings and prominent numbers; use Golos Text for instructions, labels and controls.

## Layout

The page and header share a centered maximum width (1460px), with desktop horizontal padding (36px). Setup is a two-column cover/form composition, bounded at 1220px; handoff uses equal columns, bounded at 1100px. The gameplay score ribbon and shallow illustrated banner precede a board-plus-ledger grid. Its ledger is 300px wide with a 28px gap, reducing to 260px and a 22px gap at 1150px.

At 850px the ledger moves beneath the board in two columns, and the score ribbon uses two columns. At 650px entry and handoff become single-column, page padding becomes 16px, primary action buttons take a full row, and the phase labels stack under their numbered markers. At 390px the ledger becomes one column. The 1600px large-screen rule slightly increases the banner and dice spacing. These are observed breakpoints, not a generic device scale.

Dice wrap in a flex row. Face sizes step from 80px through 70px/75px at intermediate layouts to 65px at 650px and 60px at 390px. Preserve the label and visible focus area when adapting density. Long player names can wrap. Regular gaps range from 6–16px inside components and 20–32px between sections; container padding is contextual.

## Elevation & Depth

Depth is a hybrid of dark tonal zoning, one-pixel seams, painted light and tactile dice. Large containers do not cast generic floating-card shadows. Image overlays preserve readable foreground type. Toasts use a diffuse shadow; native dialogs dim the page with a dark backdrop.

### Shadow Vocabulary
- **Bone Cube Plane:** `inset 0 1px 1px #ffffff8c,inset 0 -3px 7px #221b1240`.
- **Dungeon Cube Plane:** `inset 0 1px 1px #90a0a35c,inset 0 -4px 8px #02070a75`.
- **Contact Shadow:** an elliptical `#02070ab8` layer, blurred by 7px with resting opacity .62 and horizontal scale .92; flight changes its position, spread and opacity with cube height.
- **Toast:** `0 8px 30px #0008`.

**The Game Pieces Own Depth Rule.** Reserve tactile highlights and cast shadows for physical dice and treasure tokens; group the surrounding board and ledger with tone, borders and spacing.

## Shapes

Controls use modest rounded corners, while cover compositions and the table have broader corners. Dice are almost square with softly rounded faces; circle markers are reserved for phase steps, adventure progress and selection checks. The board separates dungeon, party and graveyard with horizontal seams. Ledger sections use rules rather than independent cards.

## Components

### Buttons
Tactile, readable actions. The default control has a one-pixel slate border, a minimum height of 44px and the frontmatter padding. Primary buttons are amber with dark ink and weight 600; secondary buttons use raised slate; quiet buttons are transparent with muted text. Hover changes fill and border; pressing shifts one pixel down. Disabled controls use opacity .45 and a not-allowed cursor. Keyboard focus is an amber 3px outline offset by 4px. Entry and handoff primary actions have a 52px minimum height.

### Inputs / Fields
Recessed name fields have visible labels, a 46px minimum height, amber caret and the same focus treatment. The order number beside each field uses the display serif. Select fields in revival dialogs retain the control family. Names are limited to 30 characters by the current form.

### Navigation
The header pairs a chest line symbol and title with compact quiet text actions. The small-screen navigation hides decorative icons while retaining text. Gameplay phase navigation is a noninteractive ordered list: numbered circles, an amber current step and checked completed steps.

### Chips
Count badges are compact slate rectangles. Adventure pips and phase markers are circular, with text or check marks in addition to color. The player-count selector is a row of four discrete buttons; selection fills one amber and sets `aria-pressed`.

### Cards / Containers
The table groups two contrasting teal zones and a graveyard strip. The entry and handoff compositions clip their cover art within their rounded boundary. Dialogs use a slate surface, a visible border, a 650px maximum width and an 85vh maximum height.

### Dice and Selection
Light bone party dice oppose dark dungeon-stone dice. Each `cube()` has six CSS planes, each showing one real game symbol with its own icon color; numeric pips are absent. Companion cubes contain the six PARTY symbols (warrior, cleric, mage, thief, champion, scroll), and enemy cubes contain the six DUNGEON symbols (goblin, skeleton, slime, chest, potion, dragon). The generated result occupies the front. The remaining five symbols retain their set order, rotated by die ID modulo five, and fill back/right/left/top/bottom deterministically. A visible text label identifies the result independently of its mark. The stage supplies 620px perspective, nested within the table row's 900px perspective; the cube preserves 3D geometry and rests at -9deg X and +14deg Y. Side-dependent lighting brightens the top and darkens the sides and bottom; each plane has an 11px radius and inset highlights, with a separate contact shadow beneath the stage. Half-depth matches half the face width: 40px normally, 35px at 1150px, 37.5px at 850px, 32.5px at 650px and 30px at 390px.

A selected cube's front receives an amber outline offset by 3px, its stage lifts and a circular check appears; its label also turns amber. Selection exposes the companion ability in a bordered amber-tinted strip above the actions. Hover lifts the button by 3px and tilts the cube to -13deg X/+19deg Y with an additional 2px rise, using a .28s transition.

Roll motion follows the dice actually generated: entry rolls the active party and dungeon, descent rolls only the dungeon, and a reroll animates only the selected dice still present in the resulting zones. Ordinary selection and rerenders do not trigger it. The cube-flight and contact-shadow sequences last 740ms using `cubic-bezier(.2,.7,.18,1)`, staggered by die order times 18ms. Deterministic trajectories fall, impact, rebound and settle; final angles of 711deg X and 374deg Y are equivalent to the resting -9deg/+14deg orientation. The front icon resolves from blur during the same 740ms span; the label retains its separate 680ms/22ms reveal. A new dragon entering the lair triggers a 640ms pulse on its filled slots.

During resolution, the table is marked `aria-busy`, the board-and-ledger layout is inert, and the click handler blocks repeat input. After 900ms the interface unlocks and the polite `#roll-announcer` live region outside the inert layout announces the rolled party faces, dungeon faces and any dragon gain. Reduced-motion mode is fully static: the universal `animation:none` rule disables all animation, control transitions remain disabled, and the lock lasts only 40ms for announcement and state synchronization. WebMCP actions use the same `act` wrapper and roll lifecycle as interface actions; requests during the motion lock receive a busy error.

### Player Ribbon and Ledger
The active player is marked by an amber bottom border, status text and a subtle tint. Experience uses the supplied physical-token language: a restored green enamel and aged-gold medallion holds the dynamic numeric value, with a visible “опыт” label and a complete accessible name on the counter. The token is 58px on larger layouts and 48px below 650px. Adventure pips and total points remain supporting sans text. The ledger uses compact treasure rows, a seven-slot dragon threshold and a scrollable chronicle; it reflows without hiding these functions.

### Physical Treasure Tokens
Treasure rows pair an illustrated token with its name, effect and quantity. Token artwork replaces the former generic inventory symbol: images are contained within 44px squares, reducing to 40px below 650px. The resting drop shadow is `0 4px 5px #0007`; hover tilts the token -3deg and raises it 1px over .2s, deepening the shadow to `0 6px 7px #0009`. The empty inventory shows the token back at 58px with reduced opacity. Text remains the explicit description; inventory token images have empty alternative text.

New treasure receives a temporary back-to-front reveal over a dark, warm radial backdrop with 7px backdrop blur and an amber glow. Token fronts and backs are separate contained images. For reliable rendering across browsers, the back rotates to 90deg and becomes transparent at the midpoint, then the front independently rotates from -90deg to 0; explicit opacity and z-index swaps guarantee the face remains visible. The adaptive grid supplies 1100px perspective and each token 1000px perspective. Tokens use viewport width and height constraints (`min(21vw,20vh,205px)`), with smaller limits below 650px. The grid scrolls within 61–65vh when many chests open together, so up to seven results remain reachable.

Each token arrives over 540ms, staggered by 120ms, then turns from its back to its front over 720ms after a 600ms delay plus 140ms per token. The flip passes through a small overshoot before settling at 180deg. A serif title and supporting inventory confirmation accompany the reveal. The board-and-ledger layout is inert and actions remain locked during the sequence. The overlay begins leaving after 1900ms plus 140ms per item, then clears after a 260ms exit. A visible “Показать сразу” action and Escape both end the sequence through the same cleanup path. The persistent external live announcer names every found token; token backs are decorative.

Reduced motion skips arrival, glow and flip animation: fronts are shown immediately at 180deg. The reveal holds briefly for legibility and clears after a 20ms exit; no animated turn is substituted. The general control-transition restriction still applies.

## Do's and Don'ts

### Do:
- Do retain explicit labels beside die symbols and show selected dice with both an outline and a check.
- Do keep player identity, adventure progress and score visible in the score ribbon.
- Do use the existing 3px amber focus outline with a 4px offset on keyboard-focusable controls.
- Do wrap dice and reflow the ledger below the board on narrower screens.
- Do honor reduced motion with fully static dice and lair, disabled animations and control transitions, and a 40ms synchronization lock.

### Don't:
- Don't put the display face on long instructions or control labels.
- Don't let decorative imagery cover controls or selection feedback.
- Don't use color alone to communicate die selection or phase progress.
- Don't replace the established line SVG symbols with text glyphs or emoji.

Source basis: `dist/style.css`, `dist/fonts.css`, `dist/app.mjs`, `dist/index.html`; product commitments from `PRODUCT.md` and the approved surface contract. This record is source-verified; browser visual verification was unavailable. Not canonized: the favicon retains older green/gold values; these are an isolated asset drift, not palette tokens. Face-specific symbol colors remain component details rather than a new general-purpose accent scale.
