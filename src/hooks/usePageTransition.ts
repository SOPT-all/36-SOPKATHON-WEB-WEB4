import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePageTransition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트된 후 페이드인 애니메이션 적용
    setIsVisible(true);
  }, []);

  // 페이지 전환 함수
  const navigateWithFade = (path: string) => {
    setIsLeaving(true);
    
    // 페이드아웃 애니메이션 완료 후 페이지 이동
    setTimeout(() => {
      navigate(path);
    }, 400); // 애니메이션 시간보다 약간 짧게 설정
  };

  // 단계 전환용 페이드 애니메이션 트리거 함수
  const triggerFadeTransition = (callback: () => void, duration = 400) => {
    setIsLeaving(true);
    setTimeout(() => {
      callback();
      setIsLeaving(false);
    }, duration);
  };

  return { isVisible, isLeaving, navigateWithFade, triggerFadeTransition };
};

export default usePageTransition; 