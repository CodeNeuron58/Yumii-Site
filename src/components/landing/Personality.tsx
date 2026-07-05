import type { CSSProperties } from "react";
import { personalities } from "./data/personalities";

export function Personality() {
  return (
    <section className="section" data-purpose="personality-section">
      <hr className="sec-rule" />
      <p className="sec-eyebrow">Six moods</p>
      <div className="sec-head-row">
        <h2 className="sec-title">
          One companion, <em>many colours</em>.
        </h2>
      </div>
      <p className="sec-lede">
        Warm and nurturing today, sharp and teasing tomorrow. Switch her
        personality mid-conversation — she takes on a whole new tone.
      </p>

      <div className="personality-row">
        {personalities.map(({ name, mood, tint }) => (
          <div key={name} className="personality-item">
            <div
              className="p-orb"
              style={{ "--p-tint": tint } as CSSProperties}
              aria-hidden="true"
            />
            <div className="p-name">{name}</div>
            <div className="p-mood">{mood}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
