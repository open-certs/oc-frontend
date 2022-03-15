import React, { createContext, useEffect, useReducer } from "react";
import { ThemeReducer } from "./ThemeReducer";

export interface defaultThemeType {
  theme: string;
}

const initialTheme: defaultThemeType = {
  theme: "",
};

const ThemeContext = createContext(initialTheme);

export default ThemeContext;
interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialTheme);
  const toggle = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      const changedTheme = theme === "dark" ? "light" : "dark";
      const root = window.document.documentElement;
      root.classList.remove(theme);
      root.classList.add(changedTheme!);
      dispatch({
        type: "CHANGE",
        payload: changedTheme,
      });
    } else {
      dispatch({
        type: "CHANGE",
        payload: "dark",
      });
    }
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme"); //dark
    if (!theme) {
      dispatch({
        type: "CHANGE",
        payload: "dark",
      });
      const root = window.document.documentElement;
      root.classList.remove("light");
      root.classList.add("dark");
      return;
    }

    const changedTheme = theme === "dark" ? "light" : "dark"; //light
    const root = window.document.documentElement;

    root.classList.remove(changedTheme);
    root.classList.add(theme!);
    dispatch({
      type: "CHANGE",
      payload: theme,
    });
  }, []);
  return (
    <ThemeContext.Provider value={{ ...state, toggle } as any}>
      {children}
    </ThemeContext.Provider>
  );
};
