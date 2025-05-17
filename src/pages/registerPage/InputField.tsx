import { useState, useEffect } from 'react';
import * as S from './inputField.style';
import XIcon from '../../assets/svgs/XIcon';

interface InputFieldPropTypes {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength: number;
}

const InputField = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  maxLength 
}: InputFieldPropTypes) => {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      onChange(inputValue);
    }
  };

  const handleClearInput = () => {
    onChange('');
  };

  return (
    <div css={S.InputContainer}>
      <div css={S.InputLabel}>{label}</div>
      <div css={S.InputWrapper}>
        <input 
          css={S.Input}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        {value && (
          <div css={S.IconWrapper} onClick={handleClearInput}>
            <XIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField; 