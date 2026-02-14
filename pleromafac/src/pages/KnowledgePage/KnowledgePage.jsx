import { useTranslation } from "react-i18next";

export default function KnowledgePage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="container max-w-6xl space-y-24">

        {/* PAGE HEADER */}
        <header className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">
            {t("knowledge.title")}
          </h1>
          <p className="text-lg text-gray-300">
            {t("knowledge.intro")}
          </p>
        </header>

        {/* ARTICLE 1 */}
        <KnowledgeArticle
          image="/k2.jpg"
          title={t("knowledge.embers.title")}
        >
          <p>{t("knowledge.embers.p1")}</p>
          <p>{t("knowledge.embers.p2")}</p>
          <p>{t("knowledge.embers.p3")}</p>

          <ul>
            {t("knowledge.embers.points", { returnObjects: true }).map(
              (item, i) => <li key={i}>{item}</li>
            )}
          </ul>

          <p>{t("knowledge.embers.p4")}</p>
          <p>{t("knowledge.embers.p5")}</p>
        </KnowledgeArticle>

        {/* ARTICLE 2 */}
        <KnowledgeArticle
          image="/k1.jpg"
          title={t("knowledge.design.title")}
          reverse
        >
          <p>{t("knowledge.design.p1")}</p>
          <p>{t("knowledge.design.p2")}</p>
          <p>{t("knowledge.design.p3")}</p>

          <ul>
            {t("knowledge.design.points", { returnObjects: true }).map(
              (item, i) => <li key={i}>{item}</li>
            )}
          </ul>

          <p>{t("knowledge.design.p4")}</p>
        </KnowledgeArticle>

      </div>
    </main>
  );
}

/* ---------------- ARTICLE BLOCK ---------------- */

function KnowledgeArticle({ image, title, children, reverse }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* IMAGE */}
      <div className={`order-1 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className={`order-2 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          {title}
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>

    </article>
  );
}
