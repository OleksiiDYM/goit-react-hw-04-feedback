import sass from './Notification.module.scss';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <p className={sass.notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
