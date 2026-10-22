import React from "react";
import "../css/Intro.css";

export default function Intro() {
  return (
    <section className="intro-section section-pad" aria-labelledby="why-title">
      <div className="page-width intro-grid">
        <div className="intro-content">
          <p className="section-label">A different starting point</p>
          <h2 id="why-title">Not another room<br />full of tool demos.</h2>

          <div className="intro-copy">
          <p className="large-copy">
            AI is changing how we learn, work and make decisions. The important
            question isn’t only what the tools can do—it’s <em>how we use them well.</em>
          </p>
          <p>
            PyPlym starts with people: how we learn, delegate, remember and judge.
            Then we look closely at the technology, including what it gets wrong,
            and put both perspectives to work on a real task.
          </p>
          </div>
        </div>
          <div className="intro-art" aria-hidden="true">
            <svg viewBox="0 0 480 340" fill="none">
              <defs>
                <linearGradient id="intro-sky" x1="240" y1="25" x2="240" y2="285" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#527381" /><stop offset="1" stopColor="#d5c9ab" />
                </linearGradient>
                <clipPath id="intro-landscape">
                  <path d="M48 286V166a166 166 0 0 1 332 0v120Z" />
                </clipPath>
              </defs>
              <g clipPath="url(#intro-landscape)">
                <path d="M48 0H380V286H48Z" fill="url(#intro-sky)" />
                <circle cx="125" cy="136" r="30" fill="#f2d6a2" />
                <path d="M48 199Q102 178 164 199T290 195T380 183V286H48Z" fill="#8b9f98" />
                <path d="M48 221Q130 204 208 220T380 210V286H48Z" fill="#608591" />
                <g className="intro-tide" stroke="#bed0c8" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M76 238H115M144 252H187M263 234H304M322 256H359" />
                </g>
                <path d="M317 202L322 162H332L337 202Z" fill="#e6ddc4" />
                <path d="M320 178H334L335 185H319Z" fill="#b27c62" />
                <path d="M319 161H335L327 152Z" fill="#294b5b" />
                <path d="M325 166H329V172H325Z" fill="#edc888" />
                <path d="M48 274Q137 244 212 270T380 263V286H48Z" fill="#b9b49c" />
                <g className="intro-constellation" stroke="#e9dfc7" strokeWidth="1.2">
                  <path d="M209 107L248 71L288 101L277 142L237 153L209 107L277 142M248 71L237 153" strokeOpacity=".65" />
                  <g fill="#f4e6c8" stroke="none">
                    <circle cx="209" cy="107" r="3" /><circle cx="248" cy="71" r="4" />
                    <circle cx="288" cy="101" r="3" /><circle cx="277" cy="142" r="3" />
                    <circle cx="237" cy="153" r="3" />
                  </g>
                </g>
                <g className="intro-travelling-light">
                  <circle r="7" fill="#f4dfb3" fillOpacity=".18" />
                  <circle r="2.5" fill="#fff0cc" />
                </g>
                <path d="M148 102Q154 96 160 102M163 105Q168 100 173 105" stroke="#55737b" strokeWidth="1.5" strokeLinecap="round" />
              </g>
              <path d="M36 273V166a178 178 0 0 1 356 0v107" stroke="#8caaa9" strokeWidth="1" />
              <ellipse cx="242" cy="317" rx="197" ry="13" fill="#9baba6" fillOpacity=".25" />
              <path d="M128 275L270 270L301 290L151 296Z" fill="#c5a378" />
              <path d="M151 296L301 290V297L151 303L128 282V275Z" fill="#a78a67" />
              <path d="M153 303L148 319M281 299L286 319" stroke="#44616a" strokeWidth="5" />
              <path d="M171 249L175 280L211 289L221 315H238L232 277L202 258Z" fill="#294752" />
              <path d="M173 202Q157 223 166 263L204 275L218 255L207 218Z" fill="#365e70" />
              <path d="M185 219L207 244L237 249L234 260L199 255L177 234Z" fill="#527c89" />
              <path d="M235 249L251 251L252 259L234 260Z" fill="#d3a17f" />
              <path d="M178 188L173 208L195 218L198 192Z" fill="#bb886d" />
              <path d="M173 165L203 170L201 193L189 203L174 192Z" fill="#d4a585" />
              <path d="M171 191Q157 179 167 161Q178 148 196 158Q208 162 205 177L182 170L179 190Z" fill="#263f45" />
              <path d="M220 312H238L247 319H219Z" fill="#213b44" />
              <path d="M227 265L245 261L259 265L278 261L268 275L248 279L234 275Z" fill="#f0e2c5" />
              <path d="M245 264L248 276M252 267L267 264M253 271L264 268" stroke="#b7a885" strokeWidth="1" />
              <path className="intro-thought" d="M218 211Q255 202 252 177" stroke="#e2bf85" strokeWidth="1.5" strokeDasharray="3 5" />
              <g stroke="#bc9a65" strokeWidth="1.5" strokeLinecap="round">
                <path d="M412 140V154M405 147H419M59 76V86M54 81H64" />
              </g>
            </svg>
          </div>
      </div>
    </section>
  );
}
