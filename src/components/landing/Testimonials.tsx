import Image from "next/image";
import { ArrowLongRightIcon, ArrowRightIcon } from "./icons";

const testimonials = [
  {
    quote: "Changed how I work in the terminal. It's like pair programming with an AI.",
    handle: "@_developerjase",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrtdb1lCIvgelXKQ42SVRypWaJ8KbaQF_8BLpEYMZxP3h_MKfz_NJBR7n9LDn-9fmRiqUdYw_XWH3qwXfRWpFB0ImnL_xgU1i_UCKctteJz_fL5UwnxMqd6QrNtMZcdgGBfzulfRpHE26OpN1SzQvsoiweE1I0esR9GrARBeIAAJ4zA9Os5kEQ4qtFbkjxWhnN8-mrrwca6QLj0g-H2fIrvFWBybfLaWKwnmpuNpWz-i3BOR5EnIeFOHTxb7AqL6lwl_ruKTFwVkS-",
  },
  {
    quote: "The voice interaction feels incredibly natural. It just gets what I need.",
    handle: "@sarah_codes",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvieBxfNthZETq7LXqIMAYd0mFTH36p7N_17b_BUVQhpnv15k3Zaei5r9GX_bp1FpWdTbUYmv-v9TLKlDsUgmQahvuHKcAMy84ZNxQPLUcyz_sFAMz_0FjkS8mrUqBKJP-ILTxeNRFdZ12bGPXYkpK5iyyL4qWcwPJn4TMdqcZqgTYEHNx6YqMvfMZZ411HsQBlHPKwSkJujOX2r8Dp8Em1j2ei4xrKcjDNL2ZN6_A21k3qyzS5tE42WoqyndLxM6RdKAj9k8JHN4J",
  },
  {
    quote: "Finally, an AI assistant that respects my workflow and stays out of my way.",
    handle: "@terminal_tinker",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ9Wod3YfJcnbu0wrnJCIkTvMc1uqTaovdtIhwGxTdrLXMR0V_CsA7aaFfOZXYhb_fkguZDdmqQaIL5rRgPR8SLFNVM99ef_bb4cD4pCQKMRqYWeDAQnjM_U4WIhDH0pPaMJBWKf1233nQ_yUm1Mlvp2i9UTX6c0riDKEkvELZXY9JTI7LWb27SE9rJDbFBjBQpH9St6Eid1Svt8QXAisCElfQR7rWRQah_yLITaqC6Y4dQPe6BwgaEuQLrbqy4vs-Hh3ADCwUXMQn",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials-section w-full" data-purpose="testimonials-section">
      <div className="testimonials-header flex items-center justify-between mb-6">
        <h2 className="testimonials-title text-xl md:text-2xl font-bold flex items-center gap-2 font-display">
          <ArrowRightIcon className="w-5 h-5 text-primary" />
          Loved by Developers
        </h2>
        <a
          href="#"
          className="testimonials-link text-sm text-primary hover:underline flex items-center gap-1 font-medium"
        >
          View all
          <ArrowLongRightIcon className="w-4 h-4" />
        </a>
      </div>
      <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map(({ quote, handle, avatar }) => (
          <div
            key={handle}
            className="testimonial-card bg-surface-container/30 border border-outline-variant rounded-xl p-5 flex flex-col sm:flex-row gap-4 hover:bg-surface-container/50 transition-colors"
          >
            <div className="avatar-wrapper w-12 h-12 bg-surface-container-highest rounded-full overflow-hidden shrink-0 border border-outline-variant relative">
              <Image
                src={avatar}
                alt={handle}
                width={48}
                height={48}
                unoptimized
                className="avatar-image w-full h-full object-cover"
              />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-quote text-on-surface-variant text-sm italic mb-2">&ldquo;{quote}&rdquo;</p>
              <span className="testimonial-handle text-primary text-xs font-medium">{handle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
