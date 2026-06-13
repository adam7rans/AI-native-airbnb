import DeviceFrame from "./DeviceFrame";
import { Sparkle } from "./Icons";
import type { Action, Flow, Step } from "../flows";

const ACTION_STYLE: Record<Action, string> = {
  Open: "bg-black/[0.04] text-ink-600",
  Tap: "bg-coral-100 text-coral-700",
  Scroll: "bg-indigo-100 text-indigo-700",
  Voice: "bg-emerald-100 text-emerald-700",
  Draw: "bg-amber-100 text-amber-700",
  Result: "bg-black/[0.06] text-ink-600",
};

function ActionTag({ action }: { action: Action }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${ACTION_STYLE[action]}`}
    >
      {action}
    </span>
  );
}

function FlowArrow() {
  return (
    <div className="flex shrink-0 flex-col items-center self-center px-1 pb-12">
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-coral-400">
        <path
          d="M2 10h32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 4"
        />
        <path
          d="M30 4l8 6-8 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StepFrame({ step, index }: { step: Step; index: number }) {
  return (
    <div className="flex w-[224px] shrink-0 flex-col">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/[0.06] text-[11px] font-bold text-ink-700">
          {index + 1}
        </span>
        <ActionTag action={step.action} />
      </div>
      <DeviceFrame
        scrollY={step.scrollY}
        scrollHint={step.scrollHint}
        input={step.input}
        tap={step.tap}
      >
        {step.screen}
      </DeviceFrame>
      <div className="mt-2.5 text-[13px] font-semibold text-ink-900">{step.caption}</div>
    </div>
  );
}

function BranchSummary({ flow }: { flow: Flow }) {
  return (
    <div className="w-[320px] shrink-0 self-start p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-black/[0.06] px-2 text-[12px] font-bold text-ink-700">
          {flow.no}
        </span>
        <span className="text-[12px] font-semibold tracking-wide text-ink-500 uppercase">
          {flow.tag}
        </span>
      </div>
      <h3 className="text-[19px] leading-tight font-extrabold tracking-tight text-ink-900">
        {flow.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-ink-700">{flow.summary}</p>

      <div className="mt-4 space-y-3 border-t border-black/5 pt-4">
        <div className="text-[11px] font-bold tracking-wide text-coral-600 uppercase">
          User flow — step by step
        </div>
        <ol className="space-y-2.5">
          {flow.steps.map((s, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral-50 text-[11px] font-bold text-coral-600">
                {i + 1}
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <ActionTag action={s.action} />
                </div>
                <p className="mt-1 text-[12.5px] leading-snug text-ink-700">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-4 space-y-2 border-t border-black/5 pt-4">
        <div>
          <div className="text-[11px] font-bold tracking-wide text-coral-600 uppercase">
            AI behavior
          </div>
          <p className="mt-1 text-[12.5px] leading-snug text-ink-700">{flow.aiBehavior}</p>
        </div>
        <div>
          <div className="text-[11px] font-bold tracking-wide text-coral-600 uppercase">
            Why this matters
          </div>
          <p className="mt-1 text-[12.5px] leading-snug text-ink-700">{flow.whyMatters}</p>
        </div>
      </div>

      <div className="mt-4 border-t border-black/5 pt-3">
        <a href="#" className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-coral-600">
          <Sparkle className="h-3.5 w-3.5" /> Related PRD: [insert PRD link here]
        </a>
      </div>
    </div>
  );
}

export default function FlowBoard({ flow }: { flow: Flow }) {
  return (
    <section className="flex flex-col gap-6 xl:flex-row xl:items-start">
      <BranchSummary flow={flow} />
      <div className="no-scrollbar -mx-2 flex items-stretch overflow-x-auto px-2 pb-2">
        {flow.steps.map((step, i) => (
          <div key={i} className="flex items-stretch">
            {i > 0 && <FlowArrow />}
            <StepFrame step={step} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
