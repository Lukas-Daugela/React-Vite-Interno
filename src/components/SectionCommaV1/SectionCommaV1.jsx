import classNames from 'classnames/bind';
import React from 'react';

import commaIcon from '/assets/svg/commaIcon.svg';

import styles from './SectionCommaV1.module.scss';

const cn = classNames.bind(styles);

export default function SectionCommaV1() {
  return (
    <div className={cn('section-comma')}>
      <img className={cn('section-comma__icon')} src={commaIcon} alt="" />
      <p className={cn('section-comma__text')}>
        I like an interior that defies labeling. I don&apos;t really want someone to walk
        into a room and know that I did it
      </p>
      <p className={cn('section-comma__author')}>- Bunny Williams</p>
    </div>
  );
}
