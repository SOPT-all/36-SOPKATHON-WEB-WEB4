import { useState, useEffect } from 'react';
import * as S from './registerPage.style';
import InputField from './InputField';
import Button from './Button';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleButtonClick = () => {
    console.log('이름 제출:', name);
    // 여기에 제출 로직 추가
  };

  useEffect(() => {
    setIsButtonEnabled(name.length > 0);
  }, [name]);

  return (
    <div css={S.Wrapper}>
      <div css={S.TitleContainer}>
        <div css={S.Title}>이름을 입력해주세요</div>
        <div css={S.SubTitle}>본인의 이름을 적어주세요</div>
      </div>
      
      <div css={S.InputFieldContainer}>
        <InputField
          label="이름"
          value={name}
          onChange={handleNameChange}
          placeholder="최대 4글자로 입력해주세요"
          maxLength={4}
        />
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
