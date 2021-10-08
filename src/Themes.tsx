import React, { useState, createContext } from "react";

import { createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";

export const materialTheme = createTheme({
  palette: {
    primary: {
      main: "#05afe1",
    },
  },
});

export const theme = {
  dark: {
    background: "#06090b",
    text: "white",
    nav: "#212529",
    navIcon: "white",
  },
  light: {
    background: "#e8ffff",
    text: "#06090b",
    nav: "#adb5bd",
    navIcon: "#06090b",
  },
};

export const ThemeContext = createContext({
  currentTheme: theme.dark,
  setTheme: (_theme: any) => {},
});
export const NameContext = createContext({
  nameValue: "",
  setNameValue: (_name: any) => {},
});

function ThemeProvider({ children, props }: { children: any; props: any }) {
  const [currentTheme, setTheme] = useState(theme.dark);
  const [nameValue, setNameValue] = useState("");

  const value = { currentTheme, setTheme };
  const namingval = { nameValue, setNameValue };
  return (
    <ThemeContext.Provider {...props} value={value}>
      <NameContext.Provider {...props} value={namingval}>
        {children}
      </NameContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
