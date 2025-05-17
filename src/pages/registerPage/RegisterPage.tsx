import { useState, useEffect } from 'react';
import * as S from './registerPage.style';
import InputField from './InputField';
import Button from '@components/button/Button';
import TitleContainer from '@components/titleContainer/TitleContainer';
import { useNavigate } from 'react-router-dom';
import usePageTransition from '@hooks/usePageTransition';
import { registerUser } from '../../apis/users';
import { useUserContext } from '../../contexts/UserContext';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [hasInputError, setHasInputError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { isVisible, isLeaving, navigateWithFade } = usePageTransition();
  const { setUserInfo } = useUserContext();

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleErrorChange = (hasError: boolean) => {
    setHasInputError(hasError);
  };

  const handleButtonClick = async () => {
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      setIsButtonEnabled(false);
      
      const result = await registerUser(name);
      
      // 사용자 정보를 Context에 저장
      setUserInfo(name, result.token, result.isExistingUser);
      
      console.log('사용자 등록 성공:', { name, token: result.token, isExistingUser: result.isExistingUser });
      
      // 파트 선택 페이지로 이동
      navigateWithFade('/part');
    } catch (error) {
      console.error('사용자 등록 실패:', error);
      // 에러 처리를 위한 추가 로직이 필요하다면 여기에 구현
    } finally {
      setIsSubmitting(false);
      setIsButtonEnabled(true);
    }
  };

  useEffect(() => {
    setIsButtonEnabled(name.length > 0 && !hasInputError && !isSubmitting);
  }, [name, hasInputError, isSubmitting]);

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
          text={isSubmitting ? "처리중..." : "시작하기"}
          isEnabled={isButtonEnabled}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
