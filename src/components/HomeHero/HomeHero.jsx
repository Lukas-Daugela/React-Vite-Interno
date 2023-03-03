import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import styles from './HomeHero.module.scss';

const cn = classNames.bind(styles);

export default function HomeHero({ text }) {
  const { title, description, imgUrl } = text;

  return (
    <div className={cn('hero')}>
      <img className={cn('hero__img')} src={imgUrl} alt="" />
      <div className={cn('hero__title-container')}>
        <h1 className={cn('hero__title')}>{title}</h1>
        <p className={cn('hero__description')}>{description}</p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

HomeHero.proptTypes = {
  text: PropTypes.string,
};
