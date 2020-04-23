import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  html {
    font-size: 62.5%;
  }

  body {
    transition: .5s;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    /* background-image: url(${({ theme }) => theme.bgImage});
    background-attachment: fixed;
    background-size: cover; */

  }

`;

export default GlobalStyle;
