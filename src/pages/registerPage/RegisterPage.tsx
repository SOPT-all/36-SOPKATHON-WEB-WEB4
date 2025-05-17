import { useState, useEffect } from 'react';
import * as S from './registerPage.style';
import InputField from './InputField';
import Button from '@components/button/Button';
import TitleContainer from '@components/titleContainer/TitleContainer';
import { useNavigate, Navigate } from 'react-router-dom';
import usePageTransition from '@hooks/usePageTransition';
import { registerUser } from '../../apis/users';
import { useUserContext } from '../../contexts/UserContext';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [hasInputError, setHasInputError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();
  const { isVisible, isLeaving, navigateWithFade } = usePageTransition();
  const { setUserInfo, clearUserInfo, hasValidToken } = useUserContext();

  // 페이지 로드 시 인증 상태 확인
  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticated = hasValidToken();
      console.log('RegisterPage - 인증 상태:', isAuthenticated ? '인증됨' : '인증 안됨');
      
      // 이미 인증된 경우, 파트 페이지로 리디렉션
      if (isAuthenticated) {
        console.log('이미 인증됨, 파트 페이지로 이동합니다.');
        setShouldRedirect(true);
      }
    };
    
    // 약간의 지연을 두고 인증 상태 확인
    const timer = setTimeout(checkAuth, 100);
    return () => clearTimeout(timer);
  }, [hasValidToken]);

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
      
      // 이름 입력 및 API 호출 시에만 명시적으로 기존 정보 초기화
      clearUserInfo();
      
      // 새 이름으로 API 호출
      const result = await registerUser(name);
      
      // 응답 확인 로그
      console.log('API 응답:', result);
      
      if (!result || !result.token) {
        throw new Error('토큰을 받지 못했습니다.');
      }
      
      // 사용자 정보를 Context에 저장
      setUserInfo(name, result.token, result.isExistingUser);
      
      console.log('사용자 등록 성공:', { name, token: result.token, isExistingUser: result.isExistingUser });
      
      // 인증 상태 재확인 후 이동
      setTimeout(() => {
        if (hasValidToken()) {
          console.log('등록 후 인증 상태: 인증됨, 파트 페이지로 이동합니다.');
          navigateWithFade('/part');
        } else {
          console.error('인증 실패: 토큰이 저장되지 않았습니다.');
        }
      }, 100);
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

  // 이미 인증된 경우 리디렉션
  if (shouldRedirect) {
    return <Navigate to="/part" replace />;
  }

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
