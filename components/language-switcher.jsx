"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center  transition"
      >
        <Image
          src={
            locale === "en"
              ? "/images/locales/en.svg"
              : "/images/locales/hy.svg"
          }
          alt={locale === "en" ? "English" : "Armenian"}
          width={20}
          height={15}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
          <div className="flex items-center" role="menu" aria-orientation="vertical">
            <button
              onClick={() => changeLanguage("en")}
              className={`flex items-center gap-2 px-4 py-2 text-sm text-left w-full ${
                locale === "en"
                  ? "bg-primary/5 text-primary"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              role="menuitem"
            >
              <Image
                src="/images/locales/en.svg"
                alt="English"
                width={20}
                height={15}
              />
            </button>
            <button
              onClick={() => changeLanguage("hy")}
              className={`flex items-center gap-2 px-4 py-2 text-sm text-left w-full ${
                locale === "hy"
                  ? "bg-primary/5 text-primary"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              role="menuitem"
            >
              <Image
                src="/images/locales/hy.svg"
                alt="Armenian"
                width={20}
                height={15}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
