import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, it } from "vitest"
import { ActivitiesProvider } from "../../features/activities/context/ActivitiesProvider"
import { StatsPage } from "./StatsPage"

describe("StatsPage", () => {
  it("renders without crashing", () => {
    render(
      <ActivitiesProvider>
        <MemoryRouter>
          <StatsPage />
        </MemoryRouter>
      </ActivitiesProvider>,
    )
  })
})
