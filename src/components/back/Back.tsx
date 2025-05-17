/** @jsxImportSource @emotion/react */
import { backStyle } from './back.style';
import { BackIcon } from '@assets/svgs';

const Back = () => {
  return (
    <div css={backStyle}>
        <BackIcon/>
    </div>
  );
};

export default Back;