import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Arrow, Chevron } from '../../../public/assets/svg';
import styles from './CustomLink.module.scss';

const cn = classNames.bind(styles);

export function CircleLink({ path, size = 'small', className }) {
  const customLinkClass = `circle-link__${size}`;
  const navigate = useNavigate();

  const handleLink = () => {
    navigate(path);
  };

  return (
    <a className={cn('circle-link', customLinkClass, className)} onClick={handleLink}>
      <Chevron />
    </a>
  );
}

CircleLink.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
};

export function ArrowLink({ children, path }) {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate(path);
  };
  return (
    <a className={cn('arrow-link')} onClick={handleLink}>
      {children}
      <Arrow className={cn('arrow-link__icon')} />
    </a>
  );
}

ArrowLink.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
