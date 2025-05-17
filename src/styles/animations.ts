import { css, keyframes } from '@emotion/react';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const fadeInAnimation = css`
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

export const fadeOutAnimation = css`
  animation: ${fadeOut} 0.5s ease-out forwards;
`; 