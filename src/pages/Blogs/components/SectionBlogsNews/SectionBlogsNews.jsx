import NewsCard from '@components/molecules/NewsCard';
import { newsCards } from '@shared';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionBlogsNews.module.scss';

const cn = classNames.bind(styles);

export default function SectionBlogsNews() {
  return (
    <div className={cn('news')}>
      <h2 className={cn('news__title')}>Articles & News</h2>
      <div className={cn('news__cards')}>
        {newsCards.map((card) => (
          <NewsCard key={card.id} cardInfo={card} />
        ))}
      </div>
    </div>
  );
}
