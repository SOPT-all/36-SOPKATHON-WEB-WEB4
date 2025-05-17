import * as S from './splashPage.style';

const SplashPage = () => {
  return (
    <div css={S.Wrapper}>
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