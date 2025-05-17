import TestAnswerButton from '@components/testAnswerButton/testAnswerButton'
import * as styles from "./buttonGroup.css"

const options = [
  { id: 1, text: '시원한 해변·호숫가' },
  { id: 2, text: '푸른 숲·산속 풍경' },
]

interface ButtonGroupPropTypes {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

const ButtonGroup = ({ selectedId, setSelectedId }: ButtonGroupPropTypes) => {
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

