import classNames from 'classnames/bind';
import React from 'react';

import { serviceCards } from '../../shared';
import ServiceCard from '../ServiceCard';
import styles from './SectionServices.module.scss';

const cn = classNames.bind(styles);

export default function SectionServices() {
  console.log(serviceCards);
  return (
    <div className={cn('services')}>
      {serviceCards.map((serviceCard) => (
        <ServiceCard key={serviceCard.id} text={serviceCard} />
      ))}
    </div>
  );
}
