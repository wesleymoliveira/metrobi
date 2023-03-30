import React from "react"
import appTheme from "./theme"
import { ThemeProvider } from "styled-components"

export const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
}