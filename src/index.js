import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  spacing: 8,
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
  palette: {
    primary: {
      light: "#d8d8d8",
      main: "#000",
      dark: "#333",
    },
    secondary: {
      main: "#8a2be2",
    },
    error: {
      main: "#EB321E",
      dark: "#d13639",
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiInput: {
      underline: {
        opacity: 1,
        "&&&&:before": {
          bottom: 4,
          borderBottom: "1px solid white",
        },
        "&&&&:after": {
          bottom: 4,
        },
        "&&&&:hover:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        },
      },
      root: {
        fontFamily: '"Quicksand", sans-serif',
        fontWeight: "600",
        fontSize: "14px",
        color: "#4a4a4a",
        // backgroundColor: "#fff",
        border: "none",
        borderRadius: 8,
        transition: "all .3s ease-in-out",
        "&:hover": {
          transition: "all .3s ease-in-out",
        },
        "&$focused": {
          transition: "all .3s ease-in-out",
        },
      },
    },
    MuiFilledInput: {
      root: {
        border: "1px solid #c1c1c1",
        overflow: "hidden",
        backgroundColor: "#fff",
        fontFamily: '"Quicksand", sans-serif',
        fontWeight: "600",
        color: "#4a4a4a",
        fontSize: 15,
        transition: "all .2s ease-in-out",
        borderRadius: 8,
        height: 75,
        padding: "0 4px 8px 4px",
        "&:hover": {
          backgroundColor: "#fff",
          border: "1px solid #FFC700",
          color: "#000",
          transition: "all .2s ease-in-out",
        },
        "&$focused": {
          backgroundColor: "#fff",
          border: "1px solid #FFC700",
        },
        "&$input": {
          padding: "13px 12px 10px",
        },
        "&$error": {
          border: "1px solid red",
          backgroundColor: "#fff0f0",
        },
      },
    },

    //Text Input Labels
    MuiInputLabel: {
      root: {
        fontFamily: '"Quicksand", sans-serif',
        fontWeight: "600",
        color: "#4a4a4a",
        paddingLeft: 4,
        fontSize: 15,
        top: "8px",
        transition: "all .1s ease-in-out",
        "&$shrink": {
          color: "#00000066",
          fontSize: 19,
          left: "-3px",
          top: "2px",
          minWidth: 140,
          fontWeight: "600",
          transition: "all .1s ease-in-out",
        },
        "&$filled": {
          top: "8px",
          transition: "all .1s ease-in-out",
          "&$shrink": {
            left: 0,
            top: "8px",
            fontSize: 18,
            transition: "all .1s ease-in-out",
          },
          "&$focused": {
            color: "##00000066",
          },
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontWeight: 800,
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
