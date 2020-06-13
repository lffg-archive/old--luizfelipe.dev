import { createGlobalStyle } from 'styled-components';
import yiq from 'yiq';

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
    color: #000;
    line-height: 1.5;
  }

  a {
    --color: ${(props) => props.theme.colors.link};
    --hoverColor: ${(props) => yiq(props.theme.colors.link)};
    --hoverBackground: ${(props) => props.theme.colors.link};
    --focus: #000;

    border-bottom: solid 1px currentColor;
    color: var(--color);
    text-decoration: none;

    &:hover {
      background-color: var(--hoverBackground);
      color: var(--hoverColor);
    }

    &:focus {
      outline: dashed 3px var(--focus);
    }
  }
`;
