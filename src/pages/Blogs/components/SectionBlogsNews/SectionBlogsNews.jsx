import NewsCard from '@components/molecules/NewsCard';
import PagePagination from '@components/molecules/PagePagination';
import { newsCards } from '@shared';
import classNames from 'classnames/bind';
import React, { useState } from 'react';

import styles from './SectionBlogsNews.module.scss';

const cn = classNames.bind(styles);

export default function SectionBlogsNews() {
  const cardsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const amountOfPages = Math.ceil(newsCards.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const displayedCards = newsCards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className={cn('news')}>
      <h2 className={cn('news__title')}>Articles & News</h2>
      <div className={cn('news__cards')}>
        {displayedCards.map((card) => (
          <NewsCard key={card.id} cardInfo={card} />
        ))}
      </div>
      <PagePagination
        amountOfPages={amountOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
