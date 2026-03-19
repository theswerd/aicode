import { forwardRef, useState } from "react";
import CursorLogo from "./cursor";

const Footer = forwardRef<HTMLElement>(function Footer(_props, ref) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx skills add theswerd/aicode");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section ref={ref} className="sticky bottom-0 px-3 pb-10 pt-8 sm:px-6">
      <div className="mx-auto max-w-3xl px-3 sm:px-6">
        <div className="mb-5 flex gap-3">
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
        <p className="mb-5 max-w-2xl text-stone-600">
          I believe these patterns lead to scalable codebases, and scalable codebases lead to faster iteration cycles and better software. 
          <br/>
          <br/>
          Or maybe I'm out of date.
        </p>
        <div className="flex items-center">
          <div>
            <p className="text-lg font-semibold text-stone-900"><span className="text-stone-500">By </span>Ben Swerdlow</p>
            <p className="text-sm text-stone-500">A human coder who cares about good code</p>
          </div>
          <a
            href="https://x.com/benswerd"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-stone-400 transition-colors hover:text-stone-900"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Footer;
