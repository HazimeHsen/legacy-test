"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "next-i18next"

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation("common")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="relative mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-500"
        >
          <span className="sr-only">Close</span>
          <i className="fa-solid fa-times text-xl"></i>
        </button>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              <i className="fa-solid fa-bullhorn text-xl text-sky-600"></i>
            </div>

            <h2 className="mt-6 text-xl font-bold text-slate-900">{t("specialOffer")}</h2>

            <p className="mt-4 text-sm text-slate-600">{t("specialOfferDescription")}</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 sm:items-start">
            <button
              onClick={() => {
                window.location.href = "#services"
                setIsVisible(false)
              }}
              className="w-full rounded-full bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
            >
              {t("orderNow")}
            </button>

            <button
              onClick={() => setIsVisible(false)}
              className="text-sm font-medium text-slate-600 hover:text-slate-800"
            >
              {t("noThanks")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

