import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Inter', sans-serif;
    background-color: #f9fafb;
    color: #1f2937;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow-x: hidden;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  h1 {
    margin: 0;
  }
`
