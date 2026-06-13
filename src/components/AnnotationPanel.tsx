interface Props {
  frameNo: number;
  title: string;
  userAction: string;
  aiBehavior: string;
  whyMatters: string;
}

function Row({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <div className="text-[11px] font-bold tracking-wide text-coral-600 uppercase">
        {label}
      </div>
      <p className="mt-1 text-[14px] leading-relaxed text-ink-700">{children}</p>
    </div>
  );
}

export default function AnnotationPanel({
  frameNo,
  title,
  userAction,
  aiBehavior,
  whyMatters,
}: Props) {
  return (
    <div className="w-[340px] shrink-0 self-start p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.06] text-[13px] font-bold text-ink-700">
          {frameNo}
        </span>
        <span className="text-[12px] font-semibold tracking-wide text-ink-500 uppercase">
          Frame {frameNo}
        </span>
      </div>
      <h3 className="text-[20px] leading-tight font-extrabold tracking-tight text-ink-900">
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        <Row label="User action">{userAction}</Row>
        <Row label="AI behavior">{aiBehavior}</Row>
        <Row label="Why this matters">{whyMatters}</Row>
      </div>
      <div className="mt-5 border-t border-black/5 pt-4">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-coral-600"
        >
          Related PRD: [insert PRD link here]
        </a>
      </div>
    </div>
  );
}
