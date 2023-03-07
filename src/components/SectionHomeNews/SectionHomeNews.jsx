import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import NewsCard from '../NewsCard/NewsCard';
import styles from './SectionHomeNews.module.scss';

const cn = classNames.bind(styles);

export default function SectionHomeNews({ cardsInfo }) {
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
        {cardsInfo.slice(0, 3).map((cardInfo) => (
          <NewsCard key={cardInfo.id} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  );
}

SectionHomeNews.propTypes = {
  cardsInfo: PropTypes.array,
};
