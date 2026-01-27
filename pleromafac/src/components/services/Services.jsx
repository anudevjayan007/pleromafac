import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const services = [
    {
      title: t("services.fire.title"),
      description: t("services.fire.description"),
      points: [
        t("services.fire.p1"),
        t("services.fire.p2"),
        t("services.fire.p3"),
        t("services.fire.p4"),
        t("services.fire.p5"),
      ],
    },
    {
      title: t("services.access.title"),
      description: t("services.access.description"),
      points: [
        t("services.access.p1"),
        t("services.access.p2"),
        t("services.access.p3"),
        t("services.access.p4"),
        t("services.access.p5"),
      ],
    },
    {
      title: t("services.audit.title"),
      description: t("services.audit.description"),
      points: [
        t("services.audit.p1"),
        t("services.audit.p2"),
        t("services.audit.p3"),
        t("services.audit.p4"),
        t("services.audit.p5"),
      ],
    },
  ];

  return (
    <div className="container">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <span className="text-sm uppercase tracking-wider text-teal-400">
            {t("services.label")}
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            {t("services.heading")}
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            {t("services.intro")}
          </p>
        </div>

        {/* 🖥 Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        {/* 📱 Mobile carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.05}
            spaceBetween={16}
            pagination={{ clickable: true }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}

/* ---------------- */
/* Service Card     */
/* ---------------- */

function ServiceCard({ title, description, points }) {
  return (
  <div
  className="
    h-full
    grid grid-rows-[auto_auto_1fr]
    bg-white/[0.03]
    backdrop-blur-[2px]
    rounded-2xl
    border border-white/10
    hover:border-teal-400/30
    transition
  "
>

      {/* Header */}
      <div className="p-8 md:p-10">
        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>

        {/* Description — height constrained */}
        <p className="text-gray-300 min-h-[96px]">
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mx-8 md:mx-10" />

      {/* Bullet list */}
      <ul className="p-8 md:p-10 pt-6 space-y-3 text-gray-300">
        {points.map((item, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="text-teal-400 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
