import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import * as S from './partPage.style';
import Back from '@components/back/Back';
import Button from '@components/button/Button';
import TitleContainer from '@components/titleContainer/TitleContainer';
import usePageTransition from '@hooks/usePageTransition';
import { useNavigate } from 'react-router-dom';
import { updateUserPart } from '../../apis/users';
import { useUserContext } from '../../contexts/UserContext';

const parts = ['기획', '디자인', '웹', '안드로이드', 'IOS', '서버'];

const PartPage = () => {
  const [part, setPart] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isVisible, isLeaving, navigateWithFade } = usePageTransition();
  const navigate = useNavigate();
  const { token, setUserInfo, name, isExistingUser } = useUserContext();

  const handleSelectPart = (value: string) => {
    if (part === value) {
      setPart('');
      setIsButtonEnabled(false)
    } else {
      setPart(value);
    }
  };

  const handleButtonClick = async () => {
    if (isSubmitting || !part) return;
    
    try {
      setIsSubmitting(true);
      setIsButtonEnabled(false);
      
      console.log('파트 선택:', part);
      
      // 선택한 파트를 localStorage에 저장 (로그 출력용)
      localStorage.setItem('selectedPart', part);
      
      // API 호출로 파트 업데이트
      const result = await updateUserPart(token, part);
      
      // 토큰 갱신
      setUserInfo(name, result.token, result.isExistingUser);
      
      console.log('파트 업데이트 성공:', {
        part,
        token: result.token,
        isExistingUser: result.isExistingUser
      });
      
      // 파트 선택 후 질문 페이지로 이동
      navigateWithFade('/question');
    } catch (error) {
      console.error('파트 업데이트 실패:', error);
      // 에러 처리를 위한 추가 로직이 필요하다면 여기에 구현
    } finally {
      setIsSubmitting(false);
      setIsButtonEnabled(true);
    }
  };

  useEffect(() => {
    setIsButtonEnabled(part !== '');
  }, [part]);

  return (
    <div css={S.Wrapper(isVisible, isLeaving)}>
      <Back previousPath="/register" />
      <div css={S.TitleContainer}>
        <TitleContainer 
          title="파트를 선택해주세요" 
          subTitle="본인의 파트 역할을 선택해주세요" 
        />
        
        <div css={S.GridContainer}>
          {parts.map((p) => (
            <div
              key={p}
              css={[S.Grid, part === p && S.SelectedGrid]}
              onClick={() => handleSelectPart(p)}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
      
      <div css={S.ButtonContainer}>
        <Button 
          text={isSubmitting ? "처리중..." : "다음"} 
          isEnabled={isButtonEnabled && !isSubmitting} 
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default PartPage;
