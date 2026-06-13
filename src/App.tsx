import FlowBoard from "./components/FlowBoard";
import { Sparkle } from "./components/Icons";
import { FLOWS } from "./flows";

const LEGEND: { action: string; cls: string; desc: string }[] = [
  { action: "Open", cls: "bg-black/[0.04] text-ink-600", desc: "Screen entered" },
  { action: "Tap", cls: "bg-coral-100 text-coral-700", desc: "User taps" },
  { action: "Scroll", cls: "bg-indigo-100 text-indigo-700", desc: "User scrolls" },
  { action: "Voice", cls: "bg-emerald-100 text-emerald-700", desc: "User speaks" },
  { action: "Draw", cls: "bg-amber-100 text-amber-700", desc: "Circle / lasso" },
  { action: "Result", cls: "bg-black/[0.06] text-ink-600", desc: "AI responds" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f1ee] text-ink-900">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-[1600px] px-8 py-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-coral-50 px-3 py-1 text-[12px] font-semibold text-coral-600">
            <Sparkle className="h-4 w-4" /> Flow board · non-scrolling frames · Figma-ready
          </div>
          <h1 className="mt-3 text-[34px] leading-tight font-extrabold tracking-tight text-ink-900">
            AI-Native Airbnb: Adaptive Trip Canvas
          </h1>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-500">
            Each branch is a <strong className="text-ink-700">user flow</strong> shown as a row of
            static iPhone 15 Pro frames with arrows between them. Every tap, scroll, voice command,
            and circle gets its own frame — so the full experience reads at a glance without
            interacting. Branch summary cards on the left spell out each step.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {LEGEND.map((l) => (
              <span
                key={l.action}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[12px] font-medium text-ink-500 ring-1 ring-black/5"
              >
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${l.cls}`}>
                  {l.action}
                </span>
                {l.desc}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-8 py-12">
        <div className="space-y-12">
          {FLOWS.map((flow) => (
            <FlowBoard key={String(flow.no)} flow={flow} />
          ))}
        </div>
      </main>

      <footer className="border-t border-black/5 bg-white py-8 text-center text-[13px] text-ink-500">
        AI-Native Airbnb · Adaptive Trip Canvas — flow-board mockup · fake data
      </footer>
    </div>
  );
}
