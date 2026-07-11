/**
 * Ambient night: a faint aurora bleeding from the top of the page and a
 * sparse field of twinkling stars. Positions come from a seeded PRNG so
 * server and client render identical markup (no hydration drift).
 */

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(58);
const STARS = Array.from({ length: 54 }, () => ({
  left: `${(rand() * 100).toFixed(2)}vw`,
  top: `${(rand() * 100).toFixed(2)}vh`,
  duration: `${(2.5 + rand() * 4).toFixed(2)}s`,
  delay: `${(rand() * 5).toFixed(2)}s`,
  size: rand() > 0.85 ? 2 : 1,
}));

export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* aurora wash, top of page */}
      <div
        className="absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(55% 55% at 30% 0%, rgba(46,230,160,0.09), transparent 70%), radial-gradient(50% 50% at 75% 5%, rgba(35,200,225,0.07), transparent 70%)",
        }}
      />
      {STARS.map((s, i) => (
        <span
          key={i}
          className="star-dot absolute rounded-full bg-aqua-pale opacity-0"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animation: `star-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
