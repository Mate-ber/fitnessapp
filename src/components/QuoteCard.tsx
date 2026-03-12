import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Paper, Typography, Box, CircularProgress } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import { useQuote } from "../api/useQuote.ts"
import { getErrorMessage } from "../api/quotes"

const QuoteContent: React.FC = () => {
    const { data: quote } = useQuote()

    if (!quote) return null

    return (
        <Box sx={{ textAlign: "center" }}>
            <FormatQuoteIcon color="primary" />
            <Typography variant="body1" fontStyle="italic" sx={{ mb: 1 }}>
                {quote.quote}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                — {quote.author}
            </Typography>
        </Box>
    )
}

export const QuoteCard: React.FC = () => {
    return (
        <Paper elevation={3} sx={{ mt: 3, p: 3 }}>
            <ErrorBoundary
                fallbackRender={({ error, resetErrorBoundary }) => (
                    <Box sx={{ textAlign: "center" }}>
                        <Typography color="error">{getErrorMessage(error)}</Typography>
                        <Typography
                            component="button"
                            onClick={resetErrorBoundary}
                            sx={{ mt: 1, cursor: "pointer", color: "primary.main" }}
                        >
                            Retry
                        </Typography>
                    </Box>
                )}
            >
                <Suspense
                    fallback={
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <CircularProgress size={24} />
                        </Box>
                    }
                >
                    <QuoteContent />
                </Suspense>
            </ErrorBoundary>
        </Paper>
    )
}