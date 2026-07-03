/**
 * The EngX X swoosh — the signature brand mark (red X ending in an upward
 * arrow), traced from the legacy site's embedded PNG into a single SVG path.
 * Fills with `currentColor` so it can render crimson on light surfaces,
 * cream/gold on dark, or as a faint watermark.
 */
export default function XMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 250 250"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M211 74L235 56L234 81L233 82L230 80L221 92L209 105L191 121L174 134L179 142L198 161L211 167L178 167L174 165L169 160L159 147L157 147L153 150L134 159L119 164L96 169L79 170L78 171L58 171L57 172L7 171L51 167L52 166L84 161L121 150L148 136L150 134L149 131L114 88L106 80L106 78L129 78L131 79L136 84L160 117L167 123L188 108L208 88L216 77L215 75L211 75L211 74Z" />
    </svg>
  );
}
