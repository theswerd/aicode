import { useState } from "react";

export default function NpxButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx skills add theswerd/aicode");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
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
  );
}
