import { Character } from '@assets/svgs';
import * as S from './resultBox.style';
import Button from '@components/button/Button';

interface ResultBoxPropTypes {
  onClickShowNames: () => void;
  partnerCount: number;
}

const ResultBox = ({ onClickShowNames, partnerCount }: ResultBoxPropTypes) => {
  return (
    <div css={S.container}>
      <div css={S.contentContainer}>
        <div css={S.textContainer}>
          <p css={S.subtxt}>나랑 같이 갈 파트원은?</p>
          <p css={S.maintxt}>{partnerCount}명</p>
          <div css={S.buttonWrapper}>
            <Button 
              text="이름 확인하기"
              isEnabled={true}
              onClick={onClickShowNames}
            />
          </div>
        </div>
        <Character css={S.character} />
      </div>
    </div>
  );
};

export default ResultBox 