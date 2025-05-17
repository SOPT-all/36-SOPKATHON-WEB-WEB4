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

// 파트 정보 (표시 이름 및 enum 값)
const PART_INFO = [
  { displayName: '기획', enumValue: 'PLAN' },
  { displayName: '디자인', enumValue: 'DESIGN' },
  { displayName: '웹', enumValue: 'WEB' },
  { displayName: '안드로이드', enumValue: 'ANDROID' },
  { displayName: 'iOS', enumValue: 'IOS' },
  { displayName: '서버', enumValue: 'SERVER' }
];

const PartPage = () => {
  const [selectedPartIndex, setSelectedPartIndex] = useState<number | null>(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isVisible, isLeaving, navigateWithFade } = usePageTransition();
  const navigate = useNavigate();
  const { token, setUserInfo, name, isExistingUser } = useUserContext();

  const handleSelectPart = (index: number) => {
    if (selectedPartIndex === index) {
      setSelectedPartIndex(null);
    } else {
      setSelectedPartIndex(index);
    }
  };

  const handleButtonClick = async () => {
    if (isSubmitting || selectedPartIndex === null) return;
    
    try {
      setIsSubmitting(true);
      setIsButtonEnabled(false);
      
      const selectedPart = PART_INFO[selectedPartIndex];
      console.log('파트 선택:', selectedPart.displayName);
      console.log('전송되는 enum 값:', selectedPart.enumValue);
      
      // 선택한 파트를 localStorage에 저장 (로그 출력용)
      localStorage.setItem('selectedPart', selectedPart.displayName);
      
      // API 호출로 파트 업데이트 (enum 값 전송)
      const result = await updateUserPart(token, selectedPart.enumValue);
      
      // 토큰 갱신
      setUserInfo(name, result.token, result.isExistingUser);
      
      console.log('파트 업데이트 성공:', {
        part: selectedPart.displayName,
        enumValue: selectedPart.enumValue,
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
    setIsButtonEnabled(selectedPartIndex !== null);
  }, [selectedPartIndex]);

  return (
    <div css={S.Wrapper(isVisible, isLeaving)}>
      <Back previousPath="/register" />
      <div css={S.TitleContainer}>
        <TitleContainer 
          title="파트를 선택해주세요" 
          subTitle="본인의 파트 역할을 선택해주세요" 
        />
        
        <div css={S.GridContainer}>
          {PART_INFO.map((part, index) => (
            <div
              key={part.enumValue}
              css={[S.Grid, selectedPartIndex === index && S.SelectedGrid]}
              onClick={() => handleSelectPart(index)}
            >
              {part.displayName}
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
