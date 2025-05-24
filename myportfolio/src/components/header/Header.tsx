import React from 'react'
import { useTranslation } from 'react-i18next'
import './header.css'
import { assets } from '../../assets/img/assets'

const Header = () => {
    const { t, i18n } = useTranslation()
  
  
    return (
        <header className='header'>
            <div className="header__container">
                <figure className="header__user">
                    <img
                     src={assets.user_about} 
                     alt="my_avatar" 
                     className="header__user-image" 
                     />

                     <figcaption className="header__user-caption">
                        {t("header.caption")}

                        <img src={assets.hand_icon} 
                        alt="hand icon" 
                        className="header__user-icon-hand" 
                        />
                     </figcaption>
                </figure>

                <div className="header__description">
                    <h1 className="header__title">
                        {t("header.title")}
                    </h1>
                    <p className="header__subtitle">
                        {t("header.subtitle")}
                    </p>
                </div>

                <button className="download__button-resume">
                    {t("resume.button")}

                    <img src={assets.download_icon} alt="download resume icon" className="download__button-image" />
                </button>
            </div>
        </header>
    )
}

export default Header