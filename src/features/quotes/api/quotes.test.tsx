import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { getQuote, getErrorMessage } from "./quotes"
import { QuoteCard } from "../components/QuoteCard"

const mockQuote = { id: 1, quote: "Test quote", author: "Test Author" }

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockQuote),
    }),
  )
})

describe("getQuote", () => {
  it("returns a quote", async () => {
    const quote = await getQuote()
    expect(quote).toEqual(mockQuote)
  })
})

describe("getErrorMessage", () => {
  it("returns error message from Error object", () => {
    expect(getErrorMessage(new Error("oops"))).toBe("Error: oops")
  })

  it("returns fallback for unknown error", () => {
    expect(getErrorMessage("unknown")).toBe("Something went wrong.")
  })
})

describe("QuoteCard", () => {
  it("renders without crashing", () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    })
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <QuoteCard />
      </QueryClientProvider>,
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
