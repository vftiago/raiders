import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "./index.css";
import { createTheme, DEFAULT_THEME, MantineProvider } from "@mantine/core";
import Game from "./Game";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme = createTheme({
  colors: {
    dark: [
      "#eeeeee",
      DEFAULT_THEME.colors.dark[1],
      DEFAULT_THEME.colors.dark[2],
      DEFAULT_THEME.colors.dark[3],
      DEFAULT_THEME.colors.dark[4],
      DEFAULT_THEME.colors.dark[5],
      DEFAULT_THEME.colors.dark[6],
      "#121212",
      DEFAULT_THEME.colors.dark[8],
      DEFAULT_THEME.colors.dark[9],
    ],
  },
});

root.render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Game />
    </MantineProvider>
  </React.StrictMode>,
);
