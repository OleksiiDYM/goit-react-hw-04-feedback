import { Fragment } from 'react';
import sass from './Statistics.module.scss';
import PropTypes from 'prop-types';

export const Statistics = ({ state, total, positivePercentage }) => (
  <Fragment>
    {Object.keys(state).map(el => (
      <p key={el} name={el} className={sass.statistics__item}>
        {el}: {state[el]}
      </p>
    ))}
    <p className={sass.statistics__item}>Total: {total()}</p>
    <p className={sass.statistics__item}>
      Positive feedback: {positivePercentage()}%
    </p>
  </Fragment>
);

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
