import { Character, ChevronIcon } from '@assets/svgs';
import * as S from './resultBox.style';

const ResultBox = () => {
  return (
    <div css={S.container}>
      <div css={S.colbox}>
        <p css={S.subtxt}>나랑 같이 갈 파트원은?</p>
        <p css={S.maintxt}>00명</p>
        <div css={S.rowbox}><p css={S.linktxt}>이름 확인하기</p><ChevronIcon/></div>
      <Character css={S.character}/>
      </div>
    </div>
  );
};

export default ResultBox 