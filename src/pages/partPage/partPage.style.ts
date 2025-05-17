import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Wrapper = css`
  border : 1px solid black;
`;

export const TitleContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  margin-top: 6.9rem;
  margin-left : 2.6rem;
`;

export const Title = css`
  color: ${theme.colors['text-primary']};
  ${theme.fonts['head-b-24']}
  word-wrap: break-word;
`;

export const SubTitle = css`
  color: ${theme.colors['text-sub2']};
  ${theme.fonts['body2-r-14']}
  word-wrap: break-word;
`;

export const GridContainer = css`
  display: grid;
  margin-top: 6.3rem;
  width: 100%;
  padding: 0 1.8rem;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(3, auto);
  gap: 0.7rem;     
`;

export const Grid = css`
display: flex;
justify-content: center;
align-items:center;
  width: 16.6rem;
  height: 6.1rem;
  background-color: ${theme.colors['bg-gray2']};
  ${theme.fonts['body1-sb-16']}  
    color: ${theme.colors['text-sub2']};
`;

export const ButtonContainer = css`
display:flex;
    width: 34rem;
  height: 5.8rem;
  padding-top: 6.4rem;
`;
