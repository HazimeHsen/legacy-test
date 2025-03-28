import Image from "next/image"
import { useTranslation } from "next-i18next"

export default function HeroSection() {
  const { t } = useTranslation("common")

  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900">
              {t("heroTitle")}
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              {t("heroDescription")}
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto rounded-full bg-primary/90 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/90 transition"
              >
                {t("ourServices")}
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto text-sm font-semibold leading-6 text-slate-700 hover:text-primary transition"
              >
                {t("learnMore")} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative lg:ml-auto mt-8 lg:mt-0">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl shadow-xl aspect-square sm:aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Memorial QR code example"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 h-16 sm:h-24 w-16 sm:w-24 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/90 flex items-center justify-center animate-heartbeat">
                <i className="fa-solid fa-cross text-2xl sm:text-3xl text-primary"></i>
              </div>

              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 h-16 sm:h-24 w-16 sm:w-24 rounded-xl bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 flex items-center justify-center animate-heartbeat">
                <i className="fa-solid fa-qrcode text-2xl sm:text-3xl text-amber-600"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

