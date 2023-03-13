import classNames from 'classnames/bind';
import React from 'react';

import BenefitsOrderedList from '../BenefitsOrderedList/BenefitsOrderedList';
import styles from './SectionServiceBenefits.module.scss';
import benefitLists from './texts/benefitLists.json';

const cn = classNames.bind(styles);

export default function SectionServiceBenefits() {
  return (
    <div className={cn('benefits')}>
      <BenefitsOrderedList benefitLists={benefitLists} />
    </div>
  );
}
