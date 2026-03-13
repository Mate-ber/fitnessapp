import { Outlet, NavLink } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../context/useTheme";

export function MainLayout() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Box
      sx={{ minHeight: "100vh", width: "100vw", bgcolor: "background.default" }}
    >
      <AppBar
        position="static"
        color="transparent"
        elevation={1}
        sx={{ width: "100vw" }}
      >
        <Toolbar>
          <FitnessCenterIcon color="primary" sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            color="primary"
            fontWeight={700}
            sx={{ flexGrow: 1 }}
          >
            Fitness Tracker
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Button
              component={NavLink}
              to="/"
              end={false}
              sx={({ palette }) => ({
                "&.active": { color: palette.primary.main },
              })}
              color="inherit"
            >
              Tracker
            </Button>
            <Button
              component={NavLink}
              to="/about"
              sx={({ palette }) => ({
                "&.active": { color: palette.primary.main },
              })}
              color="inherit"
            >
              About
            </Button>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
}
