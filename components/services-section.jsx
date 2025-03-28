import FadeInSection from "./fade-in-section"
import { useTranslation } from "next-i18next"

export default function ServicesSection() {
  const { t } = useTranslation("common")

  return (
    <FadeInSection delay={1}>
      <section id="services" className="py-16 sm:py-20 md:py-24 section-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 mb-6">
              {t("ourServices")}
            </div>

            <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
              {t("servicesHeading")}
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              {t("servicesDescription")}
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 grid max-w-md sm:max-w-2xl grid-cols-1 gap-8 sm:gap-y-12 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-sky-500/20 transition-all duration-300">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-sky-50">
                <i className="fa-solid fa-star text-xl sm:text-2xl text-sky-600"></i>
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-900">{t("customEngraving")}</h3>

              <p className="mt-3 sm:mt-4 flex-1 text-sm sm:text-base text-slate-600">
                {t("customEngravingDescription")}
              </p>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-sky-500/20 transition-all duration-300">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-sky-50">
                <i className="fa-solid fa-lightbulb text-xl sm:text-2xl text-sky-600"></i>
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-900">{t("seamlessMemorial")}</h3>

              <p className="mt-3 sm:mt-4 flex-1 text-sm sm:text-base text-slate-600">
                {t("seamlessMemorialDescription")}
              </p>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-sky-500/20 transition-all duration-300">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-sky-50">
                <i className="fa-solid fa-shield-alt text-xl sm:text-2xl text-sky-600"></i>
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-900">{t("durableLasting")}</h3>

              <p className="mt-3 sm:mt-4 flex-1 text-sm sm:text-base text-slate-600">
                {t("durableLastingDescription")}
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-2">
            <div className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-sky-500/20 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50">
                <i className="fa-solid fa-mobile-alt text-lg sm:text-xl text-sky-600"></i>
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-900">{t("easyToUse")}</h3>

              <p className="mt-3 sm:mt-4 flex-1 text-sm sm:text-base text-slate-600">{t("easyToUseDescription")}</p>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-sky-500/20 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50">
                <i className="fa-solid fa-heart text-lg sm:text-xl text-sky-600"></i>
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-900">{t("uniquePersonal")}</h3>

              <p className="mt-3 sm:mt-4 flex-1 text-sm sm:text-base text-slate-600">
                {t("uniquePersonalDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

