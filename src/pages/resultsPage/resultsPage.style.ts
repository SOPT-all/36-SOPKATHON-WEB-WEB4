import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Wrapper = css`
  display: flex;
  flex-direction : column;
  padding-top : 8.5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 100%;
`;

export const title = css`
    color: ${theme.colors['text-primary']};
  ${theme.fonts['head-b-24']};
`;

export const container = css`
    width : 20rem;
   height : 20rem;
  display: flex;
  margin-top : 2.4rem;
  margin-bottom : 1.5rem;
  background-color : #d9d9d9;
`;

export const location = css`
  margin-bottom : 0.3rem;
      color: ${theme.colors['text-sub2']};
  ${theme.fonts['body1-sb-16']};
`;

export const drink = css`
  margin-bottom : 1.6rem;
      color: ${theme.colors['text-primary']};
  ${theme.fonts['title1-sb-20']};
`;

export const content = css`
  width : 26.7rem;
  text-align : center;
        color: ${theme.colors['text-sub1']};
  ${theme.fonts['body2-r-14']};
`;