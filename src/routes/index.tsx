import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import CursorLogo from "../cursor";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx skills add theswerd/aicode");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <>
      {/* Fixed hero — stays in place behind everything */}
      <section className="sticky top-0">
        <div className="mx-auto max-w-3xl px-3 py-6 sm:px-6 sm:py-10">
          <p className="mb-6 text-xl">Be intentional about how AI changes your codebase.</p>
          <p className="mb-8">
            As AI Coding Agents write more code, it's more important than ever that we're intentional
            about the code it writes.
          </p>
          <blockquote className="mb-6 rounded-r border-l-2 border-stone-400 py-2 pl-3 pr-3 sm:mb-10 sm:py-3 sm:pl-4 sm:pr-4" style={{ backgroundColor: "rgb(243, 242, 238)" }}>
            <p className="italic">"The only thing that sloppifies a codebase faster than 1 coding agent is a swarm of them"</p>
            <footer className="mt-2 text-sm">— me, 2026</footer>
          </blockquote>
          <p className="mb-8">
            This document serves as a manifesto and guide for all humans working with AI Coding agents
            on how the code AI writes should look. It's also available as a skill you can give your AI
            Agents.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="relative cursor-pointer truncate rounded px-2 py-1.5 text-xs transition-colors hover:brightness-95 sm:px-3 sm:py-2 sm:text-sm"
              style={{ backgroundColor: "rgb(235, 234, 229)" }}
            >
              <code className="select-all" style={{ visibility: copied ? "hidden" : "visible" }}>
                npx skills add theswerd/aicode
              </code>
              {copied && (
                <span className="absolute inset-0 flex items-center justify-center">Copied!</span>
              )}
            </button>
            <button
              type="button"
              className="flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded px-3 py-1.5 text-xs transition-colors hover:brightness-95 sm:px-4 sm:py-2 sm:text-sm"
              style={{ backgroundColor: "rgb(235, 234, 229)" }}
            >
              <CursorLogo />
              Add to Cursor
            </button>
          </div>
        </div>
      </section>

      {/* Document — scrolls up over the hero */}
      <section className="relative z-10 px-3 sm:px-6">
        <div className="mx-auto max-w-4xl border border-stone-200 bg-white shadow-lg">
          <div className="mx-auto max-w-3xl wrap-break-word px-3 pb-14 pt-4 sm:px-6 sm:pt-8">
          <p className="mb-6"><strong>Code should be self documenting.</strong></p>
          <p className="mb-6">How you split logic into functions and shape the data they pass around determines how well a codebase holds up over time.</p>
          <p className="mb-3 font-bold">Semantic Functions</p>
          <p className="mb-6">Semantic functions are the building blocks of any codebase, a good semantic function should be <em>as minimal as possible</em> in order to <em>prioritize correctness</em> in it. A semantic function should take in all required inputs to complete its goal and return all necessary outputs directly. Semantic functions can wrap other semantic functions to describe desired flows and usage; as the building blocks of the codebase, if there are complex flows used everywhere that are well defined, use a semantic function to codify them.</p>
          <p className="mb-6">Side effects are generally undesirable in semantic functions unless they are the explicit goal because semantic functions should be safe to re-use without understanding their internals for what they say they do. If logic is complicated and it{"'"}s not clear what it does in a large flow, a good pattern is to break that flow up into a series of self describing semantic functions that take in what they need, return the data necessary for the next step, and don{"'"}t do anything else. Examples of good semantic functions range from <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">quadratic_formula()</code> to <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">retry_with_exponential_backoff_and_run_y_in_between{"<"}Y: func, X: Func{">"}{`(x: X, y: Y)`}</code>. Even if these functions are never used again, future humans and agents going over the code will appreciate the indexing of information.</p>
          <p className="mb-6">Semantic functions should not need any comments around them, the code itself should be a self describing definition of what it does. Semantic functions should ideally be extremely unit testable because a good semantic function is a well defined one.</p>
          <p className="mt-8 mb-3 font-bold">Pragmatic Functions</p>
          <p className="mb-6">Pragmatic functions should be used as wrappers around a series of semantic functions and unique logic. They are the complex processes of your codebase. When making production systems it{"'"}s natural for the logic to get messy, pragmatic functions are the organization for these. These should generally not be used in more than a few places, if they are, consider breaking down the explicit logic and moving it into semantic functions. For example <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">provision_new_workspace_for_github_repo(repo, user)</code> or <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">handle_user_signup_webhook()</code>. Testing pragmatic functions falls into the realm of integration testing, and is often done within the context of testing whole app functionality. Pragmatic functions are expected to change completely over time, from their insides to what they do. To help with that, it{"'"}s good to have doc comments above them. Avoid restating the function name or obvious traits about it, instead note unexpected things like {'"'}fails early on balance less than 10{'"'}, or combatting other misconceptions coming from the function name. As a reader of doc comments take them with a grain of salt, coders working inside the function may have forgotten to update them, and it{"'"}s good to fact check them when you think they might be incorrect.</p>
          <p className="mt-8 mb-3 font-bold">Models</p>
          <p className="mb-6">The shape of your data should make wrong states impossible. If a model allows a combination of fields that should never exist together in practice, the model isn{"'"}t doing its job. Every optional field is a question the rest of the codebase has to answer every time it touches that data, and every loosely typed field is an invitation for callers to pass something that looks right but isn{"'"}t. When models enforce correctness, bugs surface at the point of construction rather than deep inside some unrelated flow where the assumptions finally collapse. A model{"'"}s name should be precise enough that you can look at any field and know whether it belongs — if the name doesn{"'"}t tell you, the model is trying to be too many things. When two concepts are often needed together but are independent, compose them rather than merging them — e.g. <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">UserAndWorkspace {"{"} user: User, workspace: Workspace {"}"}</code> keeps both models intact instead of flattening workspace fields into the user. Good names like <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">UnverifiedEmail</code>, <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">PendingInvite</code>, and <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">BillingAddress</code> tell you exactly what fields belong. If you see a <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">phone_number</code> field on <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">BillingAddress</code>, you know something went wrong.</p>
          <p className="mb-6">Values with identical shapes can represent completely different domain concepts: <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">{"{"} id: {'"'}123{'"'} {"}"}</code> might be a <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">DocumentReference</code> in one place and a <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">MessagePointer</code> in another, and if your functions just accept <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">{"{"} id: String {"}"}</code>, the code will accept either one without complaint. Brand types solve this by wrapping a primitive in a distinct type so the compiler treats them as separate: <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">DocumentId(UUID)</code> instead of a bare <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">UUID</code>. With branding in place, accidentally swapping two IDs becomes a syntax error instead of a silent bug that surfaces three layers deep.</p>
          <p className="mt-8 mb-3 font-bold">Where Things Break</p>
          <p className="mb-6">Breaks commonly happen when a semantic function morphs into a pragmatic function for ease, and then other places in the codebase that rely on it end up doing things they didn{"'"}t intend. To solve this, be explicit when creating a function by naming it instead of by what it does, but by where it{"'"}s used. The nature of their names should make it clear to other programmers in their names that their behavior is not tightly defined and should not be relied on for the internals to do an exact task, and make debugging regressions from them easier.</p>
          <p className="mb-8">Models break the same way but slower. They start focused, then someone adds {'"'}just one more{'"'} optional field because it{"'"}s easier than creating a new model, and then someone else does the same, and eventually the model is a loose bag of half-related data where every consumer has to guess which fields are actually set and why. The name stops describing what the data is, the fields stop cohering around a single concept, and every new feature that touches the model has to navigate states it was never designed to represent. When a model{"'"}s fields no longer cohere around its name, that{"'"}s the signal to split it into the distinct things it{"'"}s been coupling together.</p>
          </div>
        </div>
      </section>

      {/* Closing + signature */}
      <section className="relative z-10 px-3 pb-16 pt-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-8 max-w-2xl text-stone-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p className="mb-3 text-lg font-semibold text-stone-900">Ben Swerdlow</p>
          <a href="https://x.com/benswerd" target="_blank" rel="noopener noreferrer" className="inline-block text-stone-400 transition-colors hover:text-stone-900">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
