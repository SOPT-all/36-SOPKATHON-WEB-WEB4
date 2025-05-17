/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { buttonStyle } from './Button.style';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
  return (
    <button css={buttonStyle(disabled)} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
