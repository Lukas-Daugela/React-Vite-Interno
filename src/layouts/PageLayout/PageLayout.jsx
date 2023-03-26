import Footer from '@components/molecules/Footer';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@components/Header';
import ROUTES from '../../routes';
import styles from './PageLayout.module.scss';

const cn = classNames.bind(styles);

export default function PageLayout({ children }) {
  const { pathname } = useLocation();

  const path = ROUTES.find((route) => route.path === pathname);

  useEffect(() => {
    if (!path) {
      document.title = 'React Interno';
    } else {
      document.title = path.title;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={cn('page-layout')}>
      <Header className={cn('page-layout__header')} />
      <main className={cn('page-layout__main')}>{children}</main>
      <Footer className={cn('page-layout__footer')} />
    </div>
  );
}

PageLayout.proptTypes = {
  children: PropTypes.node.isRequired,
};
