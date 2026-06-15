import TopNav from "../components/TopNav";
import TabNav from "../components/TabNav";
import HeroPrompt from "../components/HeroPrompt";
import QuickChipRow from "../components/QuickChipRow";
import TripBrief from "../components/TripBrief";
import RecommendationCard from "../components/RecommendationCard";
import SectionTitle from "../components/SectionTitle";
import ComparisonCard from "../components/ComparisonCard";
import GalleryFeedbackImage from "../components/GalleryFeedbackImage";
import { ItineraryDay, ItineraryDayRich } from "../components/ItineraryDay";
import { UserBubble, AIBubble } from "../components/Bubbles";
import {
  HighlightIcon,
  Heart,
  Star,
  Sparkle,
  Check,
  Lasso,
  Edit as PenIcon,
  Mic,
  ChevronRight,
} from "../components/Icons";
import {
  CANVAS_CARDS,
  QUICK_CHIPS,
  TRIP_BRIEF,
  REPEAT_PACKAGE,
  QUIETER_CARDS,
  QUIETER_BRIEF,
  FOCUS_HOME,
  BUNDLE_CARDS,
  ITINERARY_ORIGINAL,
  ITINERARY_UPDATED,
  REGEN_CARDS,
  REGEN_CHIPS,
  IMAGES,
} from "../data";

const SHELL = "w-[393px] bg-white pb-28";

/* ── Root: Adaptive Trip Canvas ─────────────────────────────── */
export function CanvasScreen({ activeChip }: { activeChip?: string }) {
  return (
    <div className={SHELL}>
      <TopNav />
      <TabNav active="All" />
      <HeroPrompt
        title="Planning your July sea trip?"
        subtitle="You usually start looking around now. I pulled together familiar stays, new options, experiences, and services based on your past summer trips."
      />
      <QuickChipRow chips={QUICK_CHIPS} active={activeChip} />
      <div className="px-5 pt-5">
        <TripBrief title={TRIP_BRIEF.title} items={TRIP_BRIEF.items.slice(0, 5)} compact />
      </div>
      <SectionTitle action="Refresh">Your trip canvas</SectionTitle>
      <div className="space-y-4 px-5">
        {CANVAS_CARDS.map((c) => (
          <RecommendationCard key={c.id} card={c} />
        ))}
      </div>
    </div>
  );
}

/* ── Branch 1: Repeat last year ─────────────────────────────── */
function PackageRow({
  tag,
  title,
  image,
  note,
  status,
}: {
  tag: string;
  title: string;
  image: string;
  note: string;
  status: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-2.5 shadow-sm">
      <img src={image} alt={title} className="h-16 w-16 rounded-xl object-cover" />
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-bold tracking-wide text-ink-500 uppercase">{tag}</div>
        <div className="truncate text-[14px] font-bold text-ink-900">{title}</div>
        <div className="truncate text-[12px] text-ink-500">{note}</div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-600">
        <Check className="h-3 w-3" /> {status}
      </span>
    </div>
  );
}

export function RebuiltScreen() {
  return (
    <div className={SHELL}>
      <TopNav />
      <TabNav active="All" />
      <div className="px-5 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-50 px-2.5 py-1 text-[11px] font-semibold text-coral-600">
          <Sparkle className="h-3.5 w-3.5" /> Rebuilt from memory
        </span>
        <h1 className="mt-2.5 text-[26px] leading-tight font-extrabold tracking-tight text-ink-900">
          Your July trip, rebuilt
        </h1>
        <p className="mt-1.5 text-[14px] text-ink-500">
          Last July's exact pattern, checked against this summer's availability.
        </p>
      </div>
      <div className="px-5 pt-4">
        <AIBubble>
          I rebuilt this from last July's trip pattern. You can repeat it exactly or swap
          any part.
        </AIBubble>
      </div>
      <div className="mt-4 space-y-2.5 px-5">
        <PackageRow tag="Stay" {...REPEAT_PACKAGE.home} />
        <PackageRow tag="Experience" {...REPEAT_PACKAGE.experience} />
        <PackageRow tag="Service" {...REPEAT_PACKAGE.service} />
      </div>
      <div className="mt-4 px-5">
        <div className="rounded-2xl bg-ink-900 p-4 text-white">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-white/70">Trip total · 9 nights</span>
            <span className="flex items-center gap-1 text-[12px] text-white/70">
              <Star className="h-3 w-3" /> 4.96
            </span>
          </div>
          <div className="mt-1 text-[24px] font-extrabold">$2,140</div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-full bg-white py-2.5 text-[13px] font-bold text-ink-900">
              Review trip
            </button>
            <button className="flex-1 rounded-full bg-coral-500 py-2.5 text-[13px] font-bold text-white">
              Book again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Branch 2 step: refinement chooser ──────────────────────── */
export function RefineScreen({ active }: { active?: string }) {
  const opts = [
    { k: "Quieter this year", d: "Calmer areas, stronger sleep-quality reviews" },
    { k: "Lower budget", d: "Same coastal feel, ~20% cheaper stays" },
    { k: "Better for remote work", d: "Verified Wi-Fi + real workspace first" },
    { k: "Add family activities", d: "Kid-friendly experiences each day" },
  ];
  return (
    <div className={SHELL}>
      <TopNav />
      <TabNav active="All" />
      <div className="px-5 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-50 px-2.5 py-1 text-[11px] font-semibold text-coral-600">
          <Sparkle className="h-3.5 w-3.5" /> Same trip, but better
        </span>
        <h1 className="mt-2.5 text-[24px] leading-tight font-extrabold tracking-tight text-ink-900">
          How should I improve it?
        </h1>
        <p className="mt-1.5 text-[14px] text-ink-500">
          Pick a direction — I'll keep what worked and change the rest.
        </p>
      </div>
      <div className="mt-4 space-y-2.5 px-5">
        {opts.map((o) => {
          const on = o.k === active;
          return (
            <div
              key={o.k}
              className={`flex items-center gap-3 rounded-2xl border p-3.5 ${
                on
                  ? "border-coral-500 bg-coral-50 ring-2 ring-coral-200"
                  : "border-black/10 bg-white"
              }`}
            >
              <div className="flex-1">
                <div className="text-[15px] font-bold text-ink-900">{o.k}</div>
                <div className="text-[12px] text-ink-500">{o.d}</div>
              </div>
              {on ? (
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral-500 text-white">
                  <Check className="h-4 w-4" />
                </span>
              ) : (
                <ChevronRight className="h-5 w-5 text-ink-300" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Branch 2: regenerated (quieter) ────────────────────────── */
export function QuieterScreen() {
  return (
    <div className={SHELL}>
      <TopNav />
      <TabNav active="All" />
      <div className="px-5 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-50 px-2.5 py-1 text-[11px] font-semibold text-coral-600">
          <Sparkle className="h-3.5 w-3.5" /> Regenerated
        </span>
        <h1 className="mt-2.5 text-[24px] leading-tight font-extrabold tracking-tight text-ink-900">
          Same coastal feel, quieter this year
        </h1>
      </div>
      <QuickChipRow chips={QUICK_CHIPS} active="Quieter this year" />
      <div className="px-5 pt-5">
        <TripBrief
          title={TRIP_BRIEF.title}
          items={TRIP_BRIEF.items.slice(0, 4)}
          updated={QUIETER_BRIEF}
          compact
        />
      </div>
      <div className="px-5 pt-4">
        <div className="rounded-3xl border border-coral-100 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral-500 text-white">
              <Sparkle className="h-4 w-4" />
            </span>
            <div className="text-[14px] font-bold text-ink-900">Why this changed</div>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-700">
            I kept the seaside July pattern, but replaced busier locations with calmer
            areas and stronger sleep-quality signals.
          </p>
        </div>
      </div>
      <SectionTitle>Regenerated for quiet</SectionTitle>
      <div className="space-y-4 px-5">
        {QUIETER_CARDS.map((c) => (
          <RecommendationCard key={c.id} card={c} />
        ))}
      </div>
    </div>
  );
}

/* ── Branch 3: focus mode listing ───────────────────────────── */
export function FocusScreen() {
  return (
    <div className={SHELL}>
      <div className="relative h-64 w-full">
        <img src={FOCUS_HOME.image} alt={FOCUS_HOME.title} className="h-full w-full object-cover" />
        <div className="absolute top-3 right-4 left-4 flex items-center justify-between">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow">
            <ChevronRight className="h-5 w-5 rotate-180" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow">
            <Heart className="h-[18px] w-[18px]" />
          </button>
        </div>
        <span className="absolute bottom-3 left-4 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          1 / 24 photos
        </span>
      </div>
      <div className="px-5 pt-4">
        <h1 className="text-[22px] leading-tight font-extrabold tracking-tight text-ink-900">
          {FOCUS_HOME.title}
        </h1>
        <div className="mt-1 flex items-center gap-2 text-[13px] text-ink-500">
          <span className="flex items-center gap-1 font-semibold text-ink-900">
            <Star className="h-3.5 w-3.5" /> {FOCUS_HOME.rating}
          </span>
          <span>· {FOCUS_HOME.reviews} reviews ·</span>
          <span>{FOCUS_HOME.location}</span>
        </div>
      </div>
      <div className="px-5 pt-4">
        <div className="rounded-3xl border border-coral-100 bg-gradient-to-b from-coral-50/80 to-white p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral-500 text-white">
              <Sparkle className="h-4 w-4" />
            </span>
            <div className="text-[15px] font-bold text-ink-900">Why this fits your July trip</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {FOCUS_HOME.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-black/5 bg-white p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral-50 text-coral-500">
                  <HighlightIcon name={h.icon} className="h-[18px] w-[18px]" />
                </span>
                <div className="mt-2 text-[13px] font-bold text-ink-900">{h.label}</div>
                <div className="text-[11px] text-ink-500">{h.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 pt-4">
        <div className="text-[12px] font-semibold text-ink-500">Jump to what you care about</div>
        <div className="no-scrollbar mt-2 flex gap-2 overflow-x-auto">
          {FOCUS_HOME.jumps.map((j) => (
            <button
              key={j}
              className="shrink-0 rounded-full border border-black/10 bg-white px-3.5 py-2 text-[13px] font-medium text-ink-700"
            >
              {j}
            </button>
          ))}
        </div>
      </div>
      <div className="px-5 pt-5">
        <div className="flex items-center justify-between rounded-2xl bg-ink-900 p-4 text-white">
          <div>
            <span className="text-[18px] font-extrabold">{FOCUS_HOME.price}</span>
            <span className="text-[13px] text-white/70"> / night</span>
          </div>
          <button className="rounded-full bg-coral-500 px-6 py-2.5 text-[13px] font-bold">
            Check July dates
          </button>
        </div>
      </div>
    </div>
  );
}

function GalleryMenu({ drawHighlighted = false }: { drawHighlighted?: boolean }) {
  return (
    <div className="absolute bottom-[94px] left-5 z-30 w-48 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)]">
      <button
        className={`flex w-full items-center gap-3 px-4 py-3 text-left ${
          drawHighlighted ? "bg-coral-50" : ""
        }`}
      >
        <PenIcon className={`h-5 w-5 ${drawHighlighted ? "text-coral-600" : "text-ink-500"}`} />
        <span
          className={`text-[14px] font-medium ${
            drawHighlighted ? "font-semibold text-coral-700" : "text-ink-700"
          }`}
        >
          Draw on screen
        </span>
      </button>
      <button className="flex w-full items-center gap-3 px-4 py-3 text-left">
        <Mic className="h-5 w-5 text-ink-500" />
        <span className="text-[14px] font-medium text-ink-700">Voice message</span>
      </button>
      <button className="flex w-full items-center gap-3 px-4 py-3 text-left">
        <svg
          className="h-5 w-5 text-ink-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
          />
        </svg>
        <span className="text-[14px] font-medium text-ink-700">Camera</span>
      </button>
    </div>
  );
}

function GalleryHeader({
  drawMode = false,
  showHint = false,
}: {
  drawMode?: boolean;
  showHint?: boolean;
}) {
  return (
    <div className={drawMode ? "px-5 pt-0" : "px-5 pt-1"}>
      {drawMode && (
        <div className="mb-0.5 flex justify-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-coral-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(255,56,92,0.9)]">
            <Lasso className="h-3.5 w-3.5" /> Draw mode
          </span>
        </div>
      )}

      <div className="relative flex items-center justify-between">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] text-ink-900">
          <ChevronRight className="h-5 w-5 rotate-180" />
        </button>
        <div className="text-center">
          <h1 className="text-[17px] font-extrabold tracking-tight text-ink-900">Casa Mare</h1>
          <p className="text-[12px] text-ink-500">1 / 24 photos</p>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] text-ink-900">
          <Heart className="h-[18px] w-[18px]" />
        </button>
      </div>

      {showHint && (
        <p className="mt-3 text-center text-[13px] text-ink-500">
          Circle anything on screen and speak or type to search
        </p>
      )}
    </div>
  );
}

function SearchProgressCard() {
  return (
    <div className="mt-3 flex justify-center px-5">
      <div className="w-full max-w-[270px] rounded-[28px] border border-coral-100 bg-gradient-to-b from-coral-50 to-white px-5 py-4 text-center shadow-[0_16px_40px_-22px_rgba(255,56,92,0.4)]">
        <div className="text-[13px] font-semibold text-coral-600">Airbnb AI</div>
        <div className="mt-1.5 text-[16px] leading-snug font-bold text-ink-900">
          Finding homes that match your updates
        </div>
        <div className="mt-1 text-[12px] leading-relaxed text-ink-500">
          Searching for brighter bathrooms, bigger balconies, and better views.
        </div>
        <div className="mt-3 flex items-center justify-center gap-1.5 text-coral-500">
          <span className="h-2 w-2 rounded-full bg-current animate-pulse [animation-delay:0ms]" />
          <span className="h-2 w-2 rounded-full bg-current animate-pulse [animation-delay:180ms]" />
          <span className="h-2 w-2 rounded-full bg-current animate-pulse [animation-delay:360ms]" />
        </div>
      </div>
    </div>
  );
}

/* ── Branch 3B: visual feedback gallery ─────────────────────── */
export function GalleryScreen({
  step,
  drawMode = false,
  menuOpen = false,
  drawHighlighted = false,
}: {
  step: 0 | 1 | 2 | 3;
  drawMode?: boolean;
  menuOpen?: boolean;
  drawHighlighted?: boolean;
}) {
  return (
    <div className="relative w-[393px] bg-white pb-28" style={{ minHeight: 808 }}>
      <GalleryHeader drawMode={drawMode} showHint={drawMode && step === 0} />
      <div className="mt-3 grid grid-cols-2 gap-2 px-5">
        <GalleryFeedbackImage
          src={IMAGES.galleryBathroom}
          alt="Bathroom"
          circled={step >= 1}
          note="Brighter bathroom"
          className="h-40"
        />
        <GalleryFeedbackImage
          src={IMAGES.galleryBalcony}
          alt="Balcony"
          circled={step >= 2}
          note="Bigger + better view"
          className="h-40"
        />
        <GalleryFeedbackImage src={IMAGES.bedroom} alt="Bedroom" className="h-28" />
        <GalleryFeedbackImage src={IMAGES.livingRoom} alt="Living room" className="h-28" />
      </div>
      <div className="mt-4 space-y-2 px-5">
        {step === 1 && <UserBubble voice>I want a brighter bathroom.</UserBubble>}
        {step >= 2 && (
          <UserBubble voice>
            I want a brighter bathroom, and on this photo, I want a bigger balcony and better
            view.
          </UserBubble>
        )}
        {step >= 3 && (
          <AIBubble>
            Got it. I'll look for homes with a brighter bathroom, bigger balcony, and a better
            view.
          </AIBubble>
        )}
      </div>
      {step >= 3 && <SearchProgressCard />}
      {menuOpen && <GalleryMenu drawHighlighted={drawHighlighted} />}
    </div>
  );
}

/* ── Branch 4: circle-to-bundle ─────────────────────────────── */
const CIRCLED = new Set(["b-home", "b-exp", "b-service"]);
const KIND_COLOR = {
  home: "bg-coral-500",
  experience: "bg-emerald-500",
  service: "bg-indigo-500",
} as const;

export function BundleScreen({
  selected,
  showBundle,
}: {
  selected: boolean;
  showBundle: boolean;
}) {
  return (
    <div className={SHELL}>
      <div className="px-5 pt-1">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-extrabold tracking-tight text-ink-900">
            Circle-to-bundle
          </h1>
          <span className="inline-flex items-center gap-1 rounded-full bg-coral-500 px-2.5 py-1 text-[11px] font-semibold text-white">
            <Lasso className="h-3.5 w-3.5" /> Lasso mode
          </span>
        </div>
        <p className="mt-1 text-[13px] text-ink-500">
          Circle items, then say "build the trip around these."
        </p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5 px-5">
        {BUNDLE_CARDS.map((c) => {
          const on = selected && CIRCLED.has(c.id);
          return (
            <div
              key={c.id}
              className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm ${
                on ? "border-coral-500 ring-2 ring-coral-300" : "border-black/5"
              }`}
            >
              <div className="relative">
                <img src={c.image} alt={c.title} className="h-28 w-full object-cover" />
                <span
                  className={`absolute top-1.5 left-1.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold text-white ${KIND_COLOR[c.kind]}`}
                >
                  {c.kind}
                </span>
                {on && (
                  <>
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <ellipse
                        cx="50"
                        cy="50"
                        rx="44"
                        ry="42"
                        fill="none"
                        stroke="#FF385C"
                        strokeWidth="3"
                        strokeLinecap="round"
                        transform="rotate(-5 50 50)"
                      />
                    </svg>
                    <span className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-coral-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                  </>
                )}
              </div>
              <div className="p-2">
                <div className="truncate text-[12px] font-bold text-ink-900">{c.title}</div>
                <div className="flex items-center justify-between">
                  <span className="truncate text-[10px] text-ink-500">{c.subtitle}</span>
                  {c.price && (
                    <span className="text-[11px] font-bold text-ink-900">{c.price}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showBundle && (
        <>
          <div className="mt-4 space-y-2 px-5">
            <UserBubble voice>Build the trip around these.</UserBubble>
            <AIBubble>Got it. I'll build the July trip around these.</AIBubble>
          </div>
          <div className="mt-3 px-5">
            <div className="rounded-3xl border border-coral-100 bg-gradient-to-b from-coral-50/80 to-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-[15px] font-extrabold text-ink-900">Trip Option A</div>
                <span className="flex items-center gap-1 text-[12px] font-semibold text-ink-900">
                  <Star className="h-3.5 w-3.5" /> 4.93
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  ["Stay", "Quiet Portugal Home"],
                  ["Experience", "Coastal Food Walk"],
                  ["Service", "Grocery Delivery"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2 text-[13px]">
                    <span className="w-20 text-[11px] font-bold tracking-wide text-ink-500 uppercase">
                      {k}
                    </span>
                    <Check className="h-4 w-4 text-coral-500" />
                    <span className="font-medium text-ink-900">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-full border border-black/10 bg-white py-2.5 text-[12px] font-bold text-ink-700">
                  Compare with other bundles
                </button>
                <button className="flex-1 rounded-full bg-coral-500 py-2.5 text-[12px] font-bold text-white">
                  Save trip option
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Branch 5: itinerary remix ──────────────────────────────── */
export function ItineraryScreen({ stage }: { stage: "original" | "command" | "updated" }) {
  return (
    <div className={SHELL}>
      <div className="px-5 pt-1">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-50 px-2.5 py-1 text-[11px] font-semibold text-coral-600">
          <Sparkle className="h-3.5 w-3.5" /> Itinerary remix
        </span>
        <h1 className="mt-2.5 text-[24px] leading-tight font-extrabold tracking-tight text-ink-900">
          Last July, remixed
        </h1>
        <p className="mt-1 text-[13px] text-ink-500">Your trip as an editable day-by-day plan.</p>
      </div>
      <div className="px-5 pt-3">
        <div className="mb-2 text-[12px] font-bold tracking-wide text-ink-500 uppercase">
          Original itinerary
        </div>
        <div className="space-y-3">
          {ITINERARY_ORIGINAL.map((d) => (
            <ItineraryDay key={d.day} day={d} />
          ))}
        </div>
      </div>
      {stage !== "original" && (
        <div className="px-5 pt-4">
          <UserBubble voice>
            Move the food walk to noon, remove the boat tour, and add something for the kids
            at 5.
          </UserBubble>
        </div>
      )}
      {stage === "updated" && (
        <>
          <div className="px-5 pt-3">
            <div className="mb-2 text-[12px] font-bold tracking-wide text-coral-600 uppercase">
              Updated itinerary
            </div>
            <ItineraryDayRich
              day={ITINERARY_UPDATED.day}
              label={ITINERARY_UPDATED.label}
              items={ITINERARY_UPDATED.items}
            />
          </div>
          <div className="px-5 pt-3">
            <AIBubble>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-500" />I checked availability and found
                two family-friendly options that fit the new schedule.
              </span>
            </AIBubble>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Branch 3B result: regenerated results ──────────────────── */
export function RegenScreen() {
  return (
    <div className={SHELL}>
      <TopNav />
      <TabNav active="Homes" />
      <div className="px-5 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-50 px-2.5 py-1 text-[11px] font-semibold text-coral-600">
          <Sparkle className="h-3.5 w-3.5" /> Regenerated from your feedback
        </span>
        <h1 className="mt-2.5 text-[24px] leading-tight font-extrabold tracking-tight text-ink-900">
          Homes matching your changes
        </h1>
      </div>
      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-5">
        {REGEN_CHIPS.map((c) => (
          <span
            key={c}
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-coral-500 px-3 py-1.5 text-[12px] font-semibold whitespace-nowrap text-white"
          >
            <Sparkle className="h-3 w-3" /> {c}
          </span>
        ))}
      </div>
      <SectionTitle>New matches</SectionTitle>
      <div className="space-y-4 px-5">
        {REGEN_CARDS.map((c) => (
          <RecommendationCard key={c.id} card={c} />
        ))}
      </div>
      <SectionTitle>Compare top 3</SectionTitle>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 pb-1">
        <div className="w-44 shrink-0">
          <ComparisonCard
            rank="#1"
            title="Dune House"
            location="Baltic Coast"
            image={IMAGES.duneHouse}
            price="$172"
            rating={4.94}
            matches={["Brighter bathroom", "Wide balcony", "320 Mbps Wi-Fi"]}
            highlight
          />
        </div>
        <div className="w-44 shrink-0">
          <ComparisonCard
            rank="#2"
            title="Island View House"
            location="Greece"
            image={IMAGES.islandView}
            price="$240"
            rating={4.92}
            matches={["Big view balcony", "Quiet lane", "Similar style"]}
          />
        </div>
        <div className="w-44 shrink-0">
          <ComparisonCard
            rank="#3"
            title="Pine Coast Home"
            location="Croatia"
            image={IMAGES.pineCoast}
            price="$184"
            rating={4.97}
            matches={["Quiet cove", "Sea-view balcony", "Workspace"]}
          />
        </div>
      </div>
      <div className="px-5 pt-4">
        <div className="flex gap-2">
          <button className="flex-1 rounded-full border border-black/10 bg-white py-3 text-[13px] font-bold text-ink-700">
            Compare top 3
          </button>
          <button className="flex-1 rounded-full bg-coral-500 py-3 text-[13px] font-bold text-white">
            Save these options
          </button>
        </div>
      </div>
    </div>
  );
}
