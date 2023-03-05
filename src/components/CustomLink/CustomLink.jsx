import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Arrow, Chevron } from '../../../public/assets/svg';
import styles from './CustomLink.module.scss';

const cn = classNames.bind(styles);

export function CircleLink({ path, size = 'small', className }) {
  const customLinkClass = `circle-link__${size}`;

  return (
    <Link className={cn('circle-link', customLinkClass, className)} to={path}>
      <Chevron />
    </Link>
  );
}

CircleLink.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.oneOf[('small', 'large')],
  className: PropTypes.string,
};

export function ArrowLink({ children, path }) {
  return (
    <Link className={cn('arrow-link')} to={path}>
      {children}
      <Arrow className={cn('arrow-link__icon')} />
    </Link>
  );
}

ArrowLink.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
