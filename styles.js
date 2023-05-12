import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  --white: #FFFFFF;
  --black: #000000;
  --dark-green: #727A43;
  --highlight-green: #9BA55F;
  --beige: #FFF8ED;
  --background-green: #EEF2E5;
  --error: ##eb4034;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--background-green);
  }
`;
