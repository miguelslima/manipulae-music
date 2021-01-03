import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: ${(props) => props.theme.colors.text};
  }

  html, body, #root {
    max-height: 100vh; 
    max-width: 100vw;

    width: 100%;
    height: 100vh;

  }

  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', 
                  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                  'Helvetica Neue', sans-serif;
    outline: 0;
  }

  html {
    background: ${(props) => props.theme.colors.background};
  }

  :root {
    --primary: #D9D9D9;
    --secondary: #15181c;
    --search: #202327;
    --white: #000;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;
    --like: #e8265e;
    --twitter: #33a1f2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2c8ed6;
  }
`;
