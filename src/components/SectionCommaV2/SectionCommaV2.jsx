import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import commaIcon from '/assets/svg/commaIcon.svg';

import styles from './SectionCommaV2.module.scss';

const cn = classNames.bind(styles);

export default function SectionCommaV2({ text }) {
  return (
    <div className={cn('section-comma')}>
      <div className={cn('section-comma__container')}>
        <img className={cn('section-comma__icon')} src={commaIcon} alt="" />
        <p className={cn('section-comma__text')}>{text}</p>
      </div>
    </div>
  );
}

SectionCommaV2.propTypes = {
  text: PropTypes.string,
};
