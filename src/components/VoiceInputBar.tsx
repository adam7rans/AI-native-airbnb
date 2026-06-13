import { Close, Mic, Plus, Waveform } from "./Icons";

interface Props {
  placeholder?: string;
  floating?: boolean;
  listening?: boolean;
}

function VoiceWaveform() {
  const bars = [4, 8, 14, 20, 16, 22, 18, 14, 20, 24, 18, 12, 16, 22, 14, 8, 12, 18, 10, 6];
  return (
    <div className="flex flex-1 items-center justify-center gap-[3px]">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-coral-500"
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
    ? "absolute right-0 bottom-0 left-0 z-20 bg-white px-5 pt-6 pb-5"
    : "px-5 py-5";

  if (listening) {
    return (
      <div className={wrapper}>
        <div className="flex items-center gap-2 rounded-[32px] border border-black/10 bg-white px-1.5 py-3 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.25)]">
          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500">
            <Plus className="h-[30px] w-[30px]" />
          </button>
          <VoiceWaveform />
          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500">
            <Mic className="h-[30px] w-[30px]" />
          </button>
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
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
