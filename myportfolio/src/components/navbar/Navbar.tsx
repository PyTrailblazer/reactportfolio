import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import "./style.css"
import { assets } from '../../assets/img/assets'
import ThemeToggle from "../themetoggle/ThemeToggle"

const Navbar = () => {
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng)
    }
  }

  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const currentTheme = document.body.getAttribute("data-theme") as 'light' | 'dark'
    setTheme(currentTheme || 'light')

    const observer = new MutationObserver(() => {
      const newTheme = document.body.getAttribute("data-theme") as 'light' | 'dark'
      setTheme(newTheme || 'light')
    })

    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav">
      <div className="nav__container">

        <a
          href="/"
          className="nav__logo"
          aria-label="Home"
          title="Home"
        >
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            alt="logo"
            className="logo__image"
            width="90" height="25"
          />
        </a>

        <div className="nav__menu">
          <ul className="nav__menu-list">
            <li className="nav__menu-item">
              <a href="/" className="nav__menu-link">{t('nav.home')}</a>
            </li>
            <li className="nav__menu-item">
              <a href="/" className="nav__menu-link">{t('nav.about')}</a>
            </li>
            <li className="nav__menu-item">
              <a href="/" className="nav__menu-link">{t('nav.stack')}</a>
            </li>
            <li className="nav__menu-item">
              <a href="/" className="nav__menu-link">{t('nav.work')}</a>
            </li>
            <li className="nav__menu-item">
              <a href="/" className="nav__menu-link">{t('nav.contact')}</a>
            </li>
          </ul>
        </div>

        <div className="nav__overlay">
          <ThemeToggle />
        </div>

        <div className="nav__language-switcher">
          <button
            className={`nav__language-button ${i18n.language === 'en' ? 'nav__language-button--active' : ''}`}
            onClick={() => handleChangeLanguage('en')}
            disabled={i18n.language === 'en'}
            aria-label="Switch to English"
            title="English"
          >
            EN
          </button>

          <span className="nav__language-divider">|</span>

          <button
            className={`nav__language-button ${i18n.language === 'ru' ? 'nav__language-button--active' : ''}`}
            onClick={() => handleChangeLanguage('ru')}
            disabled={i18n.language === 'ru'}
            aria-label="Switch to Russian"
            title="Russian"
          >
            RU
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
