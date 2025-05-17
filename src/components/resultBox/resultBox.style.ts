import { css } from '@emotion/react';
import theme from '@styles/theme';

export const container = css`
  display: flex;
  width: 33.9rem;
  height: 16rem;
  padding: 2rem 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.8rem;
  border: 1px solid ${theme.colors['color-sub1']};
  background-color: ${theme.colors['bg-gray2']};
  margin-bottom: 2rem;
`;

export const contentContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const subtxt = css`
  color: ${theme.colors['text-sub2']};
  ${theme.fonts['caption-m-12']}
  padding-bottom: 0.8rem;
`;

export const maintxt = css`
  color: ${theme.colors['text-primary']};
  ${theme.fonts['title1-sb-20']}
  padding-bottom: 1.2rem;
`;

export const rowbox = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const linktxt = css`
  color: ${theme.colors['color-primary']};
  ${theme.fonts['body2-sb-14']}
`;

export const icon = css`
  width: 0.4rem;
  height: 0.6rem;
`;

export const character = css`
  width: 12rem;
  height: 12rem;
`;

export const buttonWrapper = css`
  display: flex;
  align-items: center;
`;

export const button = css`
  min-width: 10.5rem;
  min-height: 3.2rem;
  ${theme.fonts['body2-sb-14']}
  padding: 0.8rem 1.2rem;
`;