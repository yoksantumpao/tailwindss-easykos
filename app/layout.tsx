"use client";

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./globals.css";

interface child {
  children: React.ReactNode;
}

export default function RootLayout({ children }: child) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#113CFC",
      },
      secondary: {
        main: "#3252DF",
      },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
    },
  });

  return (
    <html lang="en">
      <head>
        <title>Easykos</title>
        <meta
          name="description"
          content="Easykos adalah aplikasi manajemen bisnis rumah kos. Kelola dan jelajahi rumah kos impian anda sekarang!"
        />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </head>
      <body>
        <StyledEngineProvider injectFirst={true}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
