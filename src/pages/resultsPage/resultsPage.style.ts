import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors['bg-gray2']};
`;

export const topSection = css`
  padding-top: 8.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const bottomSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const title = css`
  color: ${theme.colors['text-primary']};
  ${theme.fonts['head-b-24']};
  margin-bottom: 2.4rem;
`;

export const container = css`
  width : 20rem;
  height : 20rem;
  display: flex;
  margin-bottom : 2.4rem;
  background-color : #d9d9d9;
`;

export const infoContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.4rem;
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

export const resultBox = css`
  display: flex;
  width: 339px;
  height: 160px;
  padding: 20px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${theme.colors['color-sub1']};
  background: ${theme.colors['bg-white']};
  margin-bottom: 2rem;
`;