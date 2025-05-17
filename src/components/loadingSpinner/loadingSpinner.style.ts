import { css, keyframes } from '@emotion/react';
import theme from '@styles/theme';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.85);
    opacity: 0.7;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.85);
    opacity: 0.7;
  }
`;

export const loadingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 1.8rem;
  gap: 2.4rem;
`;

export const spinnerContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const spinner = css`
  width: 6rem;
  height: 6rem;
  border: 0.6rem solid ${theme.colors['color-sub2']};
  border-top: 0.6rem solid ${theme.colors['color-primary']};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const loadingText = css`
  ${theme.fonts['title1-sb-20']};
  color: ${theme.colors['color-primary']};
  min-height: 2.4rem;
`; 