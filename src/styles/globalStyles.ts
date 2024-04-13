import { css } from '@emotion/react';

const globalStyles = css`
  html {
    font-size: 62.5%;
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
`;

export default globalStyles;
