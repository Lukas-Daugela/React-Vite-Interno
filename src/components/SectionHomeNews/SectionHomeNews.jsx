import classNames from 'classnames/bind';
import React from 'react';

import { newsCards } from '@shared';
import NewsCard from '@components/molecules/NewsCard';
import styles from './SectionHomeNews.module.scss';

const cn = classNames.bind(styles);

export default function SectionHomeNews() {
  return (
    <div className={cn('news')}>
      <div className={cn('news__text-container')}>
        <h2 className={cn('news__title')}>Articles & News</h2>
        <p className={cn('news__description')}>
          It is a long established fact that a reader will be distracted by the of
          readable content of a page when lookings at its layouts the points of using.
        </p>
      </div>
      <div className={cn('news__cards-container')}>
        {newsCards.slice(0, 3).map((newsCard) => (
          <NewsCard key={newsCard.id} cardInfo={newsCard} />
        ))}
      </div>
    </div>
  );
}
