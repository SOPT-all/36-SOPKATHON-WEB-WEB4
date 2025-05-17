/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as S from './resultsPage.style';
import Button from '@components/button/Button';
import PartnerModal from '@components/modal/PartnerModal';

const ResultsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partnerNames = ['ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ','ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ'];

  return (
    <div css={S.Wrapper}>
      <p css={S.title}>OOOO님의 마실지도는...</p>
      <div css={S.container}></div>
      <p css={S.location}>창원시</p>
      <p css={S.drink}>맑은 내일 벚꽃주</p>
      <p css={S.content}>
        봄이 되면 떠오르는 벚꽃의 색감과 향을 담은 달콤한 술, 청주 스타일, 진해군항제 기념주
      </p>

      <div css={S.buttonWrapper}>
        <Button
          text="이름 확인하기"
          isEnabled={true}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <PartnerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        names={partnerNames}
      />
    </div>
  );
};

export default ResultsPage;
