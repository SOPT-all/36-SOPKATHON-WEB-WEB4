import { css } from '@emotion/react';
import theme from '@styles/theme';

export const ButtonDisabled = css`
  width: 100%;
  height: 5.8rem;
  background: ${theme.colors['bg-gray1']};
  border-radius: 0.8rem;
  border: none;
  text-align: center;
  color: ${theme.colors['text-sub2']};
  ${theme.fonts['title2-sb-18']}
  cursor: not-allowed;
`;

export const ButtonEnabled = css`
  width: 100%;
  height: 5.8rem;
  background: ${theme.colors['color-primary']};
  border-radius: 0.8rem;
  border: none;
  text-align: center;
  color: ${theme.colors['text-white']};
  ${theme.fonts['title2-sb-18']}
  cursor: pointer;
`; 