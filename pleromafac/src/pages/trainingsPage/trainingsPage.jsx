import { useTranslation } from "react-i18next";

export default function TrainingsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container max-w-4xl space-y-28">

        {/* PAGE HEADER */}
        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">
            {t("trainingsPage.title")}
          </h1>
          <p className="text-lg text-gray-300">
            {t("trainingsPage.intro")}
          </p>
        </header>

        {/* PROGRAMMES */}
        <ProgrammeDossier
          title={t("trainings.fire.title")}
          overview={t("trainings.fire.overview")}
          why={t("trainings.fire.why")}
          learn={t("trainings.fire.learn", { returnObjects: true })}
          audience={t("trainings.fire.audience")}
          format={t("trainings.fire.format")}
        />

        <ProgrammeDossier
          title={t("trainings.access.title")}
          overview={t("trainings.access.overview")}
          why={t("trainings.access.why")}
          learn={t("trainings.access.learn", { returnObjects: true })}
          audience={t("trainings.access.audience")}
          format={t("trainings.access.format")}
        />

        <ProgrammeDossier
          title={t("trainings.universal.title")}
          overview={t("trainings.universal.overview")}
          why={t("trainings.universal.why")}
          learn={t("trainings.universal.learn", { returnObjects: true })}
          audience={t("trainings.universal.audience")}
          format={t("trainings.universal.format")}
        />

        <ProgrammeDossier
          title={t("trainings.service.title")}
          overview={t("trainings.service.overview")}
          why={t("trainings.service.why")}
          learn={t("trainings.service.learn", { returnObjects: true })}
          audience={t("trainings.service.audience")}
          format={t("trainings.service.format")}
        />

        <ProgrammeDossier
          title={t("trainings.audit.title")}
          overview={t("trainings.audit.overview")}
          why={t("trainings.audit.why")}
          learn={t("trainings.audit.learn", { returnObjects: true })}
          audience={t("trainings.audit.audience")}
          format={t("trainings.audit.format")}
        />

        {/* CONTACT */}
        <section className="pt-12 border-t border-white/10">
          <p className="text-gray-300">
            {t("trainingsPage.contact")}
          </p>
        </section>

      </div>
    </main>
  );
}

/* ---------------- DOSSIER COMPONENT ---------------- */

function ProgrammeDossier({
  title,
  overview,
  why,
  learn,
  audience,
  format,
}) {
  return (
    <section className="space-y-10">

      <header className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {title}
        </h2>
        <p className="text-gray-300">{overview}</p>
      </header>

      <div className="space-y-8">

        <Block labelKey="trainingsPage.why">
          <p className="text-gray-300">{why}</p>
        </Block>

        <Block labelKey="trainingsPage.learn">
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            {learn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block labelKey="trainingsPage.audience">
          <p className="text-gray-300">{audience}</p>
        </Block>

        <Block labelKey="trainingsPage.format">
          <p className="text-gray-300">{format}</p>
        </Block>

      </div>
    </section>
  );
}

/* ---------------- SUB BLOCK ---------------- */

function Block({ labelKey, children }) {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-6">
      <p className="text-sm uppercase tracking-wider text-teal-400">
        {t(labelKey)}
      </p>
      <div>{children}</div>
    </div>
  );
}
