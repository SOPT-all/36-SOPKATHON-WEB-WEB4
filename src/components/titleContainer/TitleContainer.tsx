import * as S from './titleContainer.style';

interface TitleContainerPropTypes {
  title: string;
  subTitle?: string;
}

const TitleContainer = ({ title, subTitle }: TitleContainerPropTypes) => {
  return (
    <div css={S.TitleContainer}>
      <div css={S.Title}>{title}</div>
      {subTitle && <div css={S.SubTitle}>{subTitle}</div>}
    </div>
  );
};

export default TitleContainer; 