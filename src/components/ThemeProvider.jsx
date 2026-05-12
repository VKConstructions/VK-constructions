import React from "react";
import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../utils/themeContext";

const storageKey = "vk-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  try {
    const savedTheme = window.localStorage?.getItem(storageKey);
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  } catch {
    return "light";
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage?.setItem(storageKey, theme);
    } catch {
      // Theme still applies for the current page when storage is unavailable.
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
