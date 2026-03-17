import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, it } from "vitest"
import { ThemeProvider } from "../../context/Theme/ThemeProvider"
import { MainLayout } from "./MainLayout"

describe("MainLayout", () => {
  it("renders without crashing", () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <MainLayout />
        </MemoryRouter>
      </ThemeProvider>,
    )
  })
})
