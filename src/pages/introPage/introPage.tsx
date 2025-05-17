import { useNavigate } from 'react-router-dom';
import * as S from './introPage.style';
import TitleContainer from '@components/titleContainer/TitleContainer';
import CharacterGroup from '@assets/svgs/CharacterGroup';
import Button from '@components/button/Button';

const IntroPage = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate('/question');
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
