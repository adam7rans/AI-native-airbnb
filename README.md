# AI-Native Airbnb · Adaptive Trip Canvas — Flow Board

High-fidelity **flow board** of a re-imagined, AI-native Airbnb home experience
(React + Vite + Tailwind CSS v4). A returning user opens the app in April and sees an
AI-generated **Adaptive Trip Canvas** built from years of travel behavior — then steers it
through voice, text, taps, circles, and feedback.

## Documentation

- [PRD · Adaptive Trip Canvas](./docs/01_PRD_AI_Native_Airbnb_Adaptive_Trip_Canvas.md) — product
  concept and requirements for the AI-native Airbnb home experience.
- [Backend Tech Spec · User Travel Memory & GraphRAG](./docs/02_Backend_Tech_Spec_User_Travel_Memory_GraphRAG.md)
  — backend architecture for travel memory and GraphRAG retrieval.
- [Agent Build Prompt](./docs/airbnb_ai_native_agent_prompt.md) — the prompt used to build the
  mobile screens / flow board in this repo.

## How it's structured (and why)

This is a **presentation artifact, not an interactive app**. Each branch is a **user flow**
shown as a horizontal **row of static, non-scrolling 9:16 mobile frames** with arrows
between them. Every distinct moment in a flow gets its own frame:

- **Open** — a screen is entered
- **Tap** — the user taps something (shown with a coral tap indicator)
- **Scroll** — the user scrolls (the same screen, translated; with a scroll-position bar)
- **Voice** — the user speaks (listening waveform + transcript bubble)
- **Draw** — the user circles part of an image / canvas (hand-drawn coral lasso)
- **Result** — the AI responds / regenerates

Each branch also has a **summary card** that spells out every step in words (the taps,
scrolls, voice commands, draws, and results), plus AI behavior, why it matters, and a PRD
placeholder.

### Why frames aren't scrollable

Figma frames don't scroll in a static board — scrolling requires a prototype interaction
in Present mode. So instead of one scrollable frame per branch (which hid the actual
flow), each branch is decomposed into multiple fixed-viewport frames. The full experience
reads at a glance with no interaction required.

## Flows

| Row | Branch | Steps |
|-----|--------|-------|
| 0 | Entry · Adaptive Trip Canvas | Open → Scroll |
| 1 | Repeat last year | Tap → Result → Scroll |
| 2 | Same trip, but better | Tap → **Choose** → Result → Scroll |
| 3 | Focus mode on one home | Tap → Result → Scroll |
| 3B | Visual feedback | Open → Draw → Draw → Result → Result → Scroll |
| 4 | Circle-to-bundle | Open → Draw → Result |
| 5 | Itinerary remix | Open → Voice → Result |

## Run

```bash
pnpm install
pnpm dev      # dev server (note the printed port; 5173 may be in use)
pnpm build    # type-check + production build to dist/
pnpm preview  # serve the production build
```

## Structure

- `src/flows.tsx` — the flow definitions: every branch, its steps, screen state, scroll
  offset, tap target, and the written-out step description. **Edit flows here.**
- `src/screens/Screens.tsx` — parameterized screen bodies (pure tall content) reused across
  steps, e.g. `GalleryScreen({step})`, `BundleScreen({selected, showBundle})`,
  `ItineraryScreen({stage})`.
- `src/components/DeviceFrame.tsx` — the static 9:16 device shell (status bar, simulated
  scroll via `scrollY`, scroll indicator, tap dot, fixed input bar overlay).
- `src/components/FlowBoard.tsx` — renders a branch: summary card + a row of `DeviceFrame`s
  with action tags and arrows.
- `src/components/` — reusable UI: `TopNav`, `TabNav`, `HeroPrompt`, `TripBrief`,
  `RecommendationCard`, `QuickChipRow`, `VoiceInputBar`, `ComparisonCard`,
  `GalleryFeedbackImage`, `ItineraryDay`, `Bubbles`, `Icons`, `SectionTitle`.
- `src/data.ts` — all mocked data + image URLs (Unsplash CDN placeholders).

## Figma transfer

Each step frame is a self-contained 9:16 tile (the body is clipped to the device, scroll
positions are baked in). Screenshot any row, or rebuild the rows in Figma as frames with
connector arrows — the action tags and summary cards translate directly to a flow board.
