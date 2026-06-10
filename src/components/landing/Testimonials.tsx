const testimonials = [
  {
    quote: "Changed how I work in the terminal. It's like pair programming with an AI.",
    handle: "@_developerjase",
    avatar: "👨‍💻",
  },
  {
    quote: "The voice interaction feels incredibly natural. It just gets what I need.",
    handle: "@sarah_codes",
    avatar: "👩‍💻",
  },
  {
    quote: "Finally, an AI assistant that respects my workflow and stays out of my way.",
    handle: "@terminal_tinker",
    avatar: "🧑‍💻",
  },
];

export function Testimonials() {
  return (
    <section className="section" data-purpose="testimonials-section">
      <div className="section-header">
        <div className="section-title">
          <span className="emoji">🌿</span> Loved by Developers
        </div>
        <a href="#" className="section-link">
          View all →
        </a>
      </div>
      <div className="testimonials-grid">
        {testimonials.map(({ quote, handle, avatar }) => (
          <div key={handle} className="testimonial-card">
            <div className="testi-text">&ldquo;{quote}&rdquo;</div>
            <div className="testi-author">
              <div className="testi-avatar" aria-hidden="true">
                {avatar}
              </div>
              <div className="testi-handle">{handle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
