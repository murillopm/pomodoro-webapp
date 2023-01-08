import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px #0ea5e9; */
  }

  body {
    background-color: ${(props) => props.theme.backgroundSlate};
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, Lato, sans-serif;
  }
`
