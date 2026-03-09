import { Outlet, Link, useLocation } from "react-router";
import { Box, Tabs, Tab, Container } from "@mui/material";

export function SecondaryLayout() {
  const location = useLocation();

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={location.pathname === "/stats" ? "/stats" : "/"}>
          <Tab label="Tracker" value="/" component={Link} to="/" />
          <Tab label="Stats" value="/stats" component={Link} to="/stats" />
        </Tabs>
      </Box>

      <Outlet />
    </Container>
  );
}
