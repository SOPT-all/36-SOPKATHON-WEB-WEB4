import * as S from './titleContainer.style';

interface TitleContainerPropTypes {
  title: string;
  subTitle?: string;
  align?: 'left' | 'center';
}

const TitleContainer = ({ title, subTitle, align = 'left' }: TitleContainerPropTypes) => {
  return (
    <div css={[S.TitleContainer, align === 'center' && S.CenterAlign]}>
      <div css={[S.Title, align === 'center' && S.CenterText]}>{title}</div>
      {subTitle && <div css={[S.SubTitle, align === 'center' && S.CenterText]}>{subTitle}</div>}
    </div>
  );
};

export default TitleContainer; 