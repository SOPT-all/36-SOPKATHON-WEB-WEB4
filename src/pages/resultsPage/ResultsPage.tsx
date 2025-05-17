import { css } from '@emotion/react';
import * as S from './resultsPage.style';
import ResultBox from '@components/resultBox/resultBox';

const ResultsPage = () => {
  return (
    <div css={S.Wrapper}>
      <div css={S.topSection}>
        <p css={S.title}>_님의 먹을 지도는?</p>
      </div>
      
      <div css={S.bottomSection}>
        <div css={S.infoContainer}>
          <p css={S.location}>창원시</p>
          <p css={S.drink}>맑은 내일 벚꽃주</p>
          <p css={S.content}>봄이 되면 떠오르는 벚꽃의 색감과 향을 담은 달콤한 술, 청주 스타일, 진해군항제 기념주</p>
        </div>
      </div>
      <ResultBox/>
    </div>
  );
};

export default ResultsPage; 