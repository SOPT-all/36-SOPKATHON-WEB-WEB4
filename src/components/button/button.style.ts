import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const buttonStyle = css`
  color: ${theme.colors['text-white']};
  background-color: ${theme.colors['bg-black']};
  ${theme.fonts['title2-sb-18']};
  width: 3.39rem;
  height: 5.8rem;
  border-radius: .8rem;
`;
