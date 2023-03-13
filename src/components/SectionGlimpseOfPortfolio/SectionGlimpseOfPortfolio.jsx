import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import imageUrl from '/assets/images/rest-place.jpg';

import Button from '../Button';
import styles from './SectionGlimpseOfPortfolio.module.scss';

const cn = classNames.bind(styles);

export default function SectionGlimpseOfPortfolio() {
  return (
    <div className={cn('section')}>
      <div className={cn('section__text-container')}>
        <h2 className={cn('section__title')}>
          We love design.That&apos;s how we got here.
        </h2>
        <p className={cn('section__description')}>
          It is a long established fact that a reader will be distracted by the of
          readable content .
        </p>
        <Link to={'/projects'} className={cn('section__button-link')}>
          <Button>Our Portfolio</Button>
        </Link>
      </div>
      <img src={imageUrl} alt="" className={cn('section__image')} />
    </div>
  );
}
