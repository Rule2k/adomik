import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children }) => (
  <div>{children}</div>
);

Box.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Box;
