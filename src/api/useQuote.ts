import { useQuery } from "@tanstack/react-query"
import { getQuote } from "./quotes"

export function useQuote() {
    return useQuery({
        queryKey: ["quote"],
        queryFn: getQuote,
        staleTime: Infinity,
    })
}