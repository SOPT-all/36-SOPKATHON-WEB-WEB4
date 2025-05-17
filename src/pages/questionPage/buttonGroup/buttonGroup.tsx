import TestAnswerButton from '@components/testAnswerButton/testAnswerButton'
import { useState } from 'react'
import * as styles from "./buttonGroup.css"

const options = [
  { id: 1, text: '시원한 해변·호숫가' },
  { id: 2, text: '푸른 숲·산속 풍경' },
]

const ButtonGroup = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div css={styles.buttonGroup}>
      {options.map(({ id, text }) => (
        <TestAnswerButton
          key={id}
          text={text}
          selected={selectedId === id}
          onClick={() => setSelectedId(id)}
        />
      ))}
    </div>
  )
}

export default ButtonGroup

