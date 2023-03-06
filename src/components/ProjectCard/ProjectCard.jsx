import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { CircleLink } from '../CustomLink/CustomLink';
import styles from './ProjectCard.module.scss';

const cn = classNames.bind(styles);

export default function ProjectCard({ cardInfo, children }) {
  const { title, category, path } = cardInfo;

  return (
    <>
      {children}
      <div className={cn('project-card__bottom-container')}>
        <span className={cn('project-card__title-category')}>
          <p className={cn('project-card__title')}>{title}</p>
          <p className={cn('project-card__category')}>{category} / Artchitecture</p>
        </span>
        <CircleLink path={path} size="large" />
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  cardInfo: PropTypes.object,
  children: PropTypes.node,
};
