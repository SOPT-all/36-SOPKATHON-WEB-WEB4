import { BackIcon } from '@assets/svgs'
import ButtonGroup from './buttonGroup/buttonGroup'
import * as styles from "./questionPage.style"

const QuestionPage = () => {


  return (
    <div css={styles.testWrapper}>
      <BackIcon css={styles.icon} />
      <div css={styles.questionContainer}>
        <img src="/logo.png" alt="테스트 이미지" css={styles.testImg}/>
        <h1 css={styles.testText}>가장 끌리는 풍경이 있나요?</h1>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default QuestionPage

