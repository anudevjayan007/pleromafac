import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import HeroImage from "./HeroImage";
import {
  Link as RouterLink
} from "react-router-dom";


export default function Hero() {
  const { t } = useTranslation();

  return (
<div className="container w-full mt-32 md:mt-8">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT */}
        <div className="max-w-xl space-y-0 md:space-y-6">
          <h1 className="leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-lg">
            {t("hero.subtitle")}
          </p>

        <div className="flex flex-wrap gap-4 pt-4">
  {/* Contact */}


<RouterLink
  to="/contact"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  <button className="btn-primary cursor-pointer">
    {t("hero.ctaPrimary")}
  </button>
</RouterLink>


  {/* Services */}
  <Link
    to="services"
    smooth
    duration={500}
    offset={-80}
  >
    <button className="btn-outline cursor-pointer">
      {t("hero.ctaSecondary")}
    </button>
  </Link>
</div>

        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative">
             <HeroImage />
        </div>

      </div>
    </div>
  );
}


