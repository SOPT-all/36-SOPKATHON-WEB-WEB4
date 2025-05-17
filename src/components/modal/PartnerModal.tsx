/** @jsxImportSource @emotion/react */
import { useCallback } from 'react';
import * as S from './PartnerModal.style';

import PartnerIcon from '@assets/svgs/LogoModal';
import Button from '@components/button/Button';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  names: string[];
}

const PartnerModal = ({ isOpen, onClose, names }: PartnerModalProps) => {
  if (!isOpen) return null;


  const handleButtonClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div css={S.Overlay}>
    <div css={S.PartnerModalWrapper}>
      <div css={S.ModalBox}>
        <div css={S.IconWrapper}>
          <PartnerIcon />
        </div>
        <div css={S.Title}>나랑 같이 갈 파트원 이름은?</div>
        <div css={S.NameList}>
          {names.map((name, idx) => (
            <span key={idx}>{name}</span>
          ))}
        </div>
        <div css={S.ButtonContainer}>
          <Button
            text="닫기"
            isEnabled={true}
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default PartnerModal;