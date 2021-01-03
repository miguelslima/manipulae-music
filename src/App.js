import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import GlobalStyle from "./styles/GlobalStyles";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Routes from "./routes";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
