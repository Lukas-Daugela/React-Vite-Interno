import Button from '@components/atoms/Button';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SectionJoinTeam.module.scss';

const cn = classNames.bind(styles);

export default function SectionJoinTeam({ className }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('contact');
  };

  return (
    <div className={cn('join-team', className)}>
      <h2 className={cn('join-team__title')}>Wanna join the interno?</h2>
      <p className={cn('join-team__description')}>
        We are always looking for new talented colleagues.
      </p>
      <div className={cn('join-team__button-container')}>
        <Button styleType={'gold'} onClick={handleNavigate}>
          Contact With Us
        </Button>
      </div>
    </div>
  );
}

SectionJoinTeam.propTypes = {
  className: PropTypes.string,
};
