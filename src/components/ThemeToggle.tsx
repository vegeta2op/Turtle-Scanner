"use client"
import { useTheme } from "@/lib/use-theme"
import { Button } from "./ui/Button"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme} className="relative">
      <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
