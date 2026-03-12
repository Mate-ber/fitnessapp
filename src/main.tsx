import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./theme"

import { BrowserRouter, Routes, Route } from "react-router"
import { MainLayout } from "./layouts/MainLayout"
import { SecondaryLayout } from "./layouts/SecondaryLayout"
import { HomePage } from "./pages/HomePage"
import { StatsPage } from "./pages/StatsPage"
import { AboutPage } from "./pages/AboutPage"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route element={<SecondaryLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/stats" element={<StatsPage />} />
                </Route>
                <Route path="/about" element={<AboutPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>,
)