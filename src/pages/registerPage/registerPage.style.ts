import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Wrapper = css`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  overflow: hidden;
`;

export const TitleContainer = css`
  width: 20rem;
  left: 26px;
  top: 125px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`;

export const Title = css`
  align-self: stretch;
  color: #020202;
  font-size: 24px;
  font-family: 'Pretendard Variable';
  font-weight: 700;
  word-wrap: break-word;
`;

export const SubTitle = css`
  align-self: stretch;
  color: #6E6E6E;
  font-size: 14px;
  font-family: 'Pretendard Variable';
  font-weight: 400;
  word-wrap: break-word;
`;

export const InputContainer = css`
  width: 339px;
  left: 18px;
  top: 237px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
`;

export const InputFieldContainer = css`
  left: 18px;
  top: 237px;
  position: absolute;
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

export const ButtonDisabled = css`
  width: 339px;
  height: 58px;
  left: 18px;
  top: 513px;
  position: absolute;
  background: #E8E8E8;
  border-radius: 8px;
  border: none;
  text-align: center;
  color: #6E6E6E;
  font-size: 18px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  cursor: not-allowed;
`;

export const ButtonEnabled = css`
  width: 339px;
  height: 58px;
  left: 18px;
  top: 513px;
  position: absolute;
  background: #7556FF;
  border-radius: 8px;
  border: none;
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  cursor: pointer;
`;

export const ButtonContainer = css`
  left: 18px;
  top: 513px;
  position: absolute;
`;
