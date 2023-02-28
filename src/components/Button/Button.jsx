import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { Arrow } from '../../../public/assets/svg';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

export default function Button({ children, type }) {
  const customBtnClass = type ? `button__${type}` : '';
  const customImgClass = type ? `image__${type}` : '';

  return (
    <button className={cn('button', customBtnClass)}>
      {children}
      <Arrow className={cn('image', customImgClass)} />
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};
