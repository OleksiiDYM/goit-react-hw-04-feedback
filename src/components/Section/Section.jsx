import { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Fragment>
    <h2>{title}</h2>
    {children}
  </Fragment>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
