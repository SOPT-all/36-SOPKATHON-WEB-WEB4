/** @jsxImportSource @emotion/react */

import { buttonStyle } from "./testAnswerButton.style"

interface SelectableButtonProps {
    text: string
    onClick?: () => void
    selected?: boolean
}

const TestAnswerButton = ({ text, onClick, selected = false }: SelectableButtonProps) => {
  return (
    <button css={buttonStyle(selected)} onClick={onClick}>
      {text}
    </button>
  )
}

export default TestAnswerButton;