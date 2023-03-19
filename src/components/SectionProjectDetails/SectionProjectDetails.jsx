import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SectionProjectDetails.module.scss';

const cn = classNames.bind(styles);

export default function SectionProjectDetails() {
  return (
    <div className={cn('project-details')}>
      <div className={cn('project-details__list-wrapper')}>
        <ul className={cn('project-details__list')}>
          <li className={cn('project-details__list-item')}>
            <h2 className={cn('project-details__list-item__title')}>Client</h2>
            <p className={cn('project-details__list-item__text')}>Your client name</p>
          </li>
          <li className={cn('project-details__list-item')}>
            <h2 className={cn('project-details__list-item__title')}>Category</h2>
            <p className={cn('project-details__list-item__text')}>Interiors</p>
          </li>
          <li className={cn('project-details__list-item')}>
            <h2 className={cn('project-details__list-item__title')}>Tags</h2>
            <p className={cn('project-details__list-item__text')}>interior, Home</p>
          </li>
        </ul>
      </div>
      <div className={cn('project-details__description')}>
        <h1 className={cn('project-details__description__title')}>
          Minimal Look Bedrooms
        </h1>
        <p className={cn('project-details__description__text')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
          dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere
          in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis.
          Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec
          sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus.
          Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque
          Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis.
          Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus
          porttitor.
        </p>
      </div>
    </div>
  );
}

SectionProjectDetails.propTypes = {
  className: PropTypes.string,
};
