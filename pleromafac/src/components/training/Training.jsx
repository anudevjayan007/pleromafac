import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Trainings() {
  const { t } = useTranslation();

  return (
    <section id="training" className="full-section">
      <div className="container w-full">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <span className="text-sm uppercase tracking-wider text-teal-400">
              {t("training.label")}
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              {t("training.heading")}
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              {t("training.intro")}
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
  <TrainingCard
    title={t("training.fire.title")}
    summary={t("training.fire.summary")}
  />

  <TrainingCard
    title={t("training.access.title")}
    summary={t("training.access.summary")}
  />

  <TrainingCard
    title={t("training.universal.title")}
    summary={t("training.universal.summary")}
  />
</div>

          {/* CTA */}
          <div className="mt-12">
            <div
            
              className="inline-flex items-center gap-2
                         text-teal-400 font-medium
                         hover:underline"
            >
              {t("training.cta")} →
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
function TrainingCard({ title, summary }) {
  return (
    <div
      className="relative bg-white/[0.035]
                 border border-white/10
                 rounded-xl p-8
                 transition
                 hover:border-teal-400/40"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 h-1 w-12 bg-teal-400/60 rounded-tl-xl" />

      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {summary}
      </p>

      <span className="mt-6 inline-block text-sm text-teal-400">
        Learn more →
      </span>
    </div>
  );
}
