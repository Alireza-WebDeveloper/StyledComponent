import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightThene } from "../../Utils/theme";
import React from "react";
import { GlobalStyled } from "../../Utils/global";
const ThemeContext = React.createContext({});

interface StyledComponentThemeProviderProps {
  children: React.ReactNode;
}

const StyledComponentThemeProvider: React.FC<
  StyledComponentThemeProviderProps
> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightThene}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default StyledComponentThemeProvider;
