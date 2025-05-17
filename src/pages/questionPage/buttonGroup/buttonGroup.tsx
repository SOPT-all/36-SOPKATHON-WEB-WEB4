import TestAnswerButton from '@components/testAnswerButton/testAnswerButton';
import * as styles from './buttonGroup.css';
import { Option } from '@/types/question';

interface ButtonGroupPropTypes {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  options: Option[];
}

const ButtonGroup = ({ selectedId, setSelectedId, options }: ButtonGroupPropTypes) => {
  return (
    <div css={styles.buttonGroup}>
      {options.map(({ id, description }) => (
        <TestAnswerButton
          key={id}
          text={description}
          selected={selectedId === id}
          onClick={() => setSelectedId(id)}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
