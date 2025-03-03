import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags'

export default function LanguageSwitcher() {

    const {i18n} = useTranslation()
    const [langue, setLangue] = useState(i18n.language)

    const langues = [
        { code: "en", label: "English", flag: "GB" },
        { code: "fr", label: "Français", flag: "FR" },
      ]

      const handleLanguageChange = (langueCode)=>{
        setLangue(langueCode)
        i18n.changeLanguage(langueCode)
        localStorage.setItem("language", langueCode)
      }
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-translate"></i>
  </button>
  <ul className="dropdown-menu">
    {
        langues.map((langue)=>{
            return (
                <li 
                key={langue.code}
                onClick={()=>handleLanguageChange(langue.code)}
                className='cursor-ptr mx-2'
                >
                    <span className='mx-2'>{langue.label}</span>
                    <Flag code={langue.flag} height={16}/>
                </li>

            )
        })
    }

  </ul>
</div>
  )
}
