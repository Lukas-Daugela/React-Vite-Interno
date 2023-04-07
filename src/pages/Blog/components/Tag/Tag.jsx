import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Tag.module.scss';

const cn = classNames.bind(styles);

export default function Tag({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn('tag', {
        'tag--active': active,
      })}
    >
      {children}
    </button>
  );
}

Tag.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.string,
};
