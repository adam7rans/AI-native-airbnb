import type { RecCard } from "../data";
import { Heart, Star, Sparkle, Plus } from "./Icons";

const KIND_LABEL: Record<RecCard["kind"], string> = {
  home: "Home",
  experience: "Experience",
  service: "Service",
};
const KIND_COLOR: Record<RecCard["kind"], string> = {
  home: "bg-coral-500",
  experience: "bg-emerald-500",
  service: "bg-indigo-500",
};

export default function RecommendationCard({ card }: { card: RecCard }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)]">
      <div className="relative">
        <img src={card.image} alt={card.title} className="h-44 w-full object-cover" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold text-white ${KIND_COLOR[card.kind]}`}
          >
            {KIND_LABEL[card.kind]}
          </span>
          {card.badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-ink-900 shadow-sm">
              <Sparkle className="h-3 w-3 text-coral-500" />
              {card.badge}
            </span>
          )}
        </div>
        <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-sm">
          <Heart className="h-[18px] w-[18px]" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-[15px] font-bold text-ink-900">{card.title}</div>
            {card.location && (
              <div className="text-[12px] text-ink-500">{card.location}</div>
            )}
          </div>
          {card.rating && (
            <div className="flex items-center gap-1 text-[13px] font-semibold text-ink-900">
              <Star className="h-3.5 w-3.5 text-ink-900" />
              {card.rating}
            </div>
          )}
        </div>

        <p className="mt-1.5 text-[13px] text-ink-700">{card.subtitle}</p>

        {card.reason && (
          <div className="mt-2.5 flex items-start gap-1.5 rounded-2xl bg-coral-50 px-3 py-2">
            <Sparkle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral-500" />
            <p className="text-[12px] leading-snug font-medium text-coral-700">
              {card.reason}
            </p>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between">
          {card.price && (
            <span className="text-[14px] font-bold text-ink-900">{card.price}</span>
          )}
          <div className="ml-auto flex gap-2">
            {card.buttons.map((b, i) => (
              <button
                key={b}
                className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition ${
                  i === 0
                    ? "bg-ink-900 text-white"
                    : "border border-black/10 bg-white text-ink-700"
                }`}
              >
                {i === 0 && card.kind !== "home" ? (
                  <span className="inline-flex items-center gap-1">
                    <Plus className="h-3.5 w-3.5" /> {b}
                  </span>
                ) : (
                  b
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
