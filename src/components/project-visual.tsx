type ProjectVisualProps = {
  variant: "wizard" | "spell" | "resqu";
  compact?: boolean;
};

export function ProjectVisual({ variant, compact = false }: ProjectVisualProps) {
  const height = compact ? 220 : 320;
  const frameClass = compact ? "min-h-[220px]" : "min-h-[250px] lg:min-h-[300px]";

  return (
    <div className={`project-visual ${frameClass}`} aria-hidden="true">
      <svg viewBox={`0 0 680 ${height}`} className="h-full w-full" fill="none">
        <defs>
          <linearGradient id={`${variant}-line`} x1="0" y1="0" x2="680" y2={height.toString()}>
            <stop offset="0%" stopColor="var(--accent-soft)" />
            <stop offset="50%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--line-strong)" />
          </linearGradient>
          <radialGradient id={`${variant}-halo`} cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="color-mix(in srgb, var(--accent) 18%, transparent)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect x="12" y="12" width="656" height={height - 24} rx="28" className="fill-transparent stroke-[color:var(--line)]" />
        <ellipse cx="340" cy={height / 2} rx="240" ry={compact ? 100 : 132} fill={`url(#${variant}-halo)`} />
        {variant === "wizard" ? (
          <>
            <path d={`M58 ${height - 70} C 180 ${height - 170}, 230 90, 340 110 S 520 ${height - 40}, 622 82`} stroke={`url(#${variant}-line)`} strokeWidth="1.5" strokeDasharray="4 10" />
            <path d={`M92 58 C 188 ${height - 40}, 302 ${height - 18}, 578 ${height - 96}`} stroke="var(--ink)" strokeOpacity="0.14" strokeWidth="1.2" />
            {[92, 178, 264, 350, 474, 566].map((x, index) => (
              <g key={x} transform={`translate(${x} ${index % 2 === 0 ? 76 : height - 88})`}>
                <circle r={index % 3 === 0 ? 18 : 12} fill="color-mix(in srgb, var(--surface) 84%, transparent)" stroke="var(--line-strong)" />
                <circle r="3.5" fill="var(--accent)" />
              </g>
            ))}
            <rect x="276" y={height / 2 - 24} width="126" height="48" rx="24" fill="color-mix(in srgb, var(--surface) 80%, transparent)" stroke="var(--line-strong)" />
            <text x="339" y={height / 2 + 5} textAnchor="middle" className="fill-[color:var(--ink)] text-[11px] tracking-[0.28em]" style={{ letterSpacing: "0.28em" }}>
              ADAPTER
            </text>
          </>
        ) : variant === "spell" ? (
          <>
            <path
              d={`M112 92 H 228 C 256 92, 270 106, 270 126 V ${height / 2 - 18} C 270 ${height / 2 + 2}, 286 ${height / 2 + 16}, 308 ${height / 2 + 16} H 560`}
              stroke={`url(#${variant}-line)`}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d={`M112 ${height - 92} H 228 C 256 ${height - 92}, 270 ${height - 108}, 270 ${height - 128} V ${height / 2 + 18} C 270 ${height / 2 - 2}, 286 ${height / 2 - 16}, 308 ${height / 2 - 16} H 560`}
              stroke="var(--ink)"
              strokeOpacity="0.2"
              strokeWidth="1.4"
              strokeDasharray="5 8"
              strokeLinecap="round"
            />
            <rect
              x="86"
              y="64"
              width="128"
              height="54"
              rx="18"
              fill="color-mix(in srgb, var(--surface) 92%, transparent)"
              stroke="var(--line-strong)"
            />
            <rect
              x="86"
              y={height - 118}
              width="128"
              height="54"
              rx="18"
              fill="color-mix(in srgb, var(--surface) 92%, transparent)"
              stroke="var(--line-strong)"
            />
            <rect
              x="258"
              y={height / 2 - 42}
              width="106"
              height="84"
              rx="24"
              fill="color-mix(in srgb, var(--surface) 86%, transparent)"
              stroke="var(--line-strong)"
            />
            {[0, 1, 2].map((row) => (
              <path
                key={row}
                d={`M286 ${height / 2 - 18 + row * 16} H 336`}
                stroke="var(--ink)"
                strokeOpacity={0.28 + row * 0.1}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            ))}
            {[
              [392, height / 2, 1],
              [466, height / 2, 0.84],
              [540, height / 2, 0.68],
            ].map(([x, y, opacity], index) => (
              <g key={index} opacity={opacity}>
                <rect
                  x={x}
                  y={y - 28}
                  width="56"
                  height="56"
                  rx="16"
                  fill="color-mix(in srgb, var(--surface) 94%, transparent)"
                  stroke="var(--line-strong)"
                />
                <circle cx={x + 28} cy={y} r={index === 0 ? 6 : 4.5} fill={index === 0 ? "var(--accent-strong)" : "var(--accent)"} />
              </g>
            ))}
            <path
              d={`M596 ${height / 2} C 618 ${height / 2}, 624 ${height / 2 - 8}, 624 ${height / 2 - 24} V ${height / 2 - 54}`}
              stroke={`url(#${variant}-line)`}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <rect
              x="560"
              y={height / 2 - 90}
              width="86"
              height="44"
              rx="16"
              fill="color-mix(in srgb, var(--surface) 92%, transparent)"
              stroke="var(--line-strong)"
            />
            <text x="150" y="95" textAnchor="middle" className="fill-[color:var(--ink)] text-[10px]" style={{ letterSpacing: "0.2em" }}>
              INSTRUCTION
            </text>
            <text x="150" y={height - 87} textAnchor="middle" className="fill-[color:var(--ink)] text-[10px]" style={{ letterSpacing: "0.16em" }}>
              DEMO
            </text>
            <text x="311" y={height / 2 + 56} textAnchor="middle" className="fill-[color:var(--ink)] text-[10px]" style={{ letterSpacing: "0.22em" }}>
              META-NET
            </text>
            <text x="602" y={height / 2 - 62} textAnchor="middle" className="fill-[color:var(--ink)] text-[9px]" style={{ letterSpacing: "0.18em" }}>
              POLICY
            </text>
          </>
        ) : (
          <>
            {Array.from({ length: 9 }, (_, index) => (
              <rect
                key={index}
                x={80 + index * 56}
                y={72 + (index % 3) * 30}
                width="34"
                height={height - 144 - (index % 4) * 18}
                rx="10"
                fill="color-mix(in srgb, var(--surface) 90%, transparent)"
                stroke="var(--line-strong)"
              />
            ))}
            <path d={`M64 ${height - 92} C 194 ${height - 162}, 258 86, 402 132 S 560 ${height - 76}, 628 70`} stroke={`url(#${variant}-line)`} strokeWidth="1.6" strokeDasharray="3 10" />
          </>
        )}
      </svg>
    </div>
  );
}
