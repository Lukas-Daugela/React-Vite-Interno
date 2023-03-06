import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { PhoneIcon } from '../../../public/assets/svg';
import Button from '../Button';
import styles from './SectionEstimate.module.scss';

const cn = classNames.bind(styles);

export default function SectionEstimate({ estimateInfo }) {
  const { title, description, phone, phoneDescription, buttonText, linkPath, imgUrl } =
    estimateInfo;
  return (
    <div className={cn('estimate')}>
      <div className={cn('estimate__text-container')}>
        <h2 className={cn('estimate__title')}>{title}</h2>
        <p className={cn('estimate__description')}>{description}</p>
        <div className={cn('estimate__phone-container')}>
          <div className={cn('estimate__circle')}>
            <PhoneIcon className={cn('estimate__circle__img')} />
          </div>
          <span className={cn('estimate__phone-text-container')}>
            <p className={cn('estimate__phone')}>{phone}</p>
            <p className={cn('estimate__phone-text')}>{phoneDescription}</p>
          </span>
        </div>
        <Link to={linkPath} className={cn('estimate__button-link')}>
          <Button>{buttonText}</Button>
        </Link>
      </div>
      <img className={cn('estimate__img')} src={imgUrl} alt="" />
    </div>
  );
}

SectionEstimate.propTypes = {
  estimateInfo: PropTypes.object,
};
