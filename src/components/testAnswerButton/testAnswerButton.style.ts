/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import theme from '@styles/theme';

export const buttonStyle = (selected: boolean) => css`
  width: 33.9rem;
  height: 6.7rem;
  padding: 0rem 2.4rem;
  border-radius: 0.8rem;
  border: ${selected ?  `0.1rem solid ${theme.colors['color-primary']}` :  `0.1rem solid ${theme.colors['bg-gray1']}`};
  ${theme.fonts['body1-sb-16']};
  background-color: ${selected ?  theme.colors['color-sub2'] :  theme.colors['bg-white']};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${selected ?  theme.colors['bg-gray1'] :  theme.colors['bg-white']};
  }
`