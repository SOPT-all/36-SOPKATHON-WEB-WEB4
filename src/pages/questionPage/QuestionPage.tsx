import { useState } from 'react'
import { BackIcon } from '@assets/svgs'
import ButtonGroup from './buttonGroup/buttonGroup'
import * as styles from './questionPage.style'
import StepCounter from '@components/stepCounter/StepCounter'
import Button from '@components/button/Button'

const QuestionPage = () => {
  const totalSteps = 4
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const isLastStep = currentStep === totalSteps
  const buttonLabel = isLastStep ? '결과 보기' : '다음'
  const isButtonEnabled = selectedId !== null // ✅ 선택된 버튼이 있을 때만 활성화

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
        <img src="/logo.png" alt="테스트 이미지" css={styles.testImg} />
        <h1 css={styles.testText}>가장 끌리는 풍경이 있나요?</h1>
      </div>

      <ButtonGroup selectedId={selectedId} setSelectedId={setSelectedId} />

      <Button
        text={buttonLabel}
        onClick={handleClick}
        isEnabled={isButtonEnabled}
      />
    </div>
  )
}

export default QuestionPage
