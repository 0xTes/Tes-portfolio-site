import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return undefined;

    const sectionId = decodeURIComponent(hash.slice(1));

    if (pathname === "/" && ["about", "services"].includes(sectionId)) {
      navigate(
        { pathname: "/about", hash: `#${sectionId}` },
        { replace: true },
      );
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [hash, navigate, pathname]);

  return null;
}
