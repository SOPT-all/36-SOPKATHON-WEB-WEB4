/** @jsxImportSource @emotion/react */
import * as S from './resultsPage.style';
import ResultBox from '@components/resultBox/resultBox';
import { useEffect, useState } from 'react';
import { postResult } from '@/apis/results';
import { AnswerResult } from '@/types/result';
import CharacterGroup from '@assets/svgs/CharacterGroup';
import PartnerModal from '@components/modal/PartnerModal';

const ResultsPage = () => {
    const [result, setResult] = useState<AnswerResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = [5, 7, 9, 11]; 

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const data = await postResult(options);
        setResult(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchResult();
  }, []);

  if (error) return <p>에러: {error}</p>;
  if (!result) return <p>결과 불러오는 중...</p>;
  
  const partnerNames = ['ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ','ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ'];
  return (
    <div css={S.Wrapper}>
      <div css={S.topSection}>
        <p css={S.title}>{result.userName}님의 먹을 지도는?</p>
      </div>

      {`http://ec2-54-180-116-83.ap-northeast-2.compute.amazonaws.com/images/${result.imageUrl}` ? (
          <img 
            src={`http://ec2-54-180-116-83.ap-northeast-2.compute.amazonaws.com/images/${result.imageUrl}`}
            alt="질문 이미지" css={S.img}
          />
            ) : (
              <CharacterGroup css={S.img} />
      )}

      <div css={S.bottomSection}>
        <div css={S.infoContainer}>
          <p css={S.location}>{result.location}</p>
          <p css={S.drink}>{result.drinkName}</p>
          <p css={S.content}>{result.drinkDescription}</p>
        </div>
      </div>
      <ResultBox/>
      
      <PartnerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        names={partnerNames}
      />
    </div>
  );
};

export default ResultsPage;
