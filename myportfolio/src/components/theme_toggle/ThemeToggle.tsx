import { useEffect, useState } from 'react'
import './theme-toggle.css'
import { assets } from '../../assets/img/assets'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const darkMode = savedTheme === 'dark' || (!savedTheme && prefersDark)

    setIsDark(darkMode)
    document.documentElement.classList.toggle('dark', darkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <div className="theme-toggle">
      <label className="theme-toggle__switch">
        <input
          type="checkbox"
          className="theme-toggle__checkbox"
          checked={isDark}
          onChange={toggleTheme}
        />
        <span className="theme-toggle__slider">
          <span className="theme-toggle__thumb">
            <img
              src={isDark ? assets.moon : assets.sun}
              alt={isDark ? 'Dark mode' : 'Light mode'}
              className="theme-toggle__icon"
            />
          </span>
        </span>
      </label>
    </div>
  )
}

export default ThemeToggle


