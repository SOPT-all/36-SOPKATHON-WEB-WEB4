import * as S from './button.style';

interface ButtonPropTypes {
  text: string;
  isEnabled: boolean;
  onClick?: () => void;
}

const Button = ({ text, isEnabled, onClick }: ButtonPropTypes) => {
  return (
    <button 
      css={isEnabled ? S.ButtonEnabled : S.ButtonDisabled}
      disabled={!isEnabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button; 