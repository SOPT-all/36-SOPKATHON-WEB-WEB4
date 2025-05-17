import TestAnswerButton from '@components/testAnswerButton/testAnswerButton'
import { useState } from 'react'
import * as styles from "./questionPage.style"
import ButtonGroup from './buttonGroup/buttonGroup'

const options = [
  { id: 1, text: '시원한 해변·호숫가' },
  { id: 2, text: '푸른 숲·산속 풍경' },
]

const QuestionPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div>
      <ButtonGroup />
    </div>
  )
}

export default QuestionPage

