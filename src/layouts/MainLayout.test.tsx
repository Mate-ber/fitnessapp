import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, it } from "vitest"
import { MainLayout } from "./MainLayout"

describe("MainLayout", () => {
    it("renders without crashing", () => {
        render(
            <MemoryRouter>
                <MainLayout />
            </MemoryRouter>
        )
    })
})