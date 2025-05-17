import { css } from '@emotion/react';
import * as S from './resultsPage.style';

const ResultsPage = () => {
  return (
    <div css={S.Wrapper}>
      <p css={S.title}>OOOO님의 마실지도는...</p>
      <div css={S.container}></div>
      <div css={S.infoContainer}>
        <p css={S.location}>창원시</p>
        <p css={S.drink}>맑은 내일 벚꽃주</p>
        <p css={S.content}>봄이 되면 떠오르는 벚꽃의 색감과 향을 담은 달콤한 술, 청주 스타일, 진해군항제 기념주</p>
      </div>
      <div css={S.resultBox}>
        <p>결과 설명</p>
      </div>
    </div>
  );
};

export default ResultsPage; 