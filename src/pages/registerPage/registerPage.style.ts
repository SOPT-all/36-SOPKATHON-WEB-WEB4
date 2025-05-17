import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Wrapper = css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 1.6rem;
`;

export const TitleContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  padding-top: 12.5rem;
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

export const InputContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const InputFieldContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  padding-top: 5rem;
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
    text-align: center;
  }
`;

export const ButtonContainer = css`
  width: 100%;
  height: 5.8rem;
  padding-top: 19.4rem;
`;
