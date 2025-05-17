import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const Overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PartnerModalWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ModalBox = css`
  background-color: ${theme.colors['bg-white']};
  border-radius: .8rem;
  padding: 1.6rem 1.8rem;
  text-align: center;
  min-width: 33.9rem;
  min-height: 37.9rem;
`;

export const IconWrapper = css`
  svg {
    width: 10rem;
    fill: #fa6b6b;
    margin-bottom: 1.2rem;
  }
`;

export const Title = css`
  ${theme.fonts['title1-sb-20']};
  margin-bottom: 1.7rem;
`;

export const NameList = css`
  color: ${theme.colors['text-sub1']};
  ${theme.fonts['body2-r-14']};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.7rem;
  padding: 0 7rem;
`;

export const ButtonContainer = css`
    margin-top: 1.5rem;
     position: absolute;
    bottom: 1.6rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 3.6rem);
`;