// Mocked JSON-style data for the AI-Native Airbnb prototype.
// Images are stable Unsplash CDN links used as travel photography placeholders.

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  casaMare: img("1499793983690-e29da59ef1c2"),
  seasideLoft: img("1512917774080-9991f1c4c750"),
  islandView: img("1613490493576-7fde63acd811"),
  pineCoast: img("1564013799919-ab600027ffc6"),
  duneHouse: img("1502672260266-1c1ef2d93688"),
  portoGarden: img("1522708323590-d24dbb6b0267"),
  balticHouse: img("1505691938895-1758d7feb511"),
  foodWalk: img("1467003909585-2f8a72700288"),
  boatTour: img("1505228395891-9a51e7e86bf6"),
  natureWalk: img("1437846972679-9e6e537be46e"),
  familyBeach: img("1507525428034-b723cf961d3e"),
  bathroom: img("1584132967334-10e028bd69f7"),
  bathroomBright: img("1620626011761-996317b8d101"),
  balcony: img("1507089947368-19c1da9775ae"),
  balconyBig: img("1566073771259-6a8506099945"),
  workspace: img("1486946255434-2466348c2166"),
  bedroom: img("1560448204-e02f11c3d0e2"),
  livingRoom: img("1502005097973-6a7082348e28"),
  grocery: img("1542838132-92c53300491e"),
  airport: img("1436491865332-7a61a109cc05"),
  chef: img("1556910103-1c02745aae4d"),
  avatar: img("1502685104226-ee32379fefbe", 200),
};

export const USER = {
  name: "Alex",
  month: "April",
  avatar: IMAGES.avatar,
};

export type CardKind = "home" | "experience" | "service";

export interface RecCard {
  id: string;
  kind: CardKind;
  badge?: string;
  title: string;
  location?: string;
  image: string;
  subtitle: string;
  reason: string;
  price?: string;
  rating?: number;
  buttons: string[];
}

export const TRIP_BRIEF = {
  title: "July Sea Trip Brief",
  items: [
    "7–10 nights",
    "Coastal or seaside",
    "Quiet area",
    "Strong Wi-Fi",
    "Real workspace",
    "Balcony or view preferred",
    "Include arrival service",
    "Add one local food experience",
    "Avoid noisy tourist centers",
  ],
};

export const QUICK_CHIPS = [
  "Do what I did last year",
  "Same trip, but better",
  "Somewhere new",
  "Quieter this year",
  "Lower budget",
  "Better for remote work",
  "Add family activities",
];

export const CANVAS_CARDS: RecCard[] = [
  {
    id: "casa-mare",
    kind: "home",
    badge: "Past favorite",
    title: "Casa Mare",
    location: "Dalmatia, Croatia",
    image: IMAGES.casaMare,
    subtitle: "Stayed here twice",
    reason: "Quiet, near water, strong Wi-Fi — matches your past July stays",
    price: "$210 / night",
    rating: 4.96,
    buttons: ["Check July availability", "Find similar"],
  },
  {
    id: "seaside-loft",
    kind: "home",
    badge: "New match",
    title: "Quiet Seaside Loft",
    location: "Comporta, Portugal",
    image: IMAGES.seasideLoft,
    subtitle: "Similar to your Croatia stays, but less expensive",
    reason: "Same calm-water feel and workspace, ~25% lower nightly price",
    price: "$158 / night",
    rating: 4.91,
    buttons: ["Show me", "More like this"],
  },
  {
    id: "coastal-food-walk",
    kind: "experience",
    badge: "Experience",
    title: "Coastal Food Walk",
    location: "Old town harbor",
    image: IMAGES.foodWalk,
    subtitle: "Small-group tasting along the seafront",
    reason: "Similar to food experiences you booked on past summer trips",
    rating: 4.98,
    buttons: ["Add to trip", "See route"],
  },
  {
    id: "airport-grocery",
    kind: "service",
    badge: "Service",
    title: "Airport Pickup + Grocery Delivery",
    location: "Arrival day bundle",
    image: IMAGES.grocery,
    subtitle: "Used on your last July trip",
    reason: "Smooths arrival day — fridge stocked before you reach the home",
    buttons: ["Add to trip", "Customize"],
  },
];

// Frame 2 — repeat last year package
export const REPEAT_PACKAGE = {
  home: {
    title: "Casa Mare, Croatia",
    image: IMAGES.casaMare,
    note: "Same home as last July · Available Jul 8–17",
    status: "Available",
  },
  experience: {
    title: "Coastal Food Walk",
    image: IMAGES.foodWalk,
    note: "Same guide you rated 5★",
    status: "2 slots left",
  },
  service: {
    title: "Airport Pickup + Grocery Delivery",
    image: IMAGES.grocery,
    note: "Identical arrival bundle",
    status: "Available",
  },
};

// Frame 3 — quieter regenerated cards
export const QUIETER_CARDS: RecCard[] = [
  {
    id: "pine-coast",
    kind: "home",
    badge: "Quieter home",
    title: "Pine Coast Home",
    location: "Istria, Croatia",
    image: IMAGES.pineCoast,
    subtitle: "Secluded cove, no nightlife nearby",
    reason: "Top 5% sleep-quality reviews · 12 min from a calm beach",
    price: "$184 / night",
    rating: 4.97,
    buttons: ["Show me", "More like this"],
  },
  {
    id: "morning-nature-walk",
    kind: "experience",
    badge: "Calmer swap",
    title: "Morning Nature Walk",
    location: "Coastal pine trail",
    image: IMAGES.natureWalk,
    subtitle: "Replaces the crowded boat tour",
    reason: "Quiet, early, low-crowd alternative to the sunset boat tour",
    rating: 4.95,
    buttons: ["Add to trip", "Details"],
  },
  {
    id: "grocery-only",
    kind: "service",
    badge: "Service",
    title: "Grocery Delivery",
    location: "Arrival day",
    image: IMAGES.grocery,
    subtitle: "For an easier, slower arrival",
    reason: "Skip the first-night shop — settle in quietly",
    buttons: ["Add to trip", "Customize"],
  },
];

export const QUIETER_BRIEF = [
  "Prioritize quiet neighborhoods",
  "Avoid nightlife zones",
  "Prioritize sleep-quality reviews",
];

// Frame 4 — focus mode listing
export const FOCUS_HOME = {
  title: "Pine Coast Home",
  location: "Istria, Croatia",
  image: IMAGES.pineCoast,
  rating: 4.97,
  reviews: 128,
  price: "$184",
  highlights: [
    { icon: "wifi", label: "Verified Wi-Fi", detail: "320 Mbps · tested" },
    { icon: "desk", label: "Real workspace", detail: "Standing desk + monitor" },
    { icon: "quiet", label: "Quiet area", detail: "No nightlife within 2 km" },
    { icon: "balcony", label: "Balcony, sea view", detail: "South-facing" },
    { icon: "walk", label: "8-min walk to water", detail: "Calm cove" },
    { icon: "match", label: "Like your Croatia stay", detail: "94% match" },
  ],
  jumps: ["Bathroom", "Workspace", "Balcony", "Wi-Fi reviews", "Quietness"],
};

// Frame 6 — circle to bundle
export const BUNDLE_CARDS: RecCard[] = [
  {
    id: "b-home",
    kind: "home",
    title: "Quiet Portugal Home",
    location: "Comporta",
    image: IMAGES.seasideLoft,
    subtitle: "Calm, near water",
    reason: "",
    price: "$158",
    buttons: [],
  },
  {
    id: "b-exp",
    kind: "experience",
    title: "Coastal Food Walk",
    location: "Harbor",
    image: IMAGES.foodWalk,
    subtitle: "Seafront tasting",
    reason: "",
    buttons: [],
  },
  {
    id: "b-island",
    kind: "home",
    title: "Island View House",
    location: "Greece",
    image: IMAGES.islandView,
    subtitle: "Panoramic terrace",
    reason: "",
    price: "$240",
    buttons: [],
  },
  {
    id: "b-service",
    kind: "service",
    title: "Grocery Delivery",
    location: "Arrival day",
    image: IMAGES.grocery,
    subtitle: "Fridge stocked",
    reason: "",
    buttons: [],
  },
  {
    id: "b-boat",
    kind: "experience",
    title: "Sunset Boat Tour",
    location: "Bay",
    image: IMAGES.boatTour,
    subtitle: "Golden hour cruise",
    reason: "",
    buttons: [],
  },
  {
    id: "b-chef",
    kind: "service",
    title: "In-home Chef",
    location: "One evening",
    image: IMAGES.chef,
    subtitle: "Local tasting menu",
    reason: "",
    buttons: [],
  },
];

// Frame 7 — itinerary
export const ITINERARY_ORIGINAL = [
  {
    day: "Day 1",
    label: "Arrival",
    items: ["Airport pickup", "Check-in", "Grocery delivery"],
  },
  {
    day: "Day 2",
    label: "Beach day",
    items: ["Beach morning", "Sunset boat tour"],
  },
  {
    day: "Day 3",
    label: "Food + rest",
    items: ["Food experience", "Free evening"],
  },
];

export const ITINERARY_UPDATED = {
  day: "Day 2",
  label: "Beach day, remixed",
  items: [
    { time: "09:00", text: "Beach morning", state: "kept" as const },
    { time: "12:00", text: "Food walk", state: "moved" as const },
    { time: "17:00", text: "Family activity", state: "added" as const },
  ],
};

// Frame 8 — regenerated results
export const REGEN_CHIPS = [
  "Bathroom with window",
  "Larger balcony",
  "Verified Wi-Fi",
  "Quiet coastal area",
  "Similar design style",
];

export const REGEN_CARDS: RecCard[] = [
  {
    id: "dune-house",
    kind: "home",
    badge: "98% match",
    title: "Dune House",
    location: "Baltic Coast",
    image: IMAGES.duneHouse,
    subtitle: "Skylit bathroom · wide balcony",
    reason: "Bright bathroom, larger balcony, verified Wi-Fi",
    price: "$172 / night",
    rating: 4.94,
    buttons: ["Show me", "More like this"],
  },
  {
    id: "island-view-2",
    kind: "home",
    badge: "95% match",
    title: "Island View House",
    location: "Cyclades, Greece",
    image: IMAGES.islandView,
    subtitle: "Panoramic terrace · quiet lane",
    reason: "Big view balcony, similar design style, quiet coastal area",
    price: "$240 / night",
    rating: 4.92,
    buttons: ["Show me", "More like this"],
  },
];

// Frame 5 — visual feedback updated brief
export const FEEDBACK_BRIEF = [
  "Bathroom with window/skylight",
  "Larger balcony",
  "Better view",
  "Keep similar design style",
];
