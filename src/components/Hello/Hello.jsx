import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Hello.styles';

const Hello = (props) => (
  <div className="HelloWrapper">
    Test content
  </div>
);

Hello.propTypes = {
  // bla: PropTypes.string,
};

Hello.defaultProps = {
  // bla: 'test',
};

export default Hello;
