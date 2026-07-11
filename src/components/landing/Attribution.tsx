import Image from "next/image";
import { GithubLogoIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

/**
 * The closing invitation, bookending the page with her portrait: the
 * real orb asset, large, glowing in the dark.
 */
export function Attribution() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-24 text-center md:px-8 lg:py-36">
      <Reveal>
        <div className="relative mx-auto mb-10 h-36 w-36">
          <div
            className="absolute inset-0 -z-10 scale-[2.2] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(46,230,170,0.5), rgba(35,200,225,0.25), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <Image
            src="/orb-logo-src.png"
            alt=""
            width={144}
            height={144}
            className="h-36 w-36"
          />
        </div>

        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          The orb is her <em className="italic text-mint">first form</em>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">
          An animated companion who blinks, emotes, and lip-syncs as she
          speaks is on the way. Yumii is open source and shaped in the open;
          the next feature might be yours.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/CodeNeuron58/Yumii"
            className="btn-primary"
            target="_blank"
            rel="noreferrer noopener"
          >
            <StarIcon size={17} aria-hidden="true" />
            Star on GitHub
          </a>
          <a
            href="https://github.com/CodeNeuron58/Yumii/blob/master/ROADMAP.md"
            className="btn-ghost"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubLogoIcon size={17} aria-hidden="true" />
            Read the roadmap
          </a>
        </div>
      </Reveal>
    </section>
  );
}
