import { Check, Star } from "./Icons";

interface Props {
  rank: string;
  title: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  matches: string[];
  highlight?: boolean;
}

export default function ComparisonCard({
  rank,
  title,
  location,
  image,
  price,
  rating,
  matches,
  highlight = false,
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${
        highlight ? "border-coral-500 ring-2 ring-coral-200" : "border-black/5"
      }`}
    >
      <div className="relative">
        <img src={image} alt={title} className="h-28 w-full object-cover" />
        <span className="absolute top-2 left-2 rounded-full bg-white/95 px-2 py-0.5 text-[11px] font-bold text-ink-900 shadow-sm">
          {rank}
        </span>
        {highlight && (
          <span className="absolute top-2 right-2 rounded-full bg-coral-500 px-2 py-0.5 text-[11px] font-bold text-white">
            Best fit
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[13px] font-bold text-ink-900">{title}</div>
            <div className="text-[11px] text-ink-500">{location}</div>
          </div>
          <div className="flex items-center gap-0.5 text-[12px] font-semibold text-ink-900">
            <Star className="h-3 w-3" />
            {rating}
          </div>
        </div>
        <div className="mt-2 space-y-1">
          {matches.map((m) => (
            <div key={m} className="flex items-center gap-1.5 text-[11px] text-ink-700">
              <Check className="h-3 w-3 shrink-0 text-emerald-500" />
              {m}
            </div>
          ))}
        </div>
        <div className="mt-2.5 text-[13px] font-bold text-ink-900">{price}</div>
      </div>
    </div>
  );
}
