import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import NavLogo from '../../../public/assets/svg/NavLogo';
import Navbar from '../Navbar';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

export default function Header({ className }) {
  return (
    <header className={cn('header', className)}>
      <Link to="/" className={cn('header__logo-title')}>
        <NavLogo />
        Interno
      </Link>
      <Navbar />
    </header>
  );
}

Header.proptTypes = {
  className: PropTypes.string,
};
