import { USER } from "../data";
import { Search } from "./Icons";

/** Airbnb logo mark (the bélo) in coral. */
function AirbnbMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="#FF385C" aria-label="Airbnb">
      <path d="M16 1.5c-1.7 0-3 .9-4 2.6-.6 1-1.4 2.6-2.7 5.1l-.2.4C6 15.4 4.2 19 3.7 20.5c-.5 1.5-.7 2.7-.5 3.9.4 2.5 2.1 4.4 4.4 5 1.6.4 3.4 0 5.2-1.1.9-.6 1.9-1.4 3.2-2.8 1.3 1.4 2.3 2.2 3.2 2.8 1.8 1.1 3.6 1.5 5.2 1.1 2.3-.6 4-2.5 4.4-5 .2-1.2 0-2.4-.5-3.9-.5-1.5-2.3-5.1-5.4-10.9l-.2-.4C20.4 6.7 19.6 5.1 19 4.1c-1-1.7-2.3-2.6-4-2.6Zm0 2.3c.8 0 1.5.5 2.2 1.7.5.8 1.3 2.4 2.5 4.8l.2.4c3 5.7 4.7 9.2 5.1 10.5.4 1.2.5 2 .4 2.7-.3 1.6-1.4 2.8-2.9 3.2-1 .3-2.2 0-3.5-.8-.8-.5-1.7-1.3-2.9-2.6 1.6-2 2.6-3.7 3-5 .4-1.4.2-2.7-.6-3.7-.9-1.1-2.2-1.7-3.5-1.7s-2.6.6-3.5 1.7c-.8 1-1 2.3-.6 3.7.4 1.3 1.4 3 3 5-1.2 1.3-2.1 2.1-2.9 2.6-1.3.8-2.5 1.1-3.5.8-1.5-.4-2.6-1.6-2.9-3.2-.1-.7 0-1.5.4-2.7.4-1.3 2.1-4.8 5.1-10.5l.2-.4c1.2-2.4 2-4 2.5-4.8.7-1.2 1.4-1.7 2.2-1.7Zm0 11.3c.7 0 1.3.3 1.7.8.4.5.5 1.2.3 2-.3.9-1 2.2-2 3.6-1-1.4-1.7-2.7-2-3.6-.2-.8-.1-1.5.3-2 .4-.5 1-.8 1.7-.8Z" />
    </svg>
  );
}

export default function TopNav() {
  return (
    <div className="flex items-center justify-between px-5 pt-1">
      <div className="flex items-center gap-2">
        <AirbnbMark className="h-8 w-8" />
        <span className="text-[19px] font-extrabold tracking-tight text-coral-500">
          airbnb
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink-700">
          <Search className="h-[18px] w-[18px]" />
        </button>
        <img
          src={USER.avatar}
          alt={USER.name}
          className="h-9 w-9 rounded-full border border-black/10 object-cover"
        />
      </div>
    </div>
  );
}
