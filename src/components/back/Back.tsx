/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { backStyle } from './back.style';
import { BackIcon } from '@assets/svgs';

const Back = () => {
    const navigate = useNavigate();

  return (
    <div css={backStyle}>
        <BackIcon onClick={() => navigate(-1)}/>
    </div>
  );
};

export default Back;