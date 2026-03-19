import CursorLogo from "./cursor";
import { getDocumentText } from "./document";

export default function CursorButton() {
  return (
    <a
      href={`https://cursor.com/link/rule?name=self-documenting-code&text=${encodeURIComponent(getDocumentText())}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded px-3 py-1.5 text-xs transition-colors hover:brightness-95 sm:px-4 sm:py-2 sm:text-sm"
      style={{ backgroundColor: "rgb(235, 234, 229)" }}
    >
      <CursorLogo />
      Add to Cursor
    </a>
  );
}
