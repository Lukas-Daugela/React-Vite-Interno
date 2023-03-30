import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import { newsCards } from '@shared';
import { formatDate } from '@shared/functions/dateFormatter.js';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionBlogsIntro.module.scss';

const cn = classNames.bind(styles);

export default function SectionBlogsIntro() {
  const findLatestNewsCard = (newsCards) => {
    if (Array.isArray(newsCards) && newsCards.length > 0) {
      const newsCard = newsCards.reduce((a, b) =>
        formatDate(a.postDate) > formatDate(b.postDate) ? a : b,
      );
      return newsCard;
    }
  };

  const latestNewsCard = findLatestNewsCard(newsCards);

  return (
    <div className={cn('intro')}>
      <h2 className={cn('intro__title')}>Latest Post</h2>
      <div className={cn('latest-card')}>
        <CustomLazyLoadImage
          imgUrl={latestNewsCard.imgUrl}
          blurhash={latestNewsCard.blurhash}
          containerClass={cn('latest-card__image-container')}
        />
      </div>
    </div>
  );
}
