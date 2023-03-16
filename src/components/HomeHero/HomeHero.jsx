import classNames from 'classnames/bind';
import React from 'react';

import heroImg from '/assets/images/living-room.jpg';

import Button from '../Button';
import styles from './HomeHero.module.scss';

const cn = classNames.bind(styles);

export default function HomeHero() {
  return (
    <div className={cn('hero')}>
      <img className={cn('hero__img')} src={heroImg} alt="" />
      <div className={cn('hero__title-container')}>
        <h1 className={cn('hero__title')}>Let Your Home Be Unique</h1>
        <p className={cn('hero__description')}>
          There are many variations of the passages of lorem Ipsum from available,
          variations of the passages.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
