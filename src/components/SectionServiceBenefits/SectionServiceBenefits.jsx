import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionServiceBenefits.module.scss';
import benefitLists from './texts/benefitLists.json';

const cn = classNames.bind(styles);

export default function SectionServiceBenefits() {
  const { firstList, secondList } = benefitLists;

  return (
    <div className={cn('benefits')}>
      <div className={cn('benefits__list-container')}>
        <h2 className={cn('benefits__list-title')}>{firstList.title}</h2>
        <ol className={cn('ordered-list')}>
          {firstList.items.map((listItem, i) => (
            <li key={i} className={cn('ordered-list__item')}>
              <p className={cn('ordered-list__text')}>{listItem}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className={cn('benefits__list-container')}>
        <h2 className={cn('benefits__list-title')}>{secondList.title}</h2>
        <ol className={cn('ordered-list')}>
          {secondList.items.map((listItem, i) => (
            <li key={i} className={cn('ordered-list__item')}>
              <p className={cn('ordered-list__text')}>{listItem}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
