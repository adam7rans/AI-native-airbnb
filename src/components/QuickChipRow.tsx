interface Props {
  chips: string[];
  active?: string;
}

export default function QuickChipRow({ chips, active }: Props) {
  return (
    <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto px-5">
      {chips.map((c) => {
        const on = c === active;
        return (
          <button
            key={c}
            className={`shrink-0 rounded-full border px-3.5 py-2 text-[13px] font-medium whitespace-nowrap transition ${
              on
                ? "border-coral-500 bg-coral-500 text-white shadow-sm"
                : "border-black/10 bg-white text-ink-700"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
