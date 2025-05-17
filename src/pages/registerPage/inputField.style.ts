import { css } from '@emotion/react';
import theme from '@styles/theme';

export const InputContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const InputLabel = css`
  color: ${theme.colors['text-sub3']};
  ${theme.fonts['body2-r-14']}
  word-wrap: break-word;
`;

export const InputWrapper = css`
  width: 100%;
  height: 5.7rem;
  background: ${theme.colors['bg-white']};
  overflow: hidden;
  border-radius: 0.8rem;
  outline: 0.1rem ${theme.colors['bg-gray1']} solid;
  outline-offset: -0.1rem;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = css`
  width: 100%;
  height: 100%;
  padding: 0 1.6rem;
  color: ${theme.colors['text-primary']};
  ${theme.fonts['body2-r-14']}
  border: none;
  outline: none;

  &::placeholder {
    color: ${theme.colors['text-sub3']};
    text-align: left;
  }
`;

export const IconWrapper = css`
  position: absolute;
  right: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`; 