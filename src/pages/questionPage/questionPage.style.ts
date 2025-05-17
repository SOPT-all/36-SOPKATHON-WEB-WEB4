import { css } from '@emotion/react';
import theme from '@styles/theme';
import { fadeIn, fadeOut } from '@styles/animations';

export const Wrapper = (isVisible: boolean, isLeaving: boolean) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.8rem;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${isLeaving ? fadeOut : fadeIn} 0.5s ease-in-out forwards;
`;

export const topContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 8rem;
    margin-bottom: 4rem;
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

export const buttonGroupContainer = css`
    width: 100%;
    position: absolute;
    bottom: calc(2rem + 5.8rem + 4rem);
    left: 0;
    right: 0;
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