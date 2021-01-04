import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import GlobalStyle from "./styles/GlobalStyles";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Routes from "./routes";
import Header from "./components/Header";
import store from "./store";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Switch>
            <Routes />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
