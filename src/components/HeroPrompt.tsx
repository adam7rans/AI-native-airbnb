import { Sparkle } from "./Icons";

interface Props {
  title: string;
  subtitle: string;
}

export default function HeroPrompt({ title, subtitle }: Props) {
  return (
    <div className="px-5 pt-4">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-coral-50 px-2.5 py-1 text-[11px] font-semibold text-coral-600">
        <Sparkle className="h-3.5 w-3.5" />
        Generated for you · {`April`}
      </div>
      <h1 className="mt-2.5 text-[26px] leading-tight font-extrabold tracking-tight text-ink-900">
        {title}
      </h1>
      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-500">{subtitle}</p>
    </div>
  );
}
