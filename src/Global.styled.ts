import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  color: #000000;
 
}
a{
  text-decoration:none;
}`