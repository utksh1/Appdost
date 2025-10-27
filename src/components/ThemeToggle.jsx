import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      style={{
        backgroundColor: isDark ? '#1e293b' : '#e2e8f0'
      }}
      aria-label="Toggle theme"
    >
      {/* Toggle Circle */}
      <motion.span
        className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white shadow-lg"
        animate={{
          x: isDark ? 4 : 36
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      >
        {isDark ? (
          <HiMoon className="text-sm text-slate-700" />
        ) : (
          <HiSun className="text-sm text-yellow-500" />
        )}
      </motion.span>
      
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <HiSun className="text-xs text-yellow-300 opacity-70" />
        <HiMoon className="text-xs text-slate-400 opacity-70" />
      </div>
    </button>
  )
}

export default ThemeToggle
