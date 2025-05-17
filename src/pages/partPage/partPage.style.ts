import { css } from '@emotion/react';
import theme from '@styles/theme';
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

export const GridContainer = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(3, auto);
  gap: 0.7rem;
  padding-top: 7.2rem;
`;

export const Grid = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.6rem;
  height: 6.1rem;
  background-color: ${theme.colors['bg-gray2']};
  ${theme.fonts['body1-sb-16']}  
  color: ${theme.colors['text-sub2']};
  cursor: pointer;
  border-radius: 0.8rem;
`;

export const SelectedGrid = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.6rem;
  height: 6.1rem;
  background-color: ${theme.colors['color-sub2']};
  ${theme.fonts['body1-sb-16']}  
  color: ${theme.colors['color-primary']};
  cursor: pointer;
  border-radius: 0.8rem;
`;

export const ButtonContainer = css`
  width: 100%;
  height: 5.8rem;
  position: absolute;
  bottom: 9.6rem;
  left: 0;
  right: 0;
  padding: 0 1.8rem;
`;

export const EnabledBtn = css`
 background-color: ${theme.colors['color-primary']};
 color: ${theme.colors['text-white']};
`;
