import { useState, useEffect } from 'react';
import * as S from './inputField.style';

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
      </div>
    </div>
  );
};

export default InputField; 