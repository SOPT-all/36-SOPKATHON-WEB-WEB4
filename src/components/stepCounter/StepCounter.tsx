/** @jsxImportSource @emotion/react */
import { stepCounterStyle } from './StepCounter.style';

interface StepCounterProps {
  current: number;
  total: number;
}

const StepCounter = ({ current, total }: StepCounterProps) => {
  return <div css={stepCounterStyle}>{`${current} / ${total}`}</div>;
};

export default StepCounter;
