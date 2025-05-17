import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import * as S from './questionPage.style';

interface QuestionPagePropTypes {
  children?: ReactNode;
}

const QuestionPage = ({ children }: QuestionPagePropTypes) => {
  return (
    <div css={S.Wrapper}>
      <h1>
        질문 페이지입니다.
      </h1>
      {children}
    </div>
  );
};

export default QuestionPage; 