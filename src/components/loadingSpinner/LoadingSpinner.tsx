/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as S from './loadingSpinner.style';

const LoadingSpinner = () => {
  const [dot, setDot] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prev) => (prev + 1) % 4);
    }, 400);
    
    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    let dots = '';
    for (let i = 0; i < dot; i++) {
      dots += '.';
    }
    return dots;
  };

  return (
    <div css={S.loadingContainer}>
      <div css={S.spinnerContainer}>
        <div css={S.spinner}></div>
      </div>
      <p css={S.loadingText}>질문을 불러오는 중{renderDots()}</p>
    </div>
  );
};

export default LoadingSpinner; 