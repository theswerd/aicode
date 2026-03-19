import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import Document from "../document";
import Footer from "../footer";
import Hero from "../hero";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const docRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const doc = docRef.current;
    const footer = footerRef.current;
    if (!doc || !footer) return;
    const update = () => {
      const docH = doc.offsetHeight;
      const footerH = footer.offsetHeight;
      const top = -(docH - window.innerHeight + footerH);
      if (top >= 0) {
        doc.style.position = "";
        doc.style.top = "";
        doc.style.marginBottom = "";
      } else {
        doc.style.position = "sticky";
        doc.style.top = `${top}px`;
        doc.style.marginBottom = `${footerH}px`;
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(doc);
    ro.observe(footer);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <Hero />
      <Document ref={docRef} />
      <Footer ref={footerRef} />
    </>
  );
}
