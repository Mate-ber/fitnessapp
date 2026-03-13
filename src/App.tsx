import { BrowserRouter, Routes, Route } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { SecondaryLayout } from "./layouts/SecondaryLayout";
import { HomePage } from "./pages/HomePage";
import { StatsPage } from "./pages/StatsPage";
import { AboutPage } from "./pages/AboutPage";

export function App() {
  return (
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
  );
}
