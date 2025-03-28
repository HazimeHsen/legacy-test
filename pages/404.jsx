import Link from "next/link"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default function NotFound() {
  const { t } = useTranslation("common")

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-slate-200">404</h1>

        <div className="mt-4 flex justify-center">
          <svg className="h-12 w-full max-w-[400px]" viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
            <path
              className="animate-flatline stroke-current text-sky-500/50"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              d="M0,20 L400,20"
            />
          </svg>
        </div>

        <p className="mt-6 text-2xl font-bold tracking-tight text-slate-900">{t("pageNotFound")}</p>

        <p className="mt-4 text-slate-500">{t("pageNotFoundDescription")}</p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          {t("goBackHome")}
        </Link>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

