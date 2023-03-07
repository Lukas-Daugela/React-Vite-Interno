import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import commaIcon from '/assets/svg/commaIcon.svg';

import styles from './SectionCommaV1.module.scss';

const cn = classNames.bind(styles);

export default function SectionCommaV1({ sectionInfo }) {
  const { author, text } = sectionInfo;

  return (
    <div className={cn('section-comma')}>
      <img className={cn('section-comma__icon')} src={commaIcon} alt="" />
      <p className={cn('section-comma__text')}>{text}</p>
      <p className={cn('section-comma__author')}>-{author}</p>
    </div>
  );
}

SectionCommaV1.propTypes = {
  sectionInfo: PropTypes.object,
};
