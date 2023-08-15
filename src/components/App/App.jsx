import Feedback from '../Feedback/Feedback';
import { useState } from 'react';

export const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const stateShape = { good, neutral, bad };

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGoodFeedback(prev => prev + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prev => prev + 1);
        break;
      case 'bad':
        setBadFeedback(prev => prev + 1);
        break;
      default:
        return console.error(`Name - ${name} is not defind`);
    }
  };

  const countTotalFeedback = () =>
    Object.values(stateShape).reduce((acc, el) => acc + el, 0);

  const countPositiveFeedbackPercentage = () => {
    const goodPercentage = Math.round((good / countTotalFeedback()) * 100);
    return !goodPercentage ? 0 : goodPercentage;
  };

  return (
    <Feedback
      state={stateShape}
      onLeaveFeedback={onLeaveFeedback}
      countTotalFeedback={countTotalFeedback}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
    />
  );
};
