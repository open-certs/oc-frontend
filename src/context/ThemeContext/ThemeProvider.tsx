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
    console.log("toggle clicked");
    const theme = localStorage.getItem("theme");
    if (theme) {
      console.log("if case with current theme = " + theme);
      const changedTheme = theme === "dark" ? "light" : "dark";
      console.log("changed theme = " + changedTheme);
      const root = window.document.documentElement;
      root.classList.remove(theme);
      console.log(changedTheme + " class added");
      root.classList.add(changedTheme!);
      dispatch({
        type: "CHANGE",
        payload: changedTheme,
      });
    } else {
      console.log("else case");
      dispatch({
        type: "CHANGE",
        payload: "dark",
      });
    }
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme"); //dark
    console.log("theme = " + theme);
    if (!theme) {
      dispatch({
        type: "CHANGE",
        payload: "dark",
      });
      const root = window.document.documentElement;
      console.log("initialised to dark theme");
      root.classList.remove("light");
      root.classList.add("dark");
      return;
    }

    const changedTheme = theme === "dark" ? "light" : "dark"; //light
    const root = window.document.documentElement;

    root.classList.remove(changedTheme);
    console.log(theme + " class added");
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
