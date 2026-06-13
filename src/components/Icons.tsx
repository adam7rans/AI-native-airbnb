import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (props: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Sparkle = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
    <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
  </svg>
);
export const Mic = (p: P) => (
  <svg {...base(p)}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0M12 17v4" />
  </svg>
);
export const Waveform = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4" />
  </svg>
);
export const Keyboard = (p: P) => (
  <svg {...base(p)}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
  </svg>
);
export const Lasso = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 11c0-3.3 3.6-6 8-6s8 2.7 8 6-3.6 6-8 6c-1 0-2-.1-2.8-.4" />
    <path d="M6.5 16.5a1.8 1.8 0 1 0 0-.01" />
    <path d="M6.5 18.3c0 1.2.9 2.2 2 2.2" />
  </svg>
);
export const Search = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3-3" />
  </svg>
);
export const Heart = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.5-9.3-9C1.3 8.4 2.6 5.5 5.4 5c1.9-.3 3.6.8 4.6 2.3C11 5.8 12.7 4.7 14.6 5c2.8.5 4.1 3.4 2.7 6-2.3 4.5-9.3 9-9.3 9z" />
  </svg>
);
export const Star = (p: P) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6L12 16.9 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12l4.5 4.5L19 7" />
  </svg>
);
export const Wifi = (p: P) => (
  <svg {...base(p)}>
    <path d="M2 8.8a16 16 0 0 1 20 0M5 12.2a11 11 0 0 1 14 0M8 15.6a6 6 0 0 1 8 0" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
  </svg>
);
export const Desk = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="11" rx="1" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);
export const Quiet = (p: P) => (
  <svg {...base(p)}>
    <path d="M11 5 6 9H3v6h3l5 4V5z" />
    <path d="M16 9c1 1 1 5 0 6" />
  </svg>
);
export const Balcony = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 21V10l9-6 9 6v11" />
    <path d="M3 21h18M7 21v-6h10v6M12 4v17" />
  </svg>
);
export const Walk = (p: P) => (
  <svg {...base(p)}>
    <circle cx="13" cy="4" r="1.6" />
    <path d="M9 21l3-6-2-3 1-4 3 3 2 1M12 12l-1 4" />
  </svg>
);
export const MatchHeart = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.5-9.3-9C1.3 8.4 2.6 5.5 5.4 5c1.9-.3 3.6.8 4.6 2.3C11 5.8 12.7 4.7 14.6 5c2.8.5 4.1 3.4 2.7 6-2.3 4.5-9.3 9-9.3 9z" />
    <path d="M9.5 11.5 11 13l3-3.2" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base(p)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base(p)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
export const Edit = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
);
export const Plus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const ThumbUp = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3z" />
    <path d="M7 11l4-7a2 2 0 0 1 2.7-.8c.7.4 1 1.2.8 2L13.5 9H19a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 18 19H7" />
  </svg>
);
export const ThumbDown = (p: P) => (
  <svg {...base(p)}>
    <path d="M17 13V4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3z" />
    <path d="M17 13l-4 7a2 2 0 0 1-2.7.8c-.7-.4-1-1.2-.8-2L10.5 15H5a2 2 0 0 1-2-2.3l1-6A2 2 0 0 1 6 5h11" />
  </svg>
);

const ICONS = {
  wifi: Wifi,
  desk: Desk,
  quiet: Quiet,
  balcony: Balcony,
  walk: Walk,
  match: MatchHeart,
};
export const HighlightIcon = ({ name, ...p }: { name: string } & P) => {
  const C = ICONS[name as keyof typeof ICONS] ?? Check;
  return <C {...p} />;
};
