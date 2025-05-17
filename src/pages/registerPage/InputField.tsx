import { useState, useEffect } from 'react';
import * as S from './inputField.style';
import XIcon from '../../assets/svgs/XIcon';

interface InputFieldPropTypes {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength: number;
  isNameField?: boolean;
}

const InputField = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  maxLength,
  isNameField = false
}: InputFieldPropTypes) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    if (isNameField && value) {
      // 숫자나 특수문자 검사 (한글, 영문만 허용)
      const hasInvalidChar = /[0-9\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\;\:\'\"\,\.\/\<\>\?]/.test(value);
      setHasError(hasInvalidChar);
      console.log('입력값:', value, '유효하지 않은 문자 포함:', hasInvalidChar);
    } else {
      setHasError(false);
    }
  }, [value, isNameField]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      onChange(inputValue);
    }
  };

  const handleClearInput = () => {
    onChange('');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div css={S.InputContainer}>
      <div css={S.InputLabel}>{label}</div>
      <div css={S.InputWrapper(isFocused, hasError)}>
        <input 
          css={S.Input}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {value && (
          <div css={S.IconWrapper} onClick={handleClearInput}>
            <XIcon />
          </div>
        )}
      </div>
      <div css={S.ErrorMessage} style={{ visibility: hasError && isNameField ? 'visible' : 'hidden' }}>
        이름에는 한글과 영문만 입력 가능합니다.
      </div>
    </div>
  );
};

export default InputField; 