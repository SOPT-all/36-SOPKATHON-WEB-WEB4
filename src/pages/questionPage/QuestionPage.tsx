/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import ButtonGroup from '@pages/questionPage/buttonGroup/buttonGroup';
import * as styles from './questionPage.style';
import { getQuestions } from '@/apis/questions';
import { Question } from '@/types/question';
import Button from '@components/button/Button';
import StepCounter from '@components/stepCounter/StepCounter';
import { CharacterGroup } from '@assets/svgs';
import Back from '@components/back/Back';

const totalSteps: number = 4;

const QuestionPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [question, setQuestion] = useState<Question[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const isLastStep = currentStep === totalSteps;
  const buttonLabel = isLastStep ? '결과 보기' : '다음';
  const isButtonEnabled = selectedId !== null;

  const handleButtonClick = () => {
    if (isLastStep) {
      console.log('✅ 결과 보기 클릭됨');
      
    } else {
      setCurrentStep((prev: number) => prev + 1);
      setSelectedId(null); 
    }
  };

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

  return (
    <div css={styles.testWrapper}>
      <div css={styles.headerBtn}>
        <Back onClick={() => navigate(-1)}/>
      </div>
      <StepCounter current={currentStep} total={totalSteps} />

      <div css={styles.questionContainer}>
        {question?.imageUrl ? (
          <img src={question.imageUrl} alt="질문 이미지" css={styles.testImg}/>
            ) : (
              <CharacterGroup css={styles.testImg} />
        )}
        <h1 css={styles.testText}>{question?.title ?? ''}</h1>
      </div>

      <ButtonGroup
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

      <Button 
        text={buttonLabel}
        isEnabled={isButtonEnabled}
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default QuestionPage;
