// An original flat illustration of a shopper, drawn with or without an accessory.
// Used by the hero demo: "before" on the left, "after" on the right.
export default function Portrait({ wear = null, tone = 'a', title }) {
  const skin = tone === 'a' ? '#d99a74' : '#b97a55';
  const skinShade = tone === 'a' ? '#c4835f' : '#a3684a';
  const hair = '#2a1d1b';
  const top = '#2f3a62';
  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={title} className="portrait">
      <rect width="300" height="400" fill="#ebe7f5" />
      <circle cx="232" cy="86" r="70" fill="#e2dcf2" />
      <circle cx="58" cy="318" r="52" fill="#e5e0f3" />
      {/* hair, back */}
      <path d="M72 205 C60 120 98 72 150 72 C204 72 242 118 228 205 C226 236 214 254 198 262 L102 262 C86 254 74 236 72 205 Z" fill={hair} />
      {/* shoulders and top */}
      <path d="M28 400 C34 344 70 316 118 306 L182 306 C230 316 266 344 272 400 Z" fill={top} />
      <path d="M118 306 C128 322 172 322 182 306" fill="none" stroke="#26304f" strokeWidth="3" />
      {/* neck */}
      <path d="M127 236 L127 300 C138 314 162 314 173 300 L173 236 Z" fill={skinShade} />
      {/* ears */}
      <ellipse cx="90" cy="182" rx="11" ry="17" fill={skinShade} />
      <ellipse cx="210" cy="182" rx="11" ry="17" fill={skinShade} />
      {/* face */}
      <ellipse cx="150" cy="172" rx="60" ry="76" fill={skin} />
      {/* fringe */}
      <path d="M90 158 C92 108 118 92 152 92 C188 92 212 112 212 152 C196 128 172 120 150 124 C126 128 104 138 90 158 Z" fill={hair} />
      {/* brows, eyes, nose, mouth */}
      <path d="M116 152 C124 146 136 146 142 151" fill="none" stroke={hair} strokeWidth="4" strokeLinecap="round" />
      <path d="M158 151 C164 146 176 146 184 152" fill="none" stroke={hair} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="129" cy="170" rx="6.5" ry="5" fill="#1d1416" />
      <ellipse cx="171" cy="170" rx="6.5" ry="5" fill="#1d1416" />
      <path d="M150 178 C147 192 145 198 152 200" fill="none" stroke={skinShade} strokeWidth="3" strokeLinecap="round" />
      <path d="M134 216 C142 224 158 224 166 216" fill="none" stroke="#8a3b3b" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="116" cy="196" rx="11" ry="6" fill="#e58e7a" opacity=".35" />
      <ellipse cx="184" cy="196" rx="11" ry="6" fill="#e58e7a" opacity=".35" />

      {wear === 'earrings' && (
        <g className="wear">
          {[90, 210].map((x) => (
            <g key={x}>
              <circle cx={x} cy="196" r="3.5" fill="#f3cf6e" />
              <circle cx={x} cy="218" r="17" fill="none" stroke="#a87d1d" strokeWidth="7.5" />
              <circle cx={x} cy="218" r="17" fill="none" stroke="#e8bb4f" strokeWidth="5" />
              <path d={`M${x - 13} 208 A17 17 0 0 1 ${x - 2} 201.5`} fill="none" stroke="#fff6cf" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          ))}
        </g>
      )}
      {wear === 'hat' && (
        <g className="wear">
          <path d="M84 150 C80 84 116 56 150 56 C186 56 222 84 216 150 Z" fill="#c8553d" />
          {[106, 128, 150, 172, 194].map((x) => <path key={x} d={`M${x} 74 L${x} 148`} stroke="#b4462f" strokeWidth="5" strokeLinecap="round" />)}
          <rect x="78" y="132" width="144" height="30" rx="12" fill="#dd6a52" />
          {[92, 108, 124, 140, 156, 172, 188, 204].map((x) => <path key={x} d={`M${x} 138 L${x} 156`} stroke="#c8553d" strokeWidth="4" strokeLinecap="round" />)}
          <circle cx="150" cy="50" r="17" fill="#f2efe9" />
        </g>
      )}
      {wear === 'glasses' && (
        <g className="wear" fill="none" stroke="#1f1b2e" strokeWidth="5">
          <circle cx="127" cy="170" r="20" fill="#bfe3ff" fillOpacity=".28" />
          <circle cx="173" cy="170" r="20" fill="#bfe3ff" fillOpacity=".28" />
          <path d="M147 168 C150 163 150 163 153 168" />
          <path d="M107 166 L92 162" /><path d="M193 166 L208 162" />
          <path d="M116 158 L124 154" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {wear === 'necklace' && (
        <g className="wear">
          <path d="M122 290 C130 330 170 330 178 290" fill="none" stroke="#e2b34a" strokeWidth="3.5" />
          <path d="M150 322 L162 336 L150 352 L138 336 Z" fill="#7cc3ff" stroke="#e2b34a" strokeWidth="3" />
          <circle cx="146" cy="332" r="2.5" fill="#fff" />
        </g>
      )}
    </svg>
  );
}
