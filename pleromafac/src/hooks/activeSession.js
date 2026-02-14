import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState("hero");
  const location = useLocation();

  useEffect(() => {
    // Scroll spy ONLY on home
    if (location.pathname !== "/") return;

    const sections = {};
    let rafId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sections[entry.target.id] = entry;
        });

        if (rafId) return;

        rafId = requestAnimationFrame(() => {
          rafId = null;

          const visible = Object.values(sections)
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) =>
                Math.abs(a.boundingClientRect.top) -
                Math.abs(b.boundingClientRect.top)
            );

          if (visible.length > 0) {
            setActive(visible[0].target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px", // navbar-aware
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [sectionIds, location.pathname]);

  return active;
}
