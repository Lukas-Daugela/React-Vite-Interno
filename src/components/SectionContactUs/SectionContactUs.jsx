import classNames from 'classnames/bind';
import React from 'react';

import ContactForm from '../ContactForm/ContactForm';
import styles from './SectionContactUs.module.scss';
import { formTexts } from './texts';

const cn = classNames.bind(styles);

export default function SectionContactUs() {
  return (
    <div className={cn('contact-us')}>
      <h2 className={cn('contact-us__title')}>
        We love meeting new people and helping them.
      </h2>
      <div className={cn('wrapper')}>
        <div className={cn('wrapper__card')}></div>
        <ContactForm text={formTexts} />
      </div>
    </div>
  );
}
