import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { ArrowLink } from '../CustomLink';
import styles from './ServiceCard.module.scss';

const cn = classNames.bind(styles);

export default function ServiceCard({ text }) {
  const { title, description } = text;

  return (
    <div className={cn('service-card')}>
      <h4 className={cn('service-card__title')}>{title}</h4>
      <p className={cn('service-card__description')}>{description}</p>
      <ArrowLink path="/">Read More</ArrowLink>
    </div>
  );
}

ServiceCard.propTypes = {
  text: PropTypes.object,
};
