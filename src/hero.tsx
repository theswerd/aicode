import NpxButton from "./npx-button";
import CursorButton from "./cursor-button";

export default function Hero() {
  return (
    <section className="sticky top-0">
      <div className="mx-auto max-w-3xl px-3 py-3 sm:px-6 sm:py-5">
        <p className="mb-6 text-xl">Be intentional about how AI changes your codebase.</p>
        <p className="mb-4">
          As AI Coding Agents write more code, it's more important than ever that we're
          intentional about the code it writes.
        </p>
        <blockquote
          className="mb-6 rounded-r border-l-2 border-stone-400 py-2 pl-3 pr-3 sm:mb-10 sm:py-3 sm:pl-4 sm:pr-4"
          style={{ backgroundColor: "rgb(243, 242, 238)" }}
        >
          <p className="italic">
            "The only thing that sloppifies a codebase faster than 1 coding agent is a swarm of
            them"
          </p>
          <footer className="mt-2 text-sm">— me, 2026</footer>
        </blockquote>
        <p className="mb-8">
          This document serves as a manifesto and guide for all humans working with AI Coding
          agents on how the code AI writes should look. It's also available as a skill you can
          give your AI Agents.
        </p>
        <div className="flex gap-3">
          <NpxButton />
          <CursorButton />
        </div>
      </div>
    </section>
  );
}
