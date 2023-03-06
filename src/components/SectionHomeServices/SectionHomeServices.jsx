import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import ServiceCard from '../ServiceCard';
import styles from './SectionHomeServices.module.scss';

const cn = classNames.bind(styles);

export default function SectionHomeServices({ cardsText }) {
  return (
    <div className={cn('services')}>
      {cardsText.slice(0, 3).map((cardText) => (
        <ServiceCard key={cardText.id} text={cardText} />
      ))}
    </div>
  );
}

SectionHomeServices.propTypes = {
  cardsText: PropTypes.array,
};
