import { css } from '@emotion/react';

export const ButtonDisabled = css`
  width: 339px;
  height: 58px;
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