import { useNavigate } from 'react-router-dom';
import * as S from './introPage.style';
import TitleContainer from '@components/titleContainer/TitleContainer';
import CharacterGroup from '@assets/svgs/CharacterGroup';
import Button from '@components/button/Button';
import { useEffect, useState } from 'react';

const IntroPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후 즉시 화면에 표시
    setIsVisible(true);
  }, []);

  const handleStartButtonClick = () => {
    navigate('/register');
  };

  return (
    <div css={S.Wrapper}>
      <div css={S.ContentWrapper}>
        <TitleContainer 
          title="환영합니다!"
          subTitle="마실지도를 한번 거닐어 볼까요?"
          align="center"
        />

        <div css={S.CharacterContainer}>
          <CharacterGroup />
        </div>
      </div>

      <div css={S.ButtonContainer}>
        <Button 
          text="테스트 시작하기" 
          onClick={handleStartButtonClick} 
          isEnabled={true}
        />
      </div>
    </div>
  );
};

export default IntroPage;
