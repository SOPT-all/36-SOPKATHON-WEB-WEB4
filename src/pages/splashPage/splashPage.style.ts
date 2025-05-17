import { css, keyframes } from '@emotion/react';
import theme from '../../styles/theme';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Wrapper = css`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors['color-primary']};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = css`
  width: 12.9rem;
  height: 13.4rem;
  margin-bottom: 2.4rem;
`;

export const Title = css`
  color: ${theme.colors['text-white']};
  ${theme.fonts['title2-sb-18']}
  text-align: center;
  line-height: 1.25;
  word-break: keep-all;
  max-width: 16.5rem;
`;

export const fadeAnimation = (isFading: boolean) => css`
  opacity: ${isFading ? 0 : 1};
  transition: opacity 1s ease-out;
  animation: ${isFading ? fadeOut : 'none'} 1s ease-out;
`; 