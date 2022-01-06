import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    margin: 0;  
    background-color: #fffffb;
    font-family: -apple-system, Roboto, sans-serif, serif;
    scroll-behavior: smooth;
  }
`

export default GlobalStyle