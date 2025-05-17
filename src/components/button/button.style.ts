import { css } from '@emotion/react';
import theme from '@styles/theme';

export const buttonStyle = (disabled: boolean) => css`
  width: 3.39rem
  height: 5.8rem
  border-radius: .8rem
  font-size: 1.8rem;
  font-weight: 600;
  border: none;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  color: ${disabled ? '#999' : '#fff'};
  background-color: ${disabled ? '#E0E0E0' : '#000'};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${disabled ? '#E0E0E0' : '#222'};
  }
`;
