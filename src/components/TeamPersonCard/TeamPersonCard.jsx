import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import facebookIcon from '/assets/svg/socialMediaIcons/facebook.svg';

import styles from './TeamPersonCard.module.scss';

const cn = classNames.bind(styles);

export default function TeamPersonCard({ text }) {
  const { name, country, profession, phone, email, imgUrl, socialMedia } = text;

  const { facebookLink, twitterLink, linkedinLink, instagramLink } = socialMedia;

  console.log(imgUrl);

  return (
    <div className={cn('employee-card')}>
      <p className={cn('employee-card')}>{name}</p>
      <p className={cn('employee-card')}>
        {profession}, {country}
      </p>
      <ul className={cn('employee-card')}>
        <li className={cn('employee-card')}>
          <Link to={facebookLink}>
            <img src={facebookIcon} alt="" className={cn('employee-card')} />
          </Link>
        </li>
        <li className={cn('employee-card')}>
          <Link to={twitterLink}>
            <img src="/" alt="" className={cn('employee-card')} />
          </Link>
        </li>
        <li className={cn('employee-card')}>
          <Link to={linkedinLink}>
            <img src="/" alt="" className={cn('employee-card')} />
          </Link>
        </li>
        <li className={cn('employee-card')}>
          <Link to={instagramLink}>
            <img src="/" alt="" className={cn('employee-card')} />
          </Link>
        </li>
      </ul>
      <p className={cn('employee-card')}>{phone}</p>
      <p className={cn('employee-card')}>{email}</p>
    </div>
  );
}

TeamPersonCard.propTypes = {
  text: PropTypes.object,
};
