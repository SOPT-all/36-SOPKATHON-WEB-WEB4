import { css } from '@emotion/react';
import Reset from './reset';
import theme from './theme';
import './fonts/fonts.css';

const GlobalStyle = css`
  ${Reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: ${theme.colors['text-sub3']};
    font-size: 62.5%;
    font-family: 'Pretendard', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 375px;
    background-color: ${theme.colors['bg-white']};
  }
`;

export default GlobalStyle;
