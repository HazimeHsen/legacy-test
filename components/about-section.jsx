import Image from "next/image";
import FadeInSection from "./fade-in-section";
import { useTranslation } from "next-i18next";

export default function AboutSection() {
  const { t } = useTranslation("common");

  return (
    <FadeInSection>
      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 overflow-hidden bg-white md:pl-0 pl-5"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-2 items-center">
            <div className="relative lg:order-last mx-auto max-w-md lg:max-w-none">
              <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Memorial example"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 w-64 sm:w-72 rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl p-4 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-full bg-primary/10 size-10 flex items-center justify-center">
                    <i className="fa-solid fa-heart text-xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">
                      {t("aboutTimelessTributes")}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {t("aboutConnectingPastPresent")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-md lg:max-w-none">
              <div className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                {t("aboutLegacy")}
              </div>

              <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
                {t("aboutHeading")}
              </h2>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
                {t("aboutDescription")}
              </p>

              <div className="mt-8 sm:mt-10">
                <a
                  href="#services"
                  className="inline-flex items-center gap-x-2 rounded-full bg-primary/90 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/90 transition"
                >
                  {t("aboutExploreServices")}
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
