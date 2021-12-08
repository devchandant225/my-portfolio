import React, { createContext, useState } from "react";

export const themesupplier = createContext();

const ThemeProvider = (props) => {
  const [isDark, setisDark] = useState(false);
  const toggleTheme = () => {
    if (!isDark) {
      localStorage.setItem("isDark", true);
      setisDark(true);
    } else {
      localStorage.setItem("isDark", false);
      setisDark(false);
    }
  };
  return (
    <themesupplier.Provider value={{ toggleTheme, isDark }}>
      {props.children}
    </themesupplier.Provider>
  );
};

export default ThemeProvider;
