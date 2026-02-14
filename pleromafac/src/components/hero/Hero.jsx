import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import HeroImage from "./HeroImage";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="container w-full mt-16">
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
  <Link
    to="/contact"
    smooth
    duration={500}
    offset={-80}
  >
    <button className="btn-primary">
      {t("hero.ctaPrimary")}
    </button>
  </Link>

  {/* Services */}
  <Link
    to="services"
    smooth
    duration={500}
    offset={-80}
  >
    <button className="btn-outline">
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


