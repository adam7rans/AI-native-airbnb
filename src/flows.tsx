import type { ReactNode } from "react";
import type { TapHint } from "./components/DeviceFrame";
import {
  CanvasScreen,
  RebuiltScreen,
  RefineScreen,
  QuieterScreen,
  FocusScreen,
  GalleryScreen,
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
  frame?: {
    contentTopInset?: number;
    transparentStatusBar?: boolean;
  };
}

export interface Flow {
  no: number | string;
  tag: string; // e.g. "Entry", "Branch 1"
  title: string;
  summary: string;
  aiBehavior: string;
  whyMatters: string;
  prdSection?: { label: string; anchor: string };
  steps: Step[];
}

const ask = { placeholder: "Ask Airbnb" };

export const FLOWS: Flow[] = [
  {
    no: "0",
    tag: "Entry",
    title: "Adaptive Trip Canvas",
    summary:
      "The shared starting point. Alex is a returning Airbnb user who has booked a seaside trip every July for the past five years — and every year, he starts planning in March or April. The AI has detected this pattern from years of search history, browsing behavior, and past bookings. So when Alex opens the app in April, the AI already knows he's about to plan his July trip. The home screen isn't a blank search box — it's a fully generated trip plan, ready before he types a word.",
    aiBehavior:
      "Ingests years of in-app behavior — searches, listing views, photo inspections, bookings, and timing patterns — to build a user travel profile. Detects that Alex plans a July coastal trip every spring, then auto-generates a canvas of past favorites, new matches, experiences, and services, each with a 'why it fits' explanation and a live Trip Brief.",
    whyMatters:
      "Airbnb opens as a planning agent, not a blank search box. Instead of starting from an empty query, the first screen is a generated trip built from real behavioral data — showing the user that the app already understands what they want.",
    prdSection: { label: "§5 Example Scenario", anchor: "#5-example-scenario" },
    steps: [
      {
        action: "Open",
        caption: "App opens",
        detail: "Alex opens Airbnb in April — types nothing, enters no dates. The AI has already built a personalized home screen from five years of July seaside bookings.",
        screen: <CanvasScreen />,
        input: ask,
        scrollHint: 0,
      },
      {
        action: "Scroll",
        caption: "Scroll the canvas",
        detail: "Alex scrolls to see AI-generated cards — a past favorite stay, a new match, a local experience, and a service — each with a 'why it fits' explanation drawn from real booking history.",
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
    prdSection: { label: "§10 Branch 1: Repeat Last Year", anchor: "#branch-1-repeat-last-year" },
    steps: [
      {
        action: "Tap",
        caption: 'Tap "Do what I did last year"',
        detail: "Alex taps the first quick chip on the canvas.",
        screen: <CanvasScreen activeChip="Do what I did last year" />,
        input: ask,
        tap: { x: 95, y: 310 },
      },
      {
        action: "Result",
        caption: "Trip rebuilt",
        detail: 'AI returns the "Your July trip, rebuilt" screen — same stay, experience, and service, with availability checked.',
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
    prdSection: { label: "§10 Branch 2: Same Trip, But Better", anchor: "#branch-2-same-trip-but-better" },
    steps: [
      {
        action: "Tap",
        caption: 'Tap "Same trip, but better"',
        detail: "Alex taps the second quick chip.",
        screen: <CanvasScreen activeChip="Same trip, but better" />,
        input: ask,
        tap: { x: 250, y: 310 },
      },
      {
        action: "Tap",
        caption: 'Choose "Quieter this year"',
        detail: 'AI asks how to improve it; Alex picks the "Quieter this year" direction from the chooser.',
        screen: <RefineScreen active="Quieter this year" />,
        input: { placeholder: "Or tell me how to improve it…" },
        tap: { x: 196, y: 300 },
      },
      {
        action: "Result",
        caption: "Brief updated + why",
        detail: 'AI regenerates: the Trip Brief gains quiet/sleep-quality criteria and a "Why this changed" card explains the shift.',
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
    title: "Personalized stay detail",
    summary:
      "Every home listing is reordered around what this specific user cares about. The AI has observed that Alex, across dozens of listings over five years, consistently checks the same things first: verified Wi-Fi, a real workspace, and a balcony with a view. So when Alex opens any listing, those details are surfaced at the top — not buried in a generic amenities list. A different user who always checks pet policies and parking would see a completely different layout for the same home.",
    aiBehavior:
      "Analyzes years of listing-browsing behavior — which sections the user scrolls to first, which photos they zoom into, which amenity filters they toggle — to build a per-user priority model. Reorders the detail page so the user's top concerns (Wi-Fi, workspace, quiet, balcony) appear first, with a 'Why this fits' summary and quick jumps.",
    whyMatters: "The detail page answers this user's specific questions immediately, instead of making them scroll past irrelevant information. Every listing feels like it was written for them.",
    prdSection: { label: "§10 Branch 3: Focus on One Home", anchor: "#branch-3-focus-on-one-home-and-give-visual-feedback" },
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
        caption: '"Why this fits" detail',
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
    title: "Draw-to-search",
    summary:
      "Draw mode is a system-level capability — available on any screen, at any time. Here we show the most coherent version of the flow: Alex opens the Casa Mare photo gallery, brings up the plus menu there, activates draw mode, and then circles specific images while speaking.\n\nUX note: for the demo, exiting voice mode is shown separately from the AI response, but a more flexible product pattern could also offer an explicit Done button for draw mode. That Done-to-exit behavior should always be available as an option, even if users prefer a faster auto-submit pattern.",
    aiBehavior:
      "Watches the user's drawn circles in real-time alongside their spoken input. Converts visual markup + speech into structured search constraints (brighter bathroom, larger balcony, better view) and regenerates matching homes.",
    whyMatters: "Users react to what they see instead of describing everything in words. The AI turns a gesture and a sentence into precise search criteria.",
    prdSection: { label: "§10 Branch 3: Visual Feedback", anchor: "#branch-3-focus-on-one-home-and-give-visual-feedback" },
    steps: [
      {
        action: "Tap",
        caption: "Tap into photos",
        detail: "Alex is on the Casa Mare listing. He taps the hero image / photo count to open the gallery view.",
        screen: <FocusScreen />,
        input: ask,
        tap: { x: 76, y: 278 },
      },
      {
        action: "Result",
        caption: "Gallery opens",
        detail: "The Casa Mare photo gallery opens, giving Alex a grid view of the listing images before any draw interaction begins.",
        screen: <GalleryScreen step={0} />,
        input: ask,
      },
      {
        action: "Tap",
        caption: "Tap the + menu",
        detail: "Inside the gallery, Alex taps the plus icon on the input bar to reveal extra input modes.",
        screen: <GalleryScreen step={0} menuOpen />,
        input: ask,
        tap: { x: 45, y: 808 },
      },
      {
        action: "Tap",
        caption: 'Tap "Draw on screen"',
        detail: "The gallery plus menu shows Draw on screen, Voice message, and Camera. Alex taps Draw on screen.",
        screen: <GalleryScreen step={0} menuOpen drawHighlighted />,
        input: ask,
        tap: { x: 116, y: 658 },
      },
      {
        action: "Result",
        caption: "Draw mode activates",
        detail: "Draw mode activates inside the gallery itself. Alex can now circle any photo and speak or type to search.",
        screen: <GalleryScreen step={0} drawMode />,
        input: { placeholder: "Circle anything or speak…" },
        frame: { contentTopInset: 34, transparentStatusBar: true },
      },
      {
        action: "Tap",
        caption: "Tap voice mode",
        detail: "Alex taps the pink waveform button to start live voice mode before giving feedback.",
        screen: <GalleryScreen step={0} drawMode />,
        input: { placeholder: "Circle anything or speak…" },
        tap: { x: 349, y: 808 },
        frame: { contentTopInset: 34, transparentStatusBar: true },
      },
      {
        action: "Draw",
        caption: "Circle the bathroom + speak",
        detail: 'Alex circles the bathroom photo and says "I want a brighter bathroom."',
        screen: <GalleryScreen step={1} drawMode />,
        input: { placeholder: "Circle an image or tell me more…", listening: true },
        frame: { contentTopInset: 34, transparentStatusBar: true },
      },
      {
        action: "Draw",
        caption: "Circle the balcony + speak",
        detail:
          'Alex keeps the same live voice note going and adds: "And on this photo, I want a bigger balcony and better view."',
        screen: <GalleryScreen step={2} drawMode />,
        input: { placeholder: "Circle an image or tell me more…", listening: true },
        frame: { contentTopInset: 34, transparentStatusBar: true },
      },
      {
        action: "Tap",
        caption: "Exit voice mode",
        detail: "After finishing the continuous voice note, Alex taps the X button to exit voice mode.",
        screen: <GalleryScreen step={2} drawMode />,
        input: { placeholder: "Circle an image or tell me more…", listening: true },
        tap: { x: 347, y: 808 },
        frame: { contentTopInset: 34, transparentStatusBar: true },
      },
      {
        action: "Result",
        caption: "AI starts searching",
        detail: "AI confirms the feedback and begins searching for homes with a brighter bathroom, bigger balcony, and better view.",
        screen: <GalleryScreen step={3} drawMode />,
        scrollY: 92,
        scrollHint: 0.12,
        input: { placeholder: "Circle an image or tell me more…" },
        frame: { contentTopInset: 34, transparentStatusBar: true },
      },
      {
        action: "Result",
        caption: "Regenerated homes",
        detail: 'The canvas regenerates into "Homes matching your changes" with the applied feedback chips.',
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
    no: 5,
    tag: "Branch 5",
    title: "Itinerary remix mode",
    summary:
      "The trip is a multi-day, editable plan — not a single listing. Alex starts from the main canvas, opens a saved itinerary view, reviews the timed plan, and then uses voice to rewrite one day through a quick back-and-forth instead of starting over.",
    aiBehavior:
      "Renders last July as a timed, day-by-day plan and applies spoken edits in place — moving, removing, and adding scheduled items while keeping voice mode active for follow-up tweaks.",
    whyMatters: "AI-native Airbnb manages the trip as a living, editable object.",
    prdSection: { label: "§10 Branch 5: Itinerary Remix", anchor: "#branch-5-review-and-remix-itinerary" },
    steps: [
      {
        action: "Tap",
        caption: "Open the trip brief",
        detail: "From the same main canvas shown in the entry flow, Alex taps the July Sea Trip Brief to expand it.",
        screen: <CanvasScreen />,
        input: ask,
        tap: { x: 196, y: 468 },
      },
      {
        action: "Result",
        caption: "Trip brief expands",
        detail: "The expanded July Sea Trip Brief reveals a past-trip itinerary preview and an Open itinerary action inside the same card.",
        screen: <CanvasScreen tripBriefExpanded />,
        input: ask,
      },
      {
        action: "Tap",
        caption: "Open itinerary",
        detail: "Alex taps Open itinerary from within the expanded trip brief.",
        screen: <CanvasScreen tripBriefExpanded />,
        input: ask,
        tap: { x: 196, y: 675 },
      },
      {
        action: "Result",
        caption: "Itinerary review opens",
        detail: "The saved itinerary opens as a timed day-by-day plan that Alex can review before editing.",
        screen: <ItineraryScreen stage="review" />,
        input: { placeholder: "Edit this itinerary…" },
      },
      {
        action: "Tap",
        caption: "Tap remix",
        detail: "Alex taps Remix this itinerary to enter editing mode.",
        screen: <ItineraryScreen stage="review" />,
        input: { placeholder: "Edit this itinerary…" },
        tap: { x: 196, y: 724 },
      },
      {
        action: "Result",
        caption: "Remixing last July",
        detail: "The same itinerary stays on screen, but now it is explicitly in remix mode rather than already remixed.",
        screen: <ItineraryScreen stage="remixReady" />,
        input: { placeholder: "Edit this itinerary…" },
      },
      {
        action: "Tap",
        caption: "Tap voice mode",
        detail: "Alex taps the waveform button to start editing the itinerary with voice.",
        screen: <ItineraryScreen stage="remixReady" />,
        input: { placeholder: "Edit this itinerary…" },
        tap: { x: 349, y: 808 },
      },
      {
        action: "Voice",
        caption: "Speak the edit",
        detail:
          'Alex says "Move the harbor food walk to noon, remove the sunset boat tour, and add something for the kids at 5."',
        screen: <ItineraryScreen stage="command" />,
        scrollY: 150,
        input: { placeholder: "Edit this itinerary…", listening: true },
        scrollHint: 0.5,
      },
      {
        action: "Result",
        caption: "Day 2 remixed",
        detail:
          "AI rewrites Day 2 with the moved food walk, removed sunset boat tour, and a new 5 PM kids activity, while keeping voice mode active so Alex can keep talking if needed.",
        screen: <ItineraryScreen stage="updated" />,
        scrollY: 420,
        scrollHint: 0.95,
        input: { placeholder: "Keep editing this itinerary…", listening: true },
      },
      {
        action: "Voice",
        caption: "Make one more edit",
        detail: 'Alex keeps talking and says "Actually, make the kids activity at 4 instead."',
        screen: <ItineraryScreen stage="followup" />,
        scrollY: 540,
        scrollHint: 0.98,
        input: { placeholder: "Keep editing this itinerary…", listening: true },
      },
      {
        action: "Result",
        caption: "Day refined again",
        detail:
          "AI updates the same day again, moving the kids activity to 4 PM while keeping voice mode active for another change if Alex wants one.",
        screen: <ItineraryScreen stage="updatedAgain" />,
        scrollY: 900,
        scrollHint: 1,
        input: { placeholder: "Keep editing this itinerary…", listening: true },
      },
    ],
  },
];
