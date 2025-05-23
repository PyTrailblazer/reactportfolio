import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import Navbar from './components/navbar/Navbar'

import "./styles/main.css"
import Header from './components/header/Header'

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // Устанавливаем title при загрузке и при смене языка
    document.title = t("title_main")
  }, [i18n.language, t]) // Обновлять при смене языка

  const handleChangeLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
    </div>
  )
}

export default App


