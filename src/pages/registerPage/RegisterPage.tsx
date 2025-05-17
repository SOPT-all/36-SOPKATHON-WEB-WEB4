import { useState, useEffect } from 'react';
import * as S from './registerPage.style';
import InputField from './InputField';
import Button from '@components/button/Button';
import TitleContainer from '@components/titleContainer/TitleContainer';
import { useNavigate } from 'react-router-dom';
import usePageTransition from '@hooks/usePageTransition';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [hasInputError, setHasInputError] = useState(false);
  const navigate = useNavigate();
  const { isVisible, isLeaving, navigateWithFade } = usePageTransition();

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleErrorChange = (hasError: boolean) => {
    setHasInputError(hasError);
  };

  const handleButtonClick = () => {
    console.log('이름 제출:', name);
    // 사용자 정보 저장 후 파트 선택 페이지로 이동
    navigateWithFade('/part');
  };

  useEffect(() => {
    setIsButtonEnabled(name.length > 0 && !hasInputError);
  }, [name, hasInputError]);

  return (
    <div css={S.Wrapper(isVisible, isLeaving)}>
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
