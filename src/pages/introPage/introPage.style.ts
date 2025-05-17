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

export const ContentWrapper = css`
  display: flex;
  flex-direction: column;
  padding-top: 12.5rem;
`;

export const CharacterContainer = css`
  width: 20rem;
  height: 20rem;
  margin-top: 4.6rem;
  align-self: center;
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
