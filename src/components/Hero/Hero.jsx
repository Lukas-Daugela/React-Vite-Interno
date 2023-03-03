import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Hero.module.scss';

const cn = classNames.bind(styles);

export default function Hero({ title, img }) {
  return (
    <div className={cn('hero')}>
      <img className={cn('hero__img')} src={img} alt="" />
      {title && (
        <div className={cn('hero__title-container')}>
          <h1 className={cn('hero__title')}>{title}</h1>
          <div className={cn('hero__description')}>
            <Link to="/" className={cn('hero__backwards-link')}>
              Home
            </Link>
            <span className={cn('hero__current-page')}> / {title}</span>
          </div>
        </div>
      )}
    </div>
  );
}

Hero.proptTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};
