import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import { useState,useEffect } from "react";
function useScrollOffset() {
  const [offset, setOffset] = useState(-80);

  useEffect(() => {
    const updateOffset = () => {
      // mobile vs desktop breakpoint
      setOffset(window.innerWidth < 768 ? -72 : -80);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return offset;
}

export default function Navbar() {
const { t } = useTranslation();



  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/70 backdrop-blur-md border-b border-white/10">
      <div className="container flex justify-between items-center h-20">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Pleroma<span className="text-teal-400">.</span>
        </h1>

        {/* Desktop Nav */}
<ul className="hidden md:flex items-center space-x-8 font-medium">


          <NavLink to="hero">{t("nav.home")}</NavLink>
          <NavLink to="story">{t("nav.story")}</NavLink>
          <NavLink to="services">{t("nav.services")}</NavLink>
          <NavLink to="training">{t("nav.training")}</NavLink>
          <NavLink to="contact">{t("nav.contact")}</NavLink>
          <LanguageSwitcher />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-white/10">
          <ul className="flex flex-col text-white">
            <MobileNavLink to="hero" setOpen={setOpen}>
              {t("nav.home")}
            </MobileNavLink>
            <MobileNavLink to="story" setOpen={setOpen}>
              {t("nav.story")}
            </MobileNavLink>
            <MobileNavLink to="services" setOpen={setOpen}>
              {t("nav.services")}
            </MobileNavLink>
            <MobileNavLink to="training" setOpen={setOpen}>
              {t("nav.training")}
            </MobileNavLink>
            <MobileNavLink to="contact" setOpen={setOpen}>
              {t("nav.contact")}
            </MobileNavLink>
          </ul>

          <div className="px-6 py-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}


function NavLink({ to, children }) {
  const offset = useScrollOffset();
  return (
    <Link
      to={to}
      smooth
      duration={500}
      spy={true}
      offset={offset}
      activeClass="active"
      className="cursor-pointer relative transition
                 text-white hover:text-teal-400
                 after:absolute after:start-0 after:-bottom-1
                 after:h-[2px] after:w-0 after:bg-teal-400
                 after:transition-all"
    >
      {children}
    </Link>
  );
}



function MobileNavLink({ to, children, setOpen }) {
  const offset = useScrollOffset();
  return (
    <Link
      to={to}
      smooth
          offset={offset}

      duration={500}
      onClick={() => setOpen(false)}
      className="px-6 py-4 border-b border-white/10
                 transition hover:bg-teal-500/10
                 hover:text-teal-400 cursor-pointer"
    >
      {children}
    </Link>
  );
}
