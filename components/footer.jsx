import Image from "next/image"
import { useTranslation } from "next-i18next"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation("common")

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <Image
              src="/images/logo.png"
              alt="Legacy.am"
              width={180}
              height={60}
              className="h-10 sm:h-12 w-auto mx-auto lg:mx-0"
            />

            <p className="mt-4 sm:mt-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base text-slate-300">
              {t("preservingMemories")}
            </p>

            <div className="mt-6 flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-slate-400 transition">
                <span className="sr-only">Facebook</span>
                <i className="fa-brands fa-facebook-f text-xl"></i>
              </a>

              <a href="#" className="text-slate-400 transition">
                <span className="sr-only">Instagram</span>
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>

              <a href="#" className="text-slate-400 transition">
                <span className="sr-only">Twitter</span>
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="sm:grid sm:grid-cols-2">
              <div className="text-center sm:text-left">
                <h3 className="text-sm font-semibold uppercase">{t("navigation")}</h3>
                <ul className="mt-4 space-y-3 sm:space-y-4">
                  <li>
                    <a href="#about" className="text-sm sm:text-base text-slate-300 hover:text-white transition">
                      {t("about")}
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm sm:text-base text-slate-300 hover:text-white transition">
                      {t("services")}
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="text-sm sm:text-base text-slate-300 hover:text-white transition">
                      {t("howItWorks")}
                    </a>
                  </li>
                  <li>
                    <a href="#mission" className="text-sm sm:text-base text-slate-300 hover:text-white transition">
                      {t("mission")}
                    </a>
                  </li>
                  <li>
                    <a href="#faqs" className="text-sm sm:text-base text-slate-300 hover:text-white transition">
                      {t("faqs")}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-8 sm:mt-0 text-center sm:text-left">
                <h3 className="text-sm font-semibold uppercase">{t("legal")}</h3>
                <ul className="mt-4 space-y-3 sm:space-y-4">
                  <li>
                    <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition">
                      {t("privacyPolicy")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition">
                      {t("termsOfService")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold uppercase">{t("contactUsHeading")}</h3>
              <div className="mt-4 space-y-3 sm:space-y-4">
                <p className="flex items-center justify-center sm:justify-start text-sm sm:text-base text-slate-300">
                  <i className="fa-solid fa-envelope text-lg"></i>
                  {t("email")} contact@legacy.am
                </p>
                <p className="flex items-center justify-center sm:justify-start text-sm sm:text-base text-slate-300">
                  <i className="fa-solid fa-phone text-lg"></i>
                  {t("phone")} +374 10 123456
                </p>
                <p className="flex items-center justify-center sm:justify-start text-sm sm:text-base text-slate-300">
                  <i className="fa-solid fa-map-marker-alt text-lg"></i>
                  {t("address")} 123 Memorial Lane, Yerevan, Armenia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-xs sm:text-sm text-slate-400">
            &copy; {currentYear} Legacy.am. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}

