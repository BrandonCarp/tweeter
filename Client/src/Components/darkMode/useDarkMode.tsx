import { useState, useEffect} from "react"

type ThemeName = 'light' | 'dark' | string;
export const useDarkMode = () => {
  
  const [theme, setTheme] = useState<ThemeName>('light');
  const colorTheme: ThemeName = theme === 'light' ? 'dark' : 'light';


  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;

    root.classList.add(theme);
    root.classList.remove(colorTheme);

  }, [setTheme, colorTheme])
}