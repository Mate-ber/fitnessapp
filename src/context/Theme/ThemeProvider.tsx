import { useCallback, useMemo, useState } from "react"
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles"
import { ThemeContext, type ThemeMode } from "./ThemeContext"

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>("dark")

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#4CAF50" },
          secondary: { main: "#ff9800" },
          background: {
            default: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
            paper: mode === "dark" ? "#2a2a2a" : "#ffffff",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial",
          h4: { fontWeight: 700 },
        },
      }),
    [mode],
  )

  const context = useMemo(() => ({ mode, toggleTheme }), [mode, toggleTheme])

  return (
    <ThemeContext value={context}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext>
  )
}
