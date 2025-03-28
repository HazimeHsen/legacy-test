import FadeInSection from "./fade-in-section"
import { useTranslation } from "next-i18next"

export default function MissionSection() {
  const { t } = useTranslation("common")

  return (
    <FadeInSection delay={3}>
      <section id="mission" className="py-16 sm:py-20 md:py-24 gold-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 mb-6">
              {t("ourMission")}
            </div>

            <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
              {t("missionHeading")}
            </h2>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-3xl">
            <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-slate-600">
                <p>{t("missionParagraph1")}</p>
                <p>{t("missionParagraph2")}</p>
                <p>{t("missionParagraph3")}</p>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-x-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition"
                >
                  {t("contactUs")}
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

