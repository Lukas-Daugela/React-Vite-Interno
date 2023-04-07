import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SectionBlogIntro.module.scss';

const cn = classNames.bind(styles);

export default function SectionBlogIntro({ blogInfo }) {
  const { imgUrl, title, description, postDate } = blogInfo;

  return (
    <div className={cn('intro')}>
      <h1 className={cn('intro__title')}>{title}</h1>
      <img src={imgUrl} alt="" className={cn('intro__image')} />
      <p className={cn('intro__post-date')}>{postDate}</p>
      <p className={cn('intro__description')}>{description}</p>
    </div>
  );
}

SectionBlogIntro.propTypes = {
  blogInfo: PropTypes.object,
};
