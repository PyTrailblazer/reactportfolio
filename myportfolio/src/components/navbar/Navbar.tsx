import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './navbar.css'
import { assets } from '../../assets/img/assets'
import ThemeToggle from '../theme_toggle/ThemeToggle'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleChangeLanguage = (lng) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav__container')) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Закрытие меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

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
            src={assets.logo}
            alt="logo"
            className="logo__image"
            width="90" 
            height="25"
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

        <div className="nav__controls">
          <div className="nav__theme-toggle">
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

        {/* Mobile Burger Button */}
        <button
          className={`nav__burger ${isMobileMenuOpen ? 'nav__burger--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="nav__burger-line"></span>
          <span className="nav__burger-line"></span>
          <span className="nav__burger-line"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`nav__mobile-overlay ${isMobileMenuOpen ? 'nav__mobile-overlay--open' : ''}`}>
          <div className="nav__mobile-menu">
            <ul className="nav__mobile-menu-list">
              <li className="nav__mobile-menu-item">
                <a 
                  href="/" 
                  className="nav__mobile-menu-link"
                  onClick={closeMobileMenu}
                >
                  {t('nav.home')}
                </a>
              </li>
              <li className="nav__mobile-menu-item">
                <a 
                  href="/" 
                  className="nav__mobile-menu-link"
                  onClick={closeMobileMenu}
                >
                  {t('nav.about')}
                </a>
              </li>
              <li className="nav__mobile-menu-item">
                <a 
                  href="/" 
                  className="nav__mobile-menu-link"
                  onClick={closeMobileMenu}
                >
                  {t('nav.stack')}
                </a>
              </li>
              <li className="nav__mobile-menu-item">
                <a 
                  href="/" 
                  className="nav__mobile-menu-link"
                  onClick={closeMobileMenu}
                >
                  {t('nav.work')}
                </a>
              </li>
              <li className="nav__mobile-menu-item">
                <a 
                  href="/" 
                  className="nav__mobile-menu-link"
                  onClick={closeMobileMenu}
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>

            {/* Mobile Controls */}
            <div className="nav__mobile-controls">
              <div className="nav__mobile-theme-toggle">
                <ThemeToggle />
              </div>

              <div className="nav__mobile-language-switcher">
                <button
                  className={`nav__mobile-language-button ${i18n.language === 'en' ? 'nav__mobile-language-button--active' : ''}`}
                  onClick={() => {
                    handleChangeLanguage('en')
                  }}
                  disabled={i18n.language === 'en'}
                  aria-label="Switch to English"
                >
                  English
                </button>

                <button
                  className={`nav__mobile-language-button ${i18n.language === 'ru' ? 'nav__mobile-language-button--active' : ''}`}
                  onClick={() => {
                    handleChangeLanguage('ru')
                  }}
                  disabled={i18n.language === 'ru'}
                  aria-label="Switch to Russian"
                >
                  Русский
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar