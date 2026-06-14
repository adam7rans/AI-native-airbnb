import FlowBoard from "./components/FlowBoard";
import { Sparkle } from "./components/Icons";
import { FLOWS } from "./flows";

const DOCS = [
  { label: "PRD", href: "https://github.com/adam7rans/AI-native-airbnb/blob/main/docs/01_PRD_AI_Native_Airbnb_Adaptive_Trip_Canvas.md" },
  { label: "Backend Tech Spec", href: "https://github.com/adam7rans/AI-native-airbnb/blob/main/docs/02_Backend_Tech_Spec_User_Travel_Memory_GraphRAG.md" },
  { label: "Agent Build Prompt", href: "https://github.com/adam7rans/AI-native-airbnb/blob/main/docs/airbnb_ai_native_agent_prompt.md" },
];

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
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-black/5 pt-5">
            <a
              href="https://github.com/adam7rans/AI-native-airbnb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-700 hover:text-ink-900"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
              GitHub
            </a>
            <span className="text-black/10">|</span>
            {DOCS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-coral-600 hover:text-coral-700"
              >
                {d.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="py-12" style={{ paddingLeft: "max(2rem, calc((100vw - 1600px) / 2 + 2rem))" }}>
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
