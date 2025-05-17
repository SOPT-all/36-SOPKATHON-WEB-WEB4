import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import * as S from './resultsPage.style';

interface ResultsPagePropTypes {
  children?: ReactNode;
}

const ResultsPage = () => {
  return (
    <div css={S.Wrapper}>
    <p>OOOO님의 마실지도는...</p>
    <div css={S.container}></div>
    <p css={S.location}>창원시</p>
    <p css={S.drink}>맑은내일 벚꽃주</p>
    <p css={S.content}>봄이 되면 떠오르는 벚꽃의 색감과 향을 담은 달콤한 술, 청주 스타일, 진해군항제 기념주</p>
    </div>
  );
};

export default ResultsPage; 