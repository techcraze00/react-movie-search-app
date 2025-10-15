import React, { useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'app-theme-preference'

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch (_) {}
  return 'dark'
}

const applyTheme = (theme) => {
  const root = document.documentElement
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light')
  } else {
    root.removeAttribute('data-theme')
  }
}

const SwitchTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch (_) {}
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="fixed top-[20px] right-[20px] z-[9999] pointer-events-auto rounded-full px-4 py-2 text-sm font-medium bg-light-100/10 text-white backdrop-blur-md border border-white/10 hover:bg-light-100/20 transition-colors"
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  )
}

export default SwitchTheme


