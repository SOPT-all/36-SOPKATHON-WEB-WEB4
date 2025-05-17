import { useEffect, useState } from 'react';
import TestAnswerButton from '@components/testAnswerButton/testAnswerButton';
import * as styles from './buttonGroup.css';
import { getQuestions } from '@/apis/questions';
import { Option } from '@/types/question';

interface ButtonGroupPropTypes {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

const ButtonGroup = ({ selectedId, setSelectedId }: ButtonGroupPropTypes) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getQuestions();
        setOptions(data[0].options); // 첫 번째 질문만 사용
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

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
