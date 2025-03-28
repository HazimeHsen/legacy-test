import FadeInSection from "./fade-in-section"
import { useTranslation } from "next-i18next"

export default function HowItWorks() {
  const { t } = useTranslation("common")

  return (
    <FadeInSection delay={2}>
      <section id="how-it-works" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 mb-6">
              {t("howItWorks")}
            </div>

            <h2 className="font-cormorant text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              {t("howItWorksHeading")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">{t("howItWorksDescription")}</p>
          </div>

          {/* Process steps */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative">
                <div className="lg:pt-16 relative">
                  <div className="rounded-xl bg-slate-50 p-6 h-full shadow-sm border border-slate-100">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100">
                      <i className="fa-solid fa-user-plus text-xl text-sky-600"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">{t("register")}</h3>

                    <p className="mt-3 text-base text-slate-600">{t("registerDescription")}</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="lg:pt-16 relative">
                  <div className="rounded-xl bg-slate-50 p-6 h-full shadow-sm border border-slate-100">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100">
                      <i className="fa-solid fa-edit text-xl text-sky-600"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">{t("setupProfile")}</h3>

                    <p className="mt-3 text-base text-slate-600">{t("setupProfileDescription")}</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="lg:pt-16 relative">
                  <div className="rounded-xl bg-slate-50 p-6 h-full shadow-sm border border-slate-100">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100">
                      <i className="fa-solid fa-shopping-cart text-xl text-sky-600"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">{t("orderProduct")}</h3>

                    <p className="mt-3 text-base text-slate-600">{t("orderProductDescription")}</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="lg:pt-16 relative">
                  <div className="rounded-xl bg-slate-50 p-6 h-full shadow-sm border border-slate-100">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100">
                      <i className="fa-solid fa-check-circle text-xl text-sky-600"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">{t("applyGravestone")}</h3>

                    <p className="mt-3 text-base text-slate-600">{t("applyGravestoneDescription")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional CTA */}
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-x-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition"
            >
              {t("beginYourMemorial")}
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

