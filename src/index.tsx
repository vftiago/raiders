import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import Game from "./Game";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const theme = {
  fontFamily: "Chakra Petch, sans-serif",
  components: {
    Card: {
      defaultProps: {
        p: "xs",
      },
    },
  },
};

root.render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Game />
    </MantineProvider>
  </React.StrictMode>,
);
