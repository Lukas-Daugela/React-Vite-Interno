import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Arrow } from '../../../public/assets/svg';
import styles from './CustomLink.module.scss';

const cn = classNames.bind(styles);

export default function CustomLink({ children, path }) {
  return (
    <Link className={cn('link')} to={path}>
      {children}
      <Arrow className={cn('link__arrow')} />
    </Link>
  );
}

CustomLink.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string,
};
