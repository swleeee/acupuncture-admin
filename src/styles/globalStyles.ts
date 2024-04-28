import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

const globalStyles = () => css`
  ${emotionReset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    height: 100%;
  }
  html {
    font-size: 62.5%;
  }
  body {
    overflow-y: overlay;
  }

  #root {
    width: 100%;
    height: 100%;
    font-family: 'Pretendard', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input,
  textarea {
    outline: 0;
  }

  li,
  ol,
  ul {
    list-style: none;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export default globalStyles;
