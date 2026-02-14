import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import { useState, useEffect } from "react";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import useActiveSection from "../../hooks/activeSession";

/* ---------------- scroll offset ---------------- */
function useScrollOffset() {
  const [offset, setOffset] = useState(-80);

  useEffect(() => {
    const update = () => {
      setOffset(window.innerWidth < 768 ? -72 : -80);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return offset;
}

/* ---------------- navbar ---------------- */
export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const offset = useScrollOffset();
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";

  // ✅ ALWAYS call the hook (no conditional hooks)
  const scrollActive = useActiveSection([
    "hero",
    "story",
    "services",
    "training",
  ]);

  const isActive = (section) =>
    isHome && scrollActive === section;

  const routeActive = (path) =>
    location.pathname === path;

  const baseLink =
    "relative cursor-pointer transition text-white hover:text-teal-400";

  const underline =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-teal-400 after:transition-all";

  const activeUnderline = "text-teal-400 after:w-full";
  const inactiveUnderline = "after:w-0";

  const desktopClass = (active) =>
    `${baseLink} ${underline} ${
      active ? activeUnderline : inactiveUnderline
    }`;

  const mobileClass =
    "px-6 py-4 border-b border-white/10 hover:bg-teal-500/10 hover:text-teal-400 transition";

  /* ---------- helper: route → home → scroll ---------- */
  const goHomeAndScroll = (id) => {
    navigate("/", { state: { scrollTo: id } });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/70 backdrop-blur-md border-b border-white/10">
      <div className="container flex justify-between items-center h-20">

        {/* LOGO */}
        <RouterLink to="/">
          <img
            src="/Asset 3.svg"
            alt="Pleroma – Fire safety and accessibility consultancy"
            className="h-10 w-auto brightness-100 contrast-200"
          />
        </RouterLink>

        {/* ---------------- DESKTOP NAV ---------------- */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {isHome ? (
            <ScrollLink
              to="hero"
              smooth
              offset={offset}
              className={desktopClass(isActive("hero"))}
            >
              {t("nav.home")}
            </ScrollLink>
          ) : (
            <button
              className={desktopClass(routeActive("/"))}
              onClick={() => goHomeAndScroll("hero")}
            >
              {t("nav.home")}
            </button>
          )}

          {["story", "services", "training"].map((id) =>
            isHome ? (
              <ScrollLink
                key={id}
                to={id}
                smooth
                offset={offset}
                className={desktopClass(isActive(id))}
              >
                {t(`nav.${id}`)}
              </ScrollLink>
            ) : (
              <button
                key={id}
                className={desktopClass(false)}
                onClick={() => goHomeAndScroll(id)}
              >
                {t(`nav.${id}`)}
              </button>
            )
          )}

          <RouterLink
            to="/contact"
            className={desktopClass(routeActive("/contact"))}
          >
            {t("nav.contact")}
          </RouterLink>

          <RouterLink
            to="/knowledge"
            className={desktopClass(routeActive("/knowledge"))}
          >
            {t("nav.insights")}
          </RouterLink>

          <LanguageSwitcher />
        </ul>

        {/* ---------------- MOBILE TOGGLE ---------------- */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-white/10">
          <ul className="flex flex-col text-white">
            {isHome ? (
              <ScrollLink
                to="hero"
                smooth
                offset={offset}
                className={mobileClass}
                onClick={() => setOpen(false)}
              >
                {t("nav.home")}
              </ScrollLink>
            ) : (
              <button
                className={mobileClass}
                onClick={() => goHomeAndScroll("hero")}
              >
                {t("nav.home")}
              </button>
            )}

            {["story", "services", "training"].map((id) =>
              isHome ? (
                <ScrollLink
                  key={id}
                  to={id}
                  smooth
                  offset={offset}
                  className={mobileClass}
                  onClick={() => setOpen(false)}
                >
                  {t(`nav.${id}`)}
                </ScrollLink>
              ) : (
                <button
                  key={id}
                  className={mobileClass}
                  onClick={() => goHomeAndScroll(id)}
                >
                  {t(`nav.${id}`)}
                </button>
              )
            )}

            <RouterLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={mobileClass}
            >
              {t("nav.contact")}
            </RouterLink>

            <RouterLink
              to="/knowledge"
              onClick={() => setOpen(false)}
              className={mobileClass}
            >
              {t("nav.knowledge")}
            </RouterLink>
          </ul>

          <div className="px-6 py-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
