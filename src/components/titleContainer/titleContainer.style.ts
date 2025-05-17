import { css } from '@emotion/react';
import theme from '@styles/theme';

export const TitleContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
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