import { useTranslation } from "react-i18next";
export default function OurStory() {
    const { t } = useTranslation();

  return (
    <div className="container w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* LEFT: TEXT */}
        <div>
          {/* Section label */}
          <span className="text-sm uppercase tracking-wider text-teal-400">
           {t("story.label")}
          </span>

          {/* Bigger heading */}
          <h2 className="mt-4 mb-6 text-3xl md:text-4xl font-semibold leading-tight">
            {t("story.heading")}

          </h2>

          {/* Text card */}
          <div className="space-y-5 text-gray-300
                          bg-white/5 backdrop-blur
                          rounded-2xl p-6 md:p-8">

                 <p>{t("story.p1")}</p>
            <p>{t("story.p2")}</p>
            <p>{t("story.p3")}</p>

          </div>
        </div>

        {/* RIGHT: IMAGE / ILLUSTRATION */}
        <div className="relative">
          <img
            src="/our-story.jpg"
            alt="Inclusive built environment and fire safety design"
            className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
          />
         
          {/* Soft overlay for dark theme */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
        </div>

      </div>
    </div>
  );
}
