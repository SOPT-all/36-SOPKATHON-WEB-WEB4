import * as S from './splashPage.style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    const navigationTimer = setTimeout(() => {
      navigate('/intro');
    }, 2000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div css={[S.Wrapper, S.fadeAnimation(isFading)]}>
      <div css={S.ContentContainer}>
        <img 
          src="/svgs/logo-text-white.svg" 
          alt="로고" 
          css={S.Logo} 
        />
        <div css={S.Title}>감성 기반 경상남도 전통주 큐레이션 테스트</div>
      </div>
    </div>
  );
};

export default SplashPage; 