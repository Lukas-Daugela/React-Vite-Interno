import classNames from 'classnames/bind';
import React from 'react';

import heroImages from '../../shared/lazyLoadImages/heroImages.json';
import Button from '../Button';
import CustomLazyLoadImage from '../CustomLazyLoadImage/CustomLazyLoadImage';
import styles from './HomeHero.module.scss';

const cn = classNames.bind(styles);

export default function HomeHero() {
  const { home } = heroImages;

  return (
    <div className={cn('hero')}>
      <CustomLazyLoadImage
        blurhash={home.blurhash}
        imgUrl={home.image}
        containerClass={cn('hero__img')}
      />
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
