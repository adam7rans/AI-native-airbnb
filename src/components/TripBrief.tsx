import type { ReactNode } from "react";
import { Edit, Sparkle, Check } from "./Icons";

interface Props {
  title?: string;
  items: string[];
  updated?: string[]; // items rendered as "newly added/changed"
  compact?: boolean;
  note?: string;
  expandedContent?: ReactNode;
  ctaLabel?: string;
}

export default function TripBrief({
  title = "July Sea Trip Brief",
  items,
  updated = [],
  compact = false,
  note,
  expandedContent,
  ctaLabel,
}: Props) {
  return (
    <div className="rounded-3xl border border-coral-100 bg-gradient-to-b from-coral-50/80 to-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral-500 text-white">
            <Sparkle className="h-4 w-4" />
          </span>
          <div>
            <div className="text-[14px] font-bold text-ink-900">{title}</div>
            <div className="flex items-center gap-1 text-[11px] font-medium text-coral-600">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-coral-500" />
              Live · updates as you steer
            </div>
          </div>
        </div>
        <button className="flex items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1 text-[12px] font-semibold text-ink-700">
          <Edit className="h-3.5 w-3.5" /> Edit
        </button>
      </div>

      <div className={`mt-3 ${compact ? "flex flex-wrap gap-1.5" : "space-y-1.5"}`}>
        {compact
          ? items.map((it) => (
              <span
                key={it}
                className="rounded-full bg-white px-2.5 py-1 text-[12px] font-medium text-ink-700 ring-1 ring-black/5"
              >
                {it}
              </span>
            ))
          : items.map((it) => (
              <div key={it} className="flex items-center gap-2 text-[13px] text-ink-700">
                <Check className="h-4 w-4 shrink-0 text-coral-500" />
                {it}
              </div>
            ))}
      </div>

      {updated.length > 0 && (
        <div className="mt-3 rounded-2xl border border-coral-200 bg-coral-50 p-3">
          <div className="mb-1.5 text-[11px] font-bold tracking-wide text-coral-600 uppercase">
            Just updated
          </div>
          <div className="flex flex-wrap gap-1.5">
            {updated.map((u) => (
              <span
                key={u}
                className="inline-flex items-center gap-1 rounded-full bg-coral-500 px-2.5 py-1 text-[12px] font-medium text-white"
              >
                <Sparkle className="h-3 w-3" /> {u}
              </span>
            ))}
          </div>
        </div>
      )}

      {note && <p className="mt-3 text-[12px] leading-relaxed text-ink-500">{note}</p>}

      {expandedContent && <div className="mt-3">{expandedContent}</div>}

      {ctaLabel && (
        <button className="mt-4 w-full rounded-full bg-coral-500 py-3 text-[13px] font-bold text-white">
          {ctaLabel}
        </button>
      )}
    </div>
  );
}
