import type { ReactNode } from "react";
import VoiceInputBar from "./VoiceInputBar";

// Intrinsic device size — iPhone 15 Pro logical resolution (points).
const W = 393;
const H = 852;

export interface TapHint {
  x: number; // px from left of device (in 393-wide space)
  y: number; // px from top of device (in 852-tall space)
}

interface Props {
  children: ReactNode; // tall screen body
  scrollY?: number; // px to translate body up (simulated scroll)
  scale?: number; // display scale
  input?: { placeholder?: string; listening?: boolean } | null;
  tap?: TapHint;
  scrollHint?: number; // 0..1 scroll position for the side indicator (omit to hide)
}

function StatusBar() {
  return (
    <div className="absolute top-0 right-0 left-0 z-30 h-11 bg-white">
      <div className="flex h-11 items-center justify-between px-6 pt-1 text-[13px] font-semibold text-ink-900">
        <span>9:41</span>
        <div className="absolute top-2 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="flex items-center gap-1.5">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <rect x="0" y="7" width="3" height="4" rx="1" />
            <rect x="4.5" y="5" width="3" height="6" rx="1" />
            <rect x="9" y="3" width="3" height="8" rx="1" />
            <rect x="13.5" y="1" width="3" height="10" rx="1" />
          </svg>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
            <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" opacity="0.5" />
            <rect x="2" y="2" width="14" height="7" rx="1.2" fill="currentColor" />
            <rect x="20" y="3.5" width="1.5" height="4" rx="0.7" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TapDot({ tap }: { tap: TapHint }) {
  return (
    <div
      className="pointer-events-none absolute z-40"
      style={{ left: `${tap.x}px`, top: `${tap.y}px` }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <span className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500" />
        <span className="block h-9 w-9 rounded-full bg-blue-500/25 ring-[3px] ring-blue-500" />
      </div>
    </div>
  );
}

export default function DeviceFrame({
  children,
  scrollY = 0,
  scale = 0.56,
  input,
  tap,
  scrollHint,
}: Props) {
  return (
    <div style={{ width: W * scale, height: H * scale }} className="shrink-0">
      <div
        style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }}
        className="relative"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[52px] bg-white ring-1 ring-black/10 shadow-[0_22px_50px_-22px_rgba(0,0,0,0.45)]">
          {/* body (clipped, translated to simulate scroll) */}
          <div className="absolute inset-x-0 top-0" style={{ transform: `translateY(${-scrollY}px)` }}>
            <div className="pt-11">{children}</div>
          </div>

          <StatusBar />

          {/* scroll position indicator — handle only, no track */}
          {scrollHint !== undefined && (
            <div className="absolute top-14 right-1.5 bottom-24 z-30 w-1">
              <div
                className="w-1 rounded-full bg-black/30"
                style={{ height: "34%", marginTop: `${scrollHint * 66}%` }}
              />
            </div>
          )}

          {input !== null && (
            <VoiceInputBar placeholder={input?.placeholder} listening={input?.listening} />
          )}

          {tap && <TapDot tap={tap} />}
        </div>
      </div>
    </div>
  );
}
