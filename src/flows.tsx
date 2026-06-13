import type { ReactNode } from "react";
import type { TapHint } from "./components/DeviceFrame";
import {
  CanvasScreen,
  RebuiltScreen,
  RefineScreen,
  QuieterScreen,
  FocusScreen,
  GalleryScreen,
  BundleScreen,
  ItineraryScreen,
  RegenScreen,
} from "./screens/Screens";

export type Action = "Open" | "Tap" | "Scroll" | "Voice" | "Draw" | "Result";

export interface Step {
  action: Action;
  caption: string; // short label under the frame
  detail: string; // written-out flow step (the spec line)
  screen: ReactNode;
  scrollY?: number;
  scrollHint?: number; // 0..1 position of the scroll indicator
  input?: { placeholder?: string; listening?: boolean } | null;
  tap?: TapHint;
}

export interface Flow {
  no: number | string;
  tag: string; // e.g. "Entry", "Branch 1"
  title: string;
  summary: string;
  aiBehavior: string;
  whyMatters: string;
  steps: Step[];
}

const ask = { placeholder: "Ask Airbnb" };

export const FLOWS: Flow[] = [
  {
    no: "0",
    tag: "Entry",
    title: "Adaptive Trip Canvas",
    summary:
      "The shared starting point for every branch. Alex opens Airbnb in April and the home screen is already generated from years of behavior.",
    aiBehavior:
      "Detects the recurring July seaside pattern and assembles a canvas of past favorites, new matches, experiences, and services — each with a 'why it fits' line and a live Trip Brief.",
    whyMatters:
      "Airbnb opens as a planning agent, not a blank search box. The first screen is a generated trip, not an empty query.",
    steps: [
      {
        action: "Open",
        caption: "App opens",
        detail: "Alex launches Airbnb — no search, no dates. Lands on the generated canvas (hero, chips, Trip Brief peek).",
        screen: <CanvasScreen />,
        input: ask,
        scrollHint: 0,
      },
      {
        action: "Scroll",
        caption: "Scroll the canvas",
        detail: "Alex scrolls down to reveal the generated cards: past favorite, new match, experience, and service.",
        screen: <CanvasScreen />,
        scrollY: 520,
        scrollHint: 0.7,
        input: ask,
      },
    ],
  },
  {
    no: 1,
    tag: "Branch 1",
    title: "Repeat last year",
    summary: "The lowest-effort path — rebuild last July's trip in one tap.",
    aiBehavior:
      "Reconstructs last July's home + experience + service bundle from memory and re-checks each against this summer's availability.",
    whyMatters: "A returning user can repeat a known-good trip in one tap, or swap any single part.",
    steps: [
      {
        action: "Tap",
        caption: "Tap “Do what I did last year”",
        detail: "Alex taps the first quick chip on the canvas.",
        screen: <CanvasScreen activeChip="Do what I did last year" />,
        input: ask,
        tap: { x: 95, y: 310 },
      },
      {
        action: "Result",
        caption: "Trip rebuilt",
        detail: "AI returns the “Your July trip, rebuilt” screen — same stay, experience, and service, with availability checked.",
        screen: <RebuiltScreen />,
        input: { placeholder: "Swap a stay, date, or activity…" },
      },
      {
        action: "Scroll",
        caption: "Scroll to book",
        detail: "Alex scrolls to the trip total and the Review / Book again actions.",
        screen: <RebuiltScreen />,
        scrollY: 200,
        scrollHint: 0.8,
        input: { placeholder: "Swap a stay, date, or activity…" },
      },
    ],
  },
  {
    no: 2,
    tag: "Branch 2",
    title: "Same trip, but better",
    summary:
      "A qualitative transform of the trip — not a re-search. Includes the sub-choice step that was missing before.",
    aiBehavior:
      "Updates the Trip Brief (quiet neighborhoods, avoid nightlife, sleep-quality reviews) and regenerates cards with a 'Why this changed' explanation.",
    whyMatters: "The AI transforms the trip along a chosen axis while keeping what worked.",
    steps: [
      {
        action: "Tap",
        caption: "Tap “Same trip, but better”",
        detail: "Alex taps the second quick chip.",
        screen: <CanvasScreen activeChip="Same trip, but better" />,
        input: ask,
        tap: { x: 250, y: 310 },
      },
      {
        action: "Tap",
        caption: "Choose “Quieter this year”",
        detail: "AI asks how to improve it; Alex picks the “Quieter this year” direction from the chooser.",
        screen: <RefineScreen active="Quieter this year" />,
        input: { placeholder: "Or tell me how to improve it…" },
        tap: { x: 196, y: 300 },
      },
      {
        action: "Result",
        caption: "Brief updated + why",
        detail: "AI regenerates: the Trip Brief gains quiet/sleep-quality criteria and a “Why this changed” card explains the shift.",
        screen: <QuieterScreen />,
        input: { placeholder: "Make it even calmer…" },
        scrollHint: 0,
      },
      {
        action: "Scroll",
        caption: "Scroll to new options",
        detail: "Alex scrolls to the regenerated cards: a quieter home and a morning nature walk replacing the boat tour.",
        screen: <QuieterScreen />,
        scrollY: 540,
        scrollHint: 0.75,
        input: { placeholder: "Make it even calmer…" },
      },
    ],
  },
  {
    no: 3,
    tag: "Branch 3",
    title: "Focus mode on one home",
    summary: "A listing detail re-ordered around what this user cares about.",
    aiBehavior:
      "Surfaces Wi-Fi, workspace, quiet, balcony view, and walk-to-water first, with a personalized 'Why this fits' summary and quick jumps.",
    whyMatters: "The detail page answers this user's specific questions immediately.",
    steps: [
      {
        action: "Tap",
        caption: "Tap a recommended home",
        detail: "From the canvas, Alex taps a home card to open it.",
        screen: <CanvasScreen />,
        scrollY: 540,
        scrollHint: 0.75,
        input: ask,
        tap: { x: 196, y: 170 },
      },
      {
        action: "Result",
        caption: "“Why this fits” detail",
        detail: "The listing opens with a personalized summary grid (verified Wi-Fi, workspace, quiet, sea-view balcony…).",
        screen: <FocusScreen />,
        input: { placeholder: "Ask about this home…" },
        scrollHint: 0,
      },
      {
        action: "Scroll",
        caption: "Scroll to jumps + price",
        detail: "Alex scrolls to the quick-jump chips and the nightly price / check-dates action.",
        screen: <FocusScreen />,
        scrollY: 430,
        scrollHint: 0.85,
        input: { placeholder: "Ask about this home…" },
      },
    ],
  },
  {
    no: "3B",
    tag: "Branch 3B",
    title: "Visual feedback mode",
    summary: "Circle parts of photos and react by voice — markup becomes search criteria.",
    aiBehavior:
      "Turns hand-drawn circles + speech into structured constraints (window bathroom, larger balcony, better view) and regenerates matching homes.",
    whyMatters: "Users react to images directly instead of describing everything in words.",
    steps: [
      {
        action: "Open",
        caption: "Open the gallery",
        detail: "Alex opens the photo gallery for a home in Feedback mode.",
        screen: <GalleryScreen step={0} />,
        input: { placeholder: "Circle an image or tell me more…" },
      },
      {
        action: "Draw",
        caption: "Circle the bathroom + speak",
        detail: "Alex circles the bathroom photo and says “I like this bathroom, but with natural light.”",
        screen: <GalleryScreen step={1} />,
        input: { placeholder: "Circle an image or tell me more…", listening: true },
      },
      {
        action: "Draw",
        caption: "Circle the balcony + speak",
        detail: "Alex circles the balcony and says “Bigger balcony, better view.”",
        screen: <GalleryScreen step={2} />,
        input: { placeholder: "Circle an image or tell me more…", listening: true },
      },
      {
        action: "Result",
        caption: "AI + Trip Brief updated",
        detail: "AI confirms the new criteria and the Trip Brief updates with window bathroom, larger balcony, better view, keep style.",
        screen: <GalleryScreen step={3} />,
        scrollY: 180,
        input: { placeholder: "Circle an image or tell me more…" },
        scrollHint: 0.45,
      },
      {
        action: "Result",
        caption: "Regenerated homes",
        detail: "The canvas regenerates into “Homes matching your changes” with the applied feedback chips.",
        screen: <RegenScreen />,
        input: { placeholder: "Refine these results…" },
        scrollHint: 0,
      },
      {
        action: "Scroll",
        caption: "Scroll to compare top 3",
        detail: "Alex scrolls to the side-by-side comparison of the top three matches.",
        screen: <RegenScreen />,
        scrollY: 560,
        scrollHint: 0.85,
        input: { placeholder: "Refine these results…" },
      },
    ],
  },
  {
    no: 4,
    tag: "Branch 4",
    title: "Circle-to-bundle trip builder",
    summary: "Select multiple items on the canvas spatially, then build a trip around them.",
    aiBehavior:
      "Treats the lassoed home + experience + service as context and assembles a coherent bundle (Trip Option A).",
    whyMatters: "Users create context visually instead of specifying every constraint in words.",
    steps: [
      {
        action: "Open",
        caption: "Canvas in lasso mode",
        detail: "Alex switches the canvas grid into lasso mode; nothing selected yet.",
        screen: <BundleScreen selected={false} showBundle={false} />,
        input: { placeholder: "Add or remove an item…" },
      },
      {
        action: "Draw",
        caption: "Circle 3 items",
        detail: "Alex circles a home, an experience, and a service across the grid.",
        screen: <BundleScreen selected={true} showBundle={false} />,
        input: { placeholder: "Add or remove an item…" },
      },
      {
        action: "Result",
        caption: "“Build around these”",
        detail: "Alex says “Build the trip around these.” AI assembles Trip Option A with compare / save actions.",
        screen: <BundleScreen selected={true} showBundle={true} />,
        scrollY: 260,
        scrollHint: 0.8,
        input: { placeholder: "Add or remove an item…", listening: true },
      },
    ],
  },
  {
    no: 5,
    tag: "Branch 5",
    title: "Itinerary remix mode",
    summary: "The trip is a multi-day, editable plan — not a single listing.",
    aiBehavior:
      "Renders last July as a day-by-day plan and applies a spoken edit — moving, removing, and adding timed items while checking availability.",
    whyMatters: "AI-native Airbnb manages the trip as a living, editable object.",
    steps: [
      {
        action: "Open",
        caption: "Original itinerary",
        detail: "Alex says “Show me what I did last July.” The trip renders as Day 1–3.",
        screen: <ItineraryScreen stage="original" />,
        input: { placeholder: "Edit any day…" },
      },
      {
        action: "Voice",
        caption: "Speak the edit",
        detail: "Alex says “Move the food walk to noon, remove the boat tour, and add something for the kids at 5.”",
        screen: <ItineraryScreen stage="command" />,
        scrollY: 150,
        input: { placeholder: "Edit any day…", listening: true },
        scrollHint: 0.5,
      },
      {
        action: "Result",
        caption: "Day 2 remixed",
        detail: "AI rewrites Day 2 (kept / moved / added items) and notes two family-friendly options that fit the new schedule.",
        screen: <ItineraryScreen stage="updated" />,
        scrollY: 280,
        scrollHint: 0.8,
        input: { placeholder: "Edit any day…" },
      },
    ],
  },
];
