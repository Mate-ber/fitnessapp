export type Quote = {
    id: number
    quote: string
    author: string
}

export async function getQuote(): Promise<Quote> {
    const response = await fetch("https://dummyjson.com/quotes/random")
    if (!response.ok) {
        const text = await response.text()
        throw new Error(`Cannot get quote. ${text}`)
    }
    const data = (await response.json()) as Quote
    return data
}

export function getErrorMessage(error: unknown) {
    if (error instanceof Error) {
        return `Error: ${error.message}`
    }
    return "Something went wrong."
}