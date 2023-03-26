import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { CircleLink } from '@components/atoms/CustomLink';
import styles from './NewsCard.module.scss';

const cn = classNames.bind(styles);

export default function NewsCard({ cardInfo }) {
  const { imgUrl, tag, title, postDate, link } = cardInfo;

  return (
    <div className={cn('news-card')}>
      <div className={cn('news-card__top-container')}>
        <img src={imgUrl} alt="" className={cn('news-card__img')} />
        <p className={cn('news-card__tag')}>{tag}</p>
      </div>
      <h4 className={cn('news-card__title')}>{title}</h4>
      <div className={cn('news-card__bottom-container')}>
        <p>{postDate}</p>
        <CircleLink path={link} className={cn('news-card__link')} />
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  cardInfo: PropTypes.object,
};
