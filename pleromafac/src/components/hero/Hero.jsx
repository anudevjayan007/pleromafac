import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="container w-full">
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
          <img
            src="/fire-saftey.webp"
            alt="Fire safety and accessibility consultancy"
            className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
          />

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
        </div>

      </div>
    </div>
  );
}


