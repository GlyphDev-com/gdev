import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Flag from "react-world-flags";

export default function LanguageSwitcher({className}) {
  const {i18n} = useTranslation();
  const [langue, setLangue] = useState(i18n.language);

  const langues = [
    {code: "en", label: "English", flag: "GB"},
    {code: "fr", label: "Français", flag: "FR"},
  ];

  const handleLanguageChange = (langueCode) => {
    setLangue(langueCode);
    i18n.changeLanguage(langueCode);
    localStorage.setItem("language", langueCode);
  };
  return (
    <div className={`dropdown`}>
      <button
        style={{outline: "none", border: "none"}}
        className={`outline-none bg-transparent wh-2 border-color-jira  border-l-2 br-1 border-b-1 lift-1 dropdown-toggle  ${className}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-translate"></i>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end br-1 lift-2  border-color-jira"
        style={{
          backgroundColor: "#00000066",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {langues.map((langue) => {
          return (
            <li
              key={langue.code}
              onClick={() => handleLanguageChange(langue.code)}
              className="cursor-ptr mx-2 hover-bg-secondary py-1 d-flex flex-row align-items-center justify-content-between px-2 br-1"
            >
              <span className=" wh-2 gt-4 fw-bold">{langue.label}</span>
              <Flag code={langue.flag} height={20} width={20} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
