import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import imgUrl from '/assets/images/messy-garage.jpg';

import Button from '../Button';
import styles from './SectionAboutWorkflow.module.scss';

const cn = classNames.bind(styles);

export default function SectionAboutWorkflow({ text }) {
  console.log(text);
  return (
    <div className={cn('workflow')}>
      <div className={cn('workflow__text-container')}>
        <h2 className={cn('workflow__title')}>What we do</h2>
        <p className={cn('workflow__description')}>
          It is a long established fact that a reader will be distracted by the of
          readable content of a page when lookings at its layouts the points of using that
          it has a more-or-less normal.
        </p>
        <Link to={'/'}>
          <Button>Our Concept</Button>
        </Link>
      </div>

      <img className={cn('workflow__image')} src={imgUrl} alt="" />
    </div>
  );
}

SectionAboutWorkflow.propTypes = {
  text: PropTypes.string.isRequired,
};
