"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import LanguageSwitcher from "./language-switcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation("common")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block" href="/">
              <Image src="/images/logo.png" alt="Legacy.am" width={180} height={60} className="h-8 sm:h-12 w-auto" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav className="hidden md:block" aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">
                {t("navigation")}
              </h2>

              <ul className="flex items-center gap-4 lg:gap-6 text-sm">
                <li>
                  <Link className="text-gray-700 transition hover:text-sky-600" href="#about">
                    {t("about")}
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-700 transition hover:text-sky-600" href="#services">
                    {t("services")}
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-700 transition hover:text-sky-600" href="#how-it-works">
                    {t("howItWorks")}
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-700 transition hover:text-sky-600" href="#mission">
                    {t("mission")}
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-700 transition hover:text-sky-600" href="#faqs">
                    {t("faqs")}
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-700 transition hover:text-sky-600" href="#contact">
                    {t("contact")}
                  </Link>
                </li>

                <li>
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-3 md:gap-4">
                <Link
                  className="rounded-full bg-sky-500 px-3 sm:px-4 md:px-5 py-2 md:py-2.5 text-xs sm:text-sm font-medium text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition"
                  href="/login"
                >
                  {t("login")}
                </Link>

                <Link
                  className="rounded-full bg-white border border-sky-500 px-3 sm:px-4 md:px-5 py-2 md:py-2.5 text-xs sm:text-sm font-medium text-sky-600 shadow hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition"
                  href="/register"
                >
                  {t("register")}
                </Link>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="rounded p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <span className="sr-only">Toggle menu</span>
                  {isMenuOpen ? (
                    <i className="fa-solid fa-times text-xl"></i>
                  ) : (
                    <i className="fa-solid fa-bars text-xl"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-1 px-4 pb-5 pt-2">
            <Link
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="#services"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("services")}
            </Link>
            <Link
              href="#how-it-works"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("howItWorks")}
            </Link>
            <Link
              href="#mission"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("mission")}
            </Link>
            <Link
              href="#faqs"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("faqs")}
            </Link>
            <Link
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <div className="pt-4 space-y-2">
              <Link
                href="/login"
                className="block w-full rounded-full bg-sky-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("login")}
              </Link>
              <Link
                href="/register"
                className="block w-full rounded-full bg-white border border-sky-500 px-4 py-2 text-center text-sm font-medium text-sky-600 shadow-sm hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("register")}
              </Link>
            </div>
            <div className="pt-2 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

