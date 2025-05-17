import { css } from '@emotion/react';
import { fadeIn, fadeOut } from '@styles/animations';

export const Wrapper = (isVisible: boolean, isLeaving: boolean) => css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 1.8rem;
  opacity: 0;
  animation: ${isLeaving ? fadeOut : fadeIn} 0.5s ease-in-out forwards;
`;

export const TitleContainer = css`
  position: absolute;
  top: 12.5rem;
  left: 0;
  right: 0;
  padding: 0 1.8rem;
`;

export const InputFieldContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  padding-top: 5rem;
  position: relative;
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
