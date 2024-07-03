import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./LandingPage.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/inter";

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <LandingPage />
    </React.StrictMode>
  </ThemeProvider>
);
