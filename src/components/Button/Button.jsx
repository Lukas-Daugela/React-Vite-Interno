import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.module.scss';

const cn = classNames.bind(styles);

export default function Button({ children, type }) {
  const customClass = type ? `button__${type}` : '';

  return <button className={cn('button', customClass)}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};
