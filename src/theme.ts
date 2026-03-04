import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4CAF50",
    },
    secondary: {
      main: "#ff9800",
    },
    background: {
      default: "#1e1e1e",
      paper: "#2a2a2a",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial",
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;
