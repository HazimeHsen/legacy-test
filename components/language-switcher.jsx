"use client"

import { useRouter } from "next/router"
import { useState } from "react"

export default function LanguageSwitcher() {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const changeLanguage = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-sky-600 transition"
      >
        <span>{locale === "en" ? "EN" : "AM"}</span>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => changeLanguage("en")}
              className={`block px-4 py-2 text-sm text-left w-full ${
                locale === "en" ? "bg-sky-50 text-sky-700" : "text-gray-700 hover:bg-gray-100"
              }`}
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("hy")}
              className={`block px-4 py-2 text-sm text-left w-full ${
                locale === "hy" ? "bg-sky-50 text-sky-700" : "text-gray-700 hover:bg-gray-100"
              }`}
              role="menuitem"
            >
              Հայերեն
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

