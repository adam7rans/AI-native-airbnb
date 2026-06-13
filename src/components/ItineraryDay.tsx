import { Check, Plus, Sparkle } from "./Icons";

type ItemState = "kept" | "moved" | "added" | "removed";

interface SimpleDay {
  day: string;
  label: string;
  items: string[];
}
interface RichItem {
  time: string;
  text: string;
  state: ItemState;
}

const STATE_STYLE: Record<ItemState, { ring: string; tag: string; label: string }> = {
  kept: { ring: "border-black/10 bg-white", tag: "bg-black/5 text-ink-500", label: "Kept" },
  moved: {
    ring: "border-amber-200 bg-amber-50",
    tag: "bg-amber-500 text-white",
    label: "Moved",
  },
  added: {
    ring: "border-emerald-200 bg-emerald-50",
    tag: "bg-emerald-500 text-white",
    label: "Added",
  },
  removed: {
    ring: "border-red-200 bg-red-50 line-through opacity-60",
    tag: "bg-red-500 text-white",
    label: "Removed",
  },
};

export function ItineraryDay({ day }: { day: SimpleDay }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-ink-900 px-2.5 py-1 text-[12px] font-bold text-white">
          {day.day}
        </span>
        <span className="text-[13px] font-medium text-ink-500">{day.label}</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {day.items.map((it) => (
          <div key={it} className="flex items-center gap-2 text-[14px] text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-300" />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ItineraryDayRich({
  day,
  label,
  items,
}: {
  day: string;
  label: string;
  items: RichItem[];
}) {
  return (
    <div className="rounded-2xl border-2 border-coral-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-coral-500 px-2.5 py-1 text-[12px] font-bold text-white">
          {day}
        </span>
        <span className="text-[13px] font-medium text-ink-500">{label}</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {items.map((it) => {
          const s = STATE_STYLE[it.state];
          return (
            <div
              key={it.text}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 ${s.ring}`}
            >
              <span className="w-11 text-[12px] font-bold text-ink-900">{it.time}</span>
              <span className="flex-1 text-[13px] text-ink-700">{it.text}</span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${s.tag}`}
              >
                {it.state === "added" ? (
                  <Plus className="h-3 w-3" />
                ) : it.state === "kept" ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <Sparkle className="h-3 w-3" />
                )}
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
