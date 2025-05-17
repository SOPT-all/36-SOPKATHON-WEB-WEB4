/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { BackIcon } from '@assets/svgs';
import ButtonGroup from '@pages/questionPage/buttonGroup/buttonGroup';
import * as styles from './questionPage.style';
import { getQuestions } from '@/apis/questions';
import { Question } from '@/types/question';
import Button from '@components/button/Button';
import StepCounter from '@components/stepCounter/StepCounter';
import { useNavigate } from 'react-router-dom';
import usePageTransition from '@hooks/usePageTransition';

const QuestionPage = () => {
  const navigate = useNavigate();
  const { isVisible, isLeaving, navigateWithFade } = usePageTransition();
  const [question, setQuestion] = useState<Question | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [totalSteps, setTotalSteps] = useState<number>(5); // 전체 단계 수 설정
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isLastStep = currentStep === totalSteps;
  const buttonLabel = isLastStep ? '결과 보기' : '다음';
  const isButtonEnabled = selectedId !== null;

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getQuestions();
        setQuestion(data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  const handleClick = (): void => {
    if (isLastStep) {
      console.log('✅ 결과 보기 클릭됨');
      navigateWithFade('/results');
    } else {
      setCurrentStep((prev) => prev + 1);
      setSelectedId(null); // ✅ 다음 단계 진입 시 선택 초기화
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setSelectedId(null);
    } else {
      navigateWithFade('/part');
    }
  };

  return (
    <div css={styles.testWrapper}>
      <div css={styles.icon} onClick={handleBack}>
        <BackIcon />
      </div>
      <StepCounter current={currentStep} total={totalSteps} />

      <div css={styles.questionContainer}>
       <img
          src={question?.imageUrl ?? ''}
          alt="질문 이미지"
          css={styles.testImg}
        />
        <h1 css={styles.testText}>{question?.title ?? ''}</h1>
      </div>

      <ButtonGroup selectedId={selectedId} setSelectedId={setSelectedId} />

      <div css={styles.ButtonContainer}>
        <Button
          text={buttonLabel}
          onClick={handleClick}
          isEnabled={isButtonEnabled}
        />
      </div>
    </div>
  );
};

export default QuestionPage;
