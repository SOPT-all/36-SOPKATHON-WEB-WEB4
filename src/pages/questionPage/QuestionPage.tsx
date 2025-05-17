/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { BackIcon } from '@assets/svgs';
import ButtonGroup from '@pages/questionPage/buttonGroup/buttonGroup';
import * as styles from './questionPage.style';
import { getQuestions } from '@/apis/questions';
import { Question } from '@/types/question';

const QuestionPage = () => {
  const [question, setQuestion] = useState<Question | null>(null);

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
      console.log('✅ 결과 보기 클릭됨')
    } else {
      setCurrentStep((prev) => prev + 1)
      setSelectedId(null) // ✅ 다음 단계 진입 시 선택 초기화
    }
  }

  return (
    <div css={styles.testWrapper}>
      <BackIcon css={styles.icon} />
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

      <Button
        text={buttonLabel}
        onClick={handleClick}
        isEnabled={isButtonEnabled}
      />
    </div>
  );
};

export default QuestionPage;
