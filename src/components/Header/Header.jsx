import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import NavLogo from '../../../public/assets/svg/NavLogo';
import Navbar from '../Navbar';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn('header')}>
      <Link to="/" className={cn('header__logo-title')}>
        <NavLogo />
        Interno
      </Link>
      <Navbar />
    </header>
  );
}
