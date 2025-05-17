/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import ButtonGroup from '@pages/questionPage/buttonGroup/buttonGroup';
import * as styles from './questionPage.style';
import { getQuestions } from '@/apis/questions';
import { Question } from '@/types/question';
import Button from '@components/button/Button';
import StepCounter from '@components/stepCounter/StepCounter';
import { useNavigate } from 'react-router-dom';
import usePageTransition from '@hooks/usePageTransition';
import Back from '@components/back/Back';
import Step1 from '@assets/svgs/Step1';
import Step2 from '@assets/svgs/Step2';
import Step3 from '@assets/svgs/Step3';
import Step4 from '@assets/svgs/Step4';

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

  // 이전 경로 결정
  const getPreviousPath = () => {
    if (currentStep > 1) {
      return undefined; // 이전 스텝으로 이동(기본 뒤로가기)
    } else {
      return '/part'; // 첫 질문이면 파트 선택 페이지로
    }
  };

  // 현재 단계에 맞는 Step 컴포넌트 렌더링
  const renderStepImage = () => {
    switch (currentStep) {
      case 1:
        return <Step1 css={styles.testImg} />;
      case 2:
        return <Step2 css={styles.testImg} />;
      case 3:
        return <Step3 css={styles.testImg} />;
      case 4:
        return <Step4 css={styles.testImg} />;
      default:
        return <Step1 css={styles.testImg} />;
    }
  };

  return (
    <div css={styles.Wrapper(isVisible, isLeaving)}>
      <Back previousPath={getPreviousPath()} />
      
      <div css={styles.topContainer}>
        <StepCounter current={currentStep} total={totalSteps} />

        <div css={styles.questionContainer}>
         {renderStepImage()}
          <h1 css={styles.testText}>{question?.title ?? ''}</h1>
        </div>
      </div>

      <div css={styles.buttonGroupContainer}>
        <ButtonGroup selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>

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
