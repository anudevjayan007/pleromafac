import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

export default function SmartNavLink({
  to,
  children,
  offset,
  active,
  mobile = false,
  onClick,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const base =
    "relative transition cursor-pointer text-white hover:text-teal-400";

  const underline =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-teal-400 after:transition-all";

  const activeStyles = active
    ? "text-teal-400 after:w-full"
    : "after:w-0";

  const desktopClass = `${base} ${underline} ${activeStyles}`;

  const mobileClass =
    "px-6 py-4 border-b border-white/10 hover:bg-teal-500/10 hover:text-teal-400 transition";

  const className = mobile ? mobileClass : desktopClass;

  // HOME → smooth scroll
  if (isHome) {
    return (
      <ScrollLink
        to={to}
        smooth
        duration={500}
        offset={offset}
        className={className}
        onClick={onClick}
      >
        {children}
      </ScrollLink>
    );
  }

  // OTHER PAGES → route to home + scroll
  return (
    <button
      className={className}
      onClick={() => {
        if (onClick) onClick();
        navigate("/", { state: { scrollTo: to } });
      }}
    >
      {children}
    </button>
  );
}
