import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import sideImg from '/assets/images/estimate.jpg';

import { PhoneIcon } from '../../../public/assets/svg';
import Button from '../Button';
import styles from './SectionEstimate.module.scss';

const cn = classNames.bind(styles);

export default function SectionEstimate() {
  return (
    <div className={cn('estimate')}>
      <div className={cn('estimate__text-container')}>
        <h2 className={cn('estimate__title')}>
          We Create The Art Of Stylish Living Stylishly
        </h2>
        <p className={cn('estimate__description')}>
          It is a long established fact that a reader will be distracted by the of
          readable content of a page when lookings at its layouts the points of using that
          it has a more-or-less normal.
        </p>
        <div className={cn('estimate__phone-container')}>
          <div className={cn('estimate__circle')}>
            <PhoneIcon className={cn('estimate__circle__img')} />
          </div>
          <span className={cn('estimate__phone-text-container')}>
            <p className={cn('estimate__phone')}>012345678</p>
            <p className={cn('estimate__phone-text')}>Call Us Anytime</p>
          </span>
        </div>
        <Link to="/" className={cn('estimate__button-link')}>
          <Button>Get Free Estimate</Button>
        </Link>
      </div>
      <img className={cn('estimate__img')} src={sideImg} alt="" />
    </div>
  );
}
