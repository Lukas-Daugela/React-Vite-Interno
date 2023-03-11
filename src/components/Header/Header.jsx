import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Navbar from '../Navbar';
import PageLogo from '../PageLogo/PageLogo';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

export default function Header({ className }) {
  return (
    <header className={cn('header', className)}>
      <PageLogo />
      <Navbar />
    </header>
  );
}

Header.proptTypes = {
  className: PropTypes.string,
};
