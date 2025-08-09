"use client"
import { useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
      document.documentElement.classList.toggle("dark", localTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return { theme, toggleTheme }
}

