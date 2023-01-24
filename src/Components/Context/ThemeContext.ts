import { createContext } from "react";
import { ThemeName } from "../Types/ThemeName";



type ThemeContextType = {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
}
export const ThemeContext = createContext<any>({} as ThemeContextType)

