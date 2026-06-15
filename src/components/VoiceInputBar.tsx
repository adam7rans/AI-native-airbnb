import { Close, Mic, Plus, Waveform } from "./Icons";

interface Props {
  placeholder?: string;
  floating?: boolean;
  listening?: boolean;
}

function VoiceWaveform() {
  const bars = [4, 8, 14, 20, 16, 22, 18, 14, 20, 24, 18, 12, 16, 22, 14, 8, 12, 18, 10, 6];
  return (
    <div className="mx-auto flex w-full max-w-[180px] items-center justify-center gap-[4px]">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-coral-500"
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

export default function VoiceInputBar({
  placeholder = "Ask Airbnb",
  floating = true,
  listening = false,
}: Props) {
  const wrapper = floating
    ? "absolute right-0 bottom-0 left-0 z-20 px-9 pb-5"
    : "px-9 py-5";

  if (listening) {
    return (
      <div className={wrapper}>
        <div className="flex items-center justify-center gap-4">
          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/5 bg-white text-ink-500 shadow-[0_10px_26px_-12px_rgba(0,0,0,0.35)]">
            <Plus className="h-[30px] w-[30px]" />
          </button>

          <div className="flex h-[58px] min-w-0 flex-1 items-center overflow-hidden rounded-[32px] border border-black/8 bg-white px-5 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.35)]">
            <VoiceWaveform />
          </div>

          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/5 bg-white text-ink-500 shadow-[0_10px_26px_-12px_rgba(0,0,0,0.35)]">
            <Close className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapper}>
      <div className="flex items-center gap-2 rounded-[32px] border border-black/10 bg-white px-1.5 py-3 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.25)]">
        <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500">
          <Plus className="h-[30px] w-[30px]" />
        </button>
        <span className="flex-1 truncate text-[14px] text-ink-500">{placeholder}</span>
        <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500">
          <Mic className="h-[30px] w-[30px]" />
        </button>
        <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
          <Waveform className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
