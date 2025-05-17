import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const buttonStyle = css`
  color: ${theme.colors['text-white']};
  background-color: ${theme.colors['color-primary']};
  ${theme.fonts['title2-sb-18']};
  width: 33.9rem;
  height: 5.8rem;
  border-radius: .8rem;
  cursor: pointer;
  border: none;
`;
