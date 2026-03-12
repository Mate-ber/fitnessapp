import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, it } from "vitest"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HomePage } from "./HomePage"

describe("HomePage", () => {
  it("renders without crashing", () => {
    const queryClient = new QueryClient()
    render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </QueryClientProvider>,
    )
  })
})