import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { Arrow } from '../../../public/assets/svg';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

export default function Button({ children, styleType, type }) {
  const customBtnClass = styleType ? `button__${styleType}` : '';
  const customImgClass = styleType ? `image__${styleType}` : '';

  return (
    <button type={type} className={cn('button', customBtnClass)}>
      {children}
      <Arrow className={cn('image', customImgClass)} />
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  styleType: PropTypes.string,
  type: PropTypes.string,
};
