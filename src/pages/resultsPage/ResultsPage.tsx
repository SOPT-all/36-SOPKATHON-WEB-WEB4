/** @jsxImportSource @emotion/react */
import * as S from './resultsPage.style';
import ResultBox from '@components/resultBox/ResultBox';
import { useEffect, useState } from 'react';
import { postResult } from '@/apis/results';
import { AnswerResult } from '@/types/result';
import CharacterGroup from '@assets/svgs/CharacterGroup';
import PartnerModal from '@components/modal/PartnerModal';
import { useUserContext } from '../../contexts/UserContext';
import LoadingSpinner from '@components/loadingSpinner/LoadingSpinner';
import { Navigate, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { name, selectedOptions } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setIsLoading(true);
        
        if (selectedOptions.length === 0) {
          console.log('선택된 옵션이 없어 등록 페이지로 리디렉션합니다.');
          setShouldRedirect(true);
          return;
        }
        
        console.log('결과 페이지에서 API 호출 - 선택한 옵션들:', selectedOptions);
        const data = await postResult(selectedOptions);
        setResult(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResult();
  }, [selectedOptions]);

  if (shouldRedirect) {
    return <Navigate to="/register" replace />;
  }

  if (isLoading) {
    return (
      <div css={S.Wrapper}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) return <p css={S.errorText}>에러: {error}</p>;
  if (!result) return <p css={S.errorText}>결과를 불러올 수 없습니다.</p>;
  
  const partnerNames = ['ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ','ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ', 'ㅇㅇㅇ'];
  
  return (
    <div css={S.Wrapper}>
      <div css={S.topSection}>
        <p css={S.title}>{result.userName || name}님의 먹을 지도는?</p>
      </div>

      {result.imageUrl ? (
          <img 
            src={`http://ec2-54-180-116-83.ap-northeast-2.compute.amazonaws.com/images/${result.imageUrl}`}
            alt="결과 이미지" css={S.img}
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
