import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { PhoneIcon } from '../../../public/assets/svg';
import Button from '../Button';
import CustomLazyLoadImage from '../CustomLazyLoadImage/CustomLazyLoadImage';
import styles from './SectionEstimate.module.scss';

const cn = classNames.bind(styles);

export default function SectionEstimate({ imageInfo }) {
  const { blurhash, image } = imageInfo;
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
      <CustomLazyLoadImage
        blurhash={blurhash}
        imgUrl={image}
        containerClass={cn('image-wrapper')}
      />
    </div>
  );
}

SectionEstimate.propTypes = {
  imageInfo: PropTypes.object.isRequired,
};
