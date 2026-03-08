import { Outlet, Link, useLocation } from "react-router"
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"

export function MainLayout() {
    const location = useLocation()

    return (
        <Box sx={{ minHeight: "100vh", width: "100vw", bgcolor: "background.default" }}>
            <AppBar position="static" color="transparent" elevation={1} sx={{ width: "100vw" }}>
                <Toolbar>
                    <FitnessCenterIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary" fontWeight={700} sx={{ flexGrow: 1 }}>
                        Fitness Tracker
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                            component={Link}
                            to="/"
                            color={location.pathname === "/" || location.pathname === "/stats" ? "primary" : "inherit"}
                        >
                            Tracker
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            color={location.pathname === "/about" ? "primary" : "inherit"}
                        >
                            About
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Outlet />
        </Box>
    )
}