import { useState, useEffect } from 'react';
import * as S from './registerPage.style';
import InputField from './InputField';
import Button from '@components/button/Button';
import TitleContainer from '@components/titleContainer/TitleContainer';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [hasInputError, setHasInputError] = useState(false);

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleErrorChange = (hasError: boolean) => {
    setHasInputError(hasError);
  };

  const handleButtonClick = () => {
    console.log('이름 제출:', name);
    // 여기에 제출 로직 추가
  };

  useEffect(() => {
    setIsButtonEnabled(name.length > 0 && !hasInputError);
  }, [name, hasInputError]);

  return (
    <div css={S.Wrapper}>
      <div css={S.TitleContainer}>
      <TitleContainer 
        title="이름을 입력해주세요" 
        subTitle="본인의 이름을 적어주세요" 
      />
      
      <div css={S.InputFieldContainer}>
        <InputField
          label="이름"
          value={name}
          onChange={handleNameChange}
          onErrorChange={handleErrorChange}
          placeholder="최대 4글자로 입력해주세요"
          maxLength={4}
          isNameField={true}
        />
      </div>

      
      </div>
      
      <div css={S.ButtonContainer}>
        <Button 
          text="시작하기"
          isEnabled={isButtonEnabled}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
