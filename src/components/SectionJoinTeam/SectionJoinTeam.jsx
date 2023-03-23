import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import styles from './SectionJoinTeam.module.scss';

const cn = classNames.bind(styles);

export default function SectionJoinTeam({ className }) {
  return (
    <div className={cn('join-team', className)}>
      <h2 className={cn('join-team__title')}>Wanna join the interno?</h2>
      <p className={cn('join-team__description')}>
        It is a long established fact will be distracted.
      </p>
      <div className={cn('join-team__button-container')}>
        <Button styleType={'gold'}>Contact With Us</Button>
      </div>
    </div>
  );
}

SectionJoinTeam.propTypes = {
  className: PropTypes.string,
};
