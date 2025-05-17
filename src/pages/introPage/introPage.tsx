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
          title="경상남도 술과 음식의 미각 여행"
          subTitle="당신의 취향에 맞는 경상남도 전통주를 찾아보세요"
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
