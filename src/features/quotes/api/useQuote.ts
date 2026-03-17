import { useSuspenseQuery } from "@tanstack/react-query"
import { getQuote } from "./quotes"

export function useQuote() {
  return useSuspenseQuery({
    queryKey: ["quote"],
    queryFn: getQuote,
    staleTime: Infinity,
  })
}
