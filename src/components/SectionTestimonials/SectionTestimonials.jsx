import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import TestimonialCard from '../TestimonialCard';
import styles from './SectionTestimonials.module.scss';

const cn = classNames.bind(styles);

export default function SectionTestimonials({ testimonialsInfo, title }) {
  return (
    <div className={cn('testimonials')}>
      <h2 className={cn('testimonials__title')}>{title}</h2>
      <div className={cn('testimonials__cards')}>
        {testimonialsInfo.map((testimonialInfo) => (
          <TestimonialCard key={testimonialInfo.id} cardInfo={testimonialInfo} />
        ))}
      </div>
    </div>
  );
}

SectionTestimonials.propTypes = {
  testimonialsInfo: PropTypes.array,
  title: PropTypes.string,
};
