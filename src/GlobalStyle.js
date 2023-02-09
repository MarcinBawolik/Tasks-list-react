import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: rgb(230, 227, 227);
  word-break: break-word;
  font-family: 'Dancing Script', cursive;
  font-family: 'Lato', sans-serif;
}
`;