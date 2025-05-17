import { css } from '@emotion/react';

export const InputContainer = css`
  width: 339px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
`;

export const InputLabel = css`
  align-self: stretch;
  color: #AFAFAF;
  font-size: 14px;
  font-family: 'Pretendard Variable';
  font-weight: 400;
  word-wrap: break-word;
`;

export const InputWrapper = css`
  align-self: stretch;
  height: 57px;
  position: relative;
  background: white;
  overflow: hidden;
  border-radius: 8px;
  outline: 1px #E8E8E8 solid;
  outline-offset: -1px;
`;

export const Input = css`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  color: #020202;
  font-size: 14px;
  font-family: 'Pretendard Variable';
  font-weight: 400;
  border: none;
  outline: none;

  &::placeholder {
    color: #AFAFAF;
    text-align: center;
  }
`; 