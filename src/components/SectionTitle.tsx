export default function SectionTitle({
  children,
  action,
}: {
  children: string;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-between px-5 pt-5 pb-2">
      <h2 className="text-[16px] font-bold text-ink-900">{children}</h2>
      {action && (
        <span className="text-[13px] font-semibold text-coral-600">{action}</span>
      )}
    </div>
  );
}
