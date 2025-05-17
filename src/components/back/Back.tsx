/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { backStyle } from './back.style';
import { BackIcon } from '@assets/svgs';
import usePageTransition from '@hooks/usePageTransition';

interface BackPropTypes {
  previousPath?: string;
}

const Back = ({ previousPath }: BackPropTypes) => {
  const navigate = useNavigate();
  const { navigateWithFade } = usePageTransition();

  const handleBackClick = () => {
    if (previousPath) {
      navigateWithFade(previousPath);
    } else {
      // 이전 히스토리로 이동하기 전에 페이드아웃 효과 적용
      navigateWithFade(-1 as any);
    }
  };

  return (
    <div css={backStyle}>
      <BackIcon onClick={handleBackClick} />
    </div>
  );
};

export default Back;