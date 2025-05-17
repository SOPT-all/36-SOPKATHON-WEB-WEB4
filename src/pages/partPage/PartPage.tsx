import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import * as S from './partPage.style';
import Back from '@components/back/Back';
import Button from '@components/button/Button';

const parts = ['기획', '디자인', '웹', '안드로이드', 'IOS', '서버'];

const PartPage = () => {
  const [part, setPart] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleSelectPart = (value: string) => {
    setPart(value);
  };

  const handleButtonClick = () => {
    console.log('파트 선택:', part);
  };

  useEffect(() => {
    setIsButtonEnabled(part !== '');
  }, [part]);

  return (
    <div css={S.Wrapper}>
      <Back />
      <div css={S.TitleContainer}>
        <div css={S.Title}>파트를 선택해주세요</div>
        <div css={S.SubTitle}>본인의 파트 역할을 선택해주세요</div>
      </div>
      <div css={S.GridContainer}>
        {parts.map((p) => (
          <div
            key={p}
            css={[S.Grid, part === p && S.SelectedGrid]}
            onClick={() => handleSelectPart(p)}
          >
            {p}
          </div>
        ))}
      </div>
      <Button onClick={handleButtonClick} disabled={!isButtonEnabled}/>
    </div>
  );
};

export default PartPage;
