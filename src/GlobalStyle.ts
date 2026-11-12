import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: ${({ theme }) => theme.space.none};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeight};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.gradients.page};
    background-attachment: fixed;
    min-height: 100vh;
  }

  h1, h2, p, ul {
    margin: ${({ theme }) => theme.space.none};
    padding: ${({ theme }) => theme.space.none};
  }

  ul {
    list-style: none;
  }

  button, input, select, textarea {
    font: inherit;
    color: inherit;
  }

  :focus-visible {
    outline: ${({ theme }) => theme.sizes.focusRing} solid ${({ theme }) => theme.colors.focus};
    outline-offset: ${({ theme }) => theme.sizes.focusOffset};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;

export default GlobalStyle;
