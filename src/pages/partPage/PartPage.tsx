import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import * as S from './partPage.style';
import Back from '@components/back/Back';
import Button from '@components/button/Button';
import TitleContainer from '@components/titleContainer/TitleContainer';
import usePageTransition from '@hooks/usePageTransition';
import { useNavigate } from 'react-router-dom';

const parts = ['기획', '디자인', '웹', '안드로이드', 'IOS', '서버'];

const PartPage = () => {
  const [part, setPart] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const { isVisible, isLeaving, navigateWithFade } = usePageTransition();
  const navigate = useNavigate();

  const handleSelectPart = (value: string) => {
    if (part === value) {
      setPart('');
      setIsButtonEnabled(false)
    } else {
      setPart(value);
    }
  };

  const handleButtonClick = () => {
    console.log('파트 선택:', part);
    // 파트 선택 후 질문 페이지로 이동
    navigateWithFade('/question');
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
        <Button text={"다음"} isEnabled={isButtonEnabled} onClick={handleButtonClick}/>
      </div>
    </div>
  );
};

export default PartPage;
