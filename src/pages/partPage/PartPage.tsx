import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import * as S from './partPage.style';
import Back from '@components/back/Back';
import Button from '@components/button/Button';

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
    setIsButtonEnabled(part != '');
  }, [part]);
    
  return (
    <div class={S.Wrapper}> 
        <Back/>
              <div css={S.TitleContainer}>
                <div css={S.Title}>파트를 선택해주세요</div>
                <div css={S.SubTitle}>본인의 파트 역할을 선택해주세요</div>
              </div>
            <div css={S.GridContainer}>
                <div css={S.Grid}>기획</div>
                <div css={S.Grid}>디자인</div>
                <div css={S.Grid}>웹</div>
                <div css={S.Grid}>안드로이드</div>
                <div css={S.Grid}>IOS</div>
                <div css={S.Grid}>서버</div>
            </div>
    </div>
  )
}

export default PartPage