import React from "react";
import "../css/Closing.css";

const visionUrl = "https://pyplym-ai-edition.netlify.app";

export default function Closing() {
  return (
    <section className="closing-section">
      <div className="page-width closing-inner">
        <div className="closing-copy">
        <p className="section-label">EnReal · Plymouth</p>
        <h2>Human potential<br /><em>meets AI capability.</em></h2>
        <a className="button button-light" href={visionUrl} target="_blank" rel="noopener noreferrer">
          See the vision <span aria-hidden="true">↗</span>
        </a>
        <p className="closing-note">PyPlym AI Edition · Free, monthly, from January 2027</p>
        </div>
        <div className="closing-art" aria-hidden="true">
          <svg viewBox="0 0 540 490" fill="none">
            <defs>
              <linearGradient id="closing-horizon" x1="270" y1="50" x2="270" y2="390" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3d6270" /><stop offset="1" stopColor="#b9b8a1" />
              </linearGradient>
              <clipPath id="closing-round"><circle cx="270" cy="236" r="200" /></clipPath>
            </defs>
            <g clipPath="url(#closing-round)">
              <circle cx="270" cy="236" r="200" fill="url(#closing-horizon)" />
              <circle cx="163" cy="188" r="39" fill="#edd1a0" />
              <path d="M60 287Q151 244 246 280T475 263V438H60Z" fill="#7f9690" />
              <path d="M60 315Q164 286 263 312T480 296V438H60Z" fill="#466e7a" />
              <g className="closing-water" stroke="#b1c6bf" strokeOpacity=".45" strokeWidth="1.5" strokeLinecap="round">
                <path d="M105 332H156M333 324H390M276 346H316M393 355H431" />
              </g>
              <g className="closing-stars" fill="#ebddbe">
                <circle cx="163" cy="101" r="1.7" /><circle cx="324" cy="84" r="1.5" /><circle cx="416" cy="208" r="1.5" />
              </g>
            </g>
            <path d="M77 166A214 214 0 0 1 464 148M472 328A214 214 0 0 1 387 416" stroke="#aabfb9" strokeOpacity=".6" />
            <ellipse cx="271" cy="459" rx="220" ry="18" fill="#a4ada0" fillOpacity=".25" />
            <g className="closing-possibility">
              <path d="M270 132L332 166L270 202L208 166Z" fill="#b6d6ce" />
              <path d="M208 166L270 202V264L208 228Z" fill="#4f8596" />
              <path d="M270 202L332 166V228L270 264Z" fill="#79adba" />
              <path d="M270 132V202L332 228M208 228L270 202" stroke="#d5e4d6" strokeOpacity=".35" />
              <circle cx="270" cy="113" r="5" fill="#efd1a0" />
              <g className="closing-sparks" stroke="#e6c492" strokeWidth="1.5" strokeLinecap="round">
                <path d="M186 200H198M192 194V206M348 139H362M355 132V146" />
              </g>
            </g>
            <g className="closing-orbit" stroke="#bbd5cd" strokeOpacity=".3">
              <ellipse cx="270" cy="200" rx="103" ry="26" transform="rotate(-22 270 200)" strokeDasharray="2 7" />
              <circle cx="175" cy="235" r="3" fill="#e9c995" stroke="none" />
              <circle cx="365" cy="165" r="3" fill="#c3ded8" stroke="none" />
            </g>
            <path className="closing-connection" d="M228 321Q199 288 233 270M312 321Q341 288 307 270" stroke="#d9c19b" strokeWidth="1.5" strokeDasharray="3 6" />
            <path d="M92 336V407M448 336V407" stroke="#8b9b90" strokeWidth="15" strokeLinecap="round" />
            <path d="M112 382L109 414L164 428L172 454H192L186 409L149 391Z" fill="#263f49" />
            <path d="M388 382L426 383L430 411Q429 419 417 421L378 428L370 454H349L356 412L390 400Z" fill="#263f49" />
            <path d="M170 451H192L202 460H168ZM348 451H369L372 460H337Z" fill="#1b343e" />
            <path d="M119 284Q93 308 107 383L151 400L171 381L162 307Z" fill="#bc9770" />
            <path d="M131 301L161 336L211 344L208 358L150 350L116 321Z" fill="#d0ae83" />
            <path d="M210 344L231 346L234 358H208Z" fill="#d4a180" />
            <path d="M128 263L122 289L150 303L154 269Z" fill="#b88167" />
            <path d="M122 230L158 237L156 267L143 282L123 267Z" fill="#d4a180" />
            <path d="M121 266Q101 244 116 224Q130 208 151 222Q165 228 161 246L138 237L131 268Z" fill="#233c43" />
            <circle cx="115" cy="225" r="14" fill="#233c43" />
            <path d="M385 286Q399 285 413 294Q428 305 431 331L429 383Q410 396 383 391L374 365L376 315Q377 298 385 286Z" fill="#386274" />
            <path d="M395 307Q400 302 406 309L416 320Q419 325 413 332L389 354Q386 358 378 358L329 360L327 345L376 339Z" fill="#537e8b" />
            <path d="M328 345L312 346Q306 346 305 352L304 359L330 360Z" fill="#b88468" />
            <path d="M385 264L385 292L413 302L411 267Z" fill="#9e6e57" />
            <path d="M382 234L416 232L418 261L402 282L384 268Z" fill="#bd8b6d" />
            <path d="M379 249Q373 218 398 216Q427 212 424 247L411 252L406 235L384 241Z" fill="#253d43" />
            <path d="M159 367L377 367L401 390H137Z" fill="#c9a77c" />
            <path d="M137 390H401V399H137Z" fill="#a78a64" />
            <path d="M161 399L153 459M378 399L386 459" stroke="#56717a" strokeWidth="7" />
            <path d="M239 365L229 316H291L302 365Z" fill="#819d9e" stroke="#b2c7be" strokeWidth="2" strokeLinejoin="round" />
            <path d="M236 322H286L293 358H244Z" fill="#2d515f" />
            <path d="M229 366H308L296 373H219Z" fill="#adc2b9" />
            <path d="M174 375L195 370L215 376L194 381Z" fill="#eee0c1" />
            <path d="M338 356H353V375Q346 381 340 375Z" fill="#e6d7b9" />
            <path d="M353 360Q366 358 361 368Q359 371 353 370" stroke="#e6d7b9" strokeWidth="3" />
            <g className="closing-steam" stroke="#e6d7b9" strokeOpacity=".6" strokeLinecap="round">
              <path d="M345 347Q340 340 346 335" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
