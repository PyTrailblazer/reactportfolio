import React from 'react'
import { useTranslation } from 'react-i18next'
import './header.css'
import { assets } from '../../assets/img/assets'

const Header = () => {
    const { t, i18n } = useTranslation()
  
  
    return (
        <header className='header'>
            {t("header.title")}
        </header>
    )
}

export default Header