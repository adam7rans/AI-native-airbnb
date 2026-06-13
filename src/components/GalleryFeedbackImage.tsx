interface Props {
  src: string;
  alt: string;
  /** show hand-drawn coral lasso circle overlay */
  circled?: boolean;
  note?: string;
  className?: string;
}

/** Image tile with an optional hand-drawn coral "circle to select" overlay. */
export default function GalleryFeedbackImage({
  src,
  alt,
  circled = false,
  note,
  className = "",
}: Props) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {circled && (
        <>
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <ellipse
              cx="50"
              cy="50"
              rx="42"
              ry="38"
              fill="none"
              stroke="#FF385C"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeDasharray="0.5 4"
              transform="rotate(-6 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="44"
              ry="40"
              fill="none"
              stroke="#FF385C"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.55"
              transform="rotate(4 50 50)"
            />
          </svg>
          {note && (
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-coral-500 px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-white shadow">
              {note}
            </span>
          )}
        </>
      )}
    </div>
  );
}
