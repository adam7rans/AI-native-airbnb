import type { ReactNode } from "react";
import { Sparkle, Mic } from "./Icons";

export function UserBubble({
  children,
  voice = false,
}: {
  children: ReactNode;
  voice?: boolean;
}) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-3xl rounded-br-md bg-black/[0.04] px-4 py-2.5 text-[13px] leading-snug text-ink-900">
        {voice && (
          <span className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-ink-400 uppercase">
            <Mic className="h-3 w-3" /> Voice
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

export function AIBubble({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-3xl rounded-bl-md border border-coral-100 bg-coral-50 px-4 py-3">
        <div className="mb-1 flex items-center gap-1.5 text-[11px] font-bold text-coral-600">
          <Sparkle className="h-3.5 w-3.5" /> Airbnb AI
        </div>
        <div className="text-[13px] leading-snug text-ink-700">{children}</div>
      </div>
    </div>
  );
}
