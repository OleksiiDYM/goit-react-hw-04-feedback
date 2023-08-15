import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import scss from './Feedback.module.scss';
import PropTypes from 'prop-types';

export const Feedback = ({
  state,
  onLeaveFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div className={scss.feedback}>
      <Section
        title="Please leave your feedback"
        countTotalFeedback={countTotalFeedback}
      >
        <FeedbackOptions state={state} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics" countTotalFeedback={countTotalFeedback}>
          <Statistics
            state={state}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      )}
    </div>
  );
};

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Feedback;
