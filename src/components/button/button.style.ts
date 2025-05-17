import { css } from '@emotion/react';

export const buttonStyle = (disabled: boolean) => css`
  width: 21.1875rem;
  height: 3.625rem;
  border-radius: .5rem;
  font-size: 1.125rem;
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
