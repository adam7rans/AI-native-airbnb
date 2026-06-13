const TABS = ["All", "Homes", "Experiences", "Services"] as const;
type Tab = (typeof TABS)[number];

export default function TabNav({ active = "All" }: { active?: Tab }) {
  return (
    <div className="mt-3 border-b border-black/5 px-5">
      <div className="flex gap-6">
        {TABS.map((t) => {
          const on = t === active;
          return (
            <div key={t} className="relative pb-3">
              <span
                className={`text-[15px] ${
                  on ? "font-semibold text-ink-900" : "font-medium text-ink-500"
                }`}
              >
                {t}
              </span>
              {on && (
                <span className="absolute right-0 -bottom-px left-0 h-[3px] rounded-full bg-ink-900" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
