import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./context/Theme";
import { MainLayout } from "./layouts/MainLayout";
import { SecondaryLayout } from "./layouts/SecondaryLayout";
import { HomePage } from "./pages/HomePage";
import { StatsPage } from "./pages/StatsPage";
import { AboutPage } from "./pages/AboutPage";

const queryClient = new QueryClient();

const root = document.getElementById("root");
if (!root) throw new Error("Cannot find #root");

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
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
);
