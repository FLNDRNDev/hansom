// /components/LanguageSwitcher.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState("en"); // Default language is English

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    router.push(`/${lang}${window.location.pathname}`);
  };

  return (
    <div>
      <button
        onClick={() => switchLanguage(currentLang === "en" ? "nl" : "en")}
        className="flex items-center p-2 bg-gray-200 hover:bg-gray-300 rounded text"
      >
        {currentLang === "en" ? (
          // English Language Flag
          <span className="flex items-center text">
            {/* UK Flag */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 rounded-full"
              viewBox="0 0 36 36"
            >
              <circle fill="#fff" cx="18" cy="18" r="18" />
              <path fill="#00247d" d="M1,1h34v34H1V1z" />
              <path fill="#fff" d="M1,1h34L1,35h34L1,1z" />
            </svg>
            English
          </span>
        ) : (
          // Dutch Language Flag
          <span className="flex items-center text">
            {/* Belgium Flag */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 rounded-full"
              viewBox="0 0 36 36"
            >
              <rect fill="#f00" x="24" y="0" width="12" height="36" />
              <rect fill="#ffd700" x="12" y="0" width="12" height="36" />
              <rect fill="#000" x="0" y="0" width="12" height="36" />
            </svg>
            Nederlands
          </span>
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
