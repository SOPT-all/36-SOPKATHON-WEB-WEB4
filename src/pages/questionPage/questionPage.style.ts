import { css } from '@emotion/react';
import theme from '@styles/theme';

export const testWrapper = css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.8rem;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const icon = css`
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.6rem;
`;

export const questionContainer = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 0 1.8rem;
    align-items: center;
    margin-top: 2rem;
`;

export const testImg = css`
    width: 12rem;
    height: 12rem;
`;

export const testText = css`
    ${theme.fonts['title1-sb-20']}
`;

export const ButtonContainer = css`
  width: 100%;
  height: 5.8rem;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  padding: 0 1.8rem;
`;