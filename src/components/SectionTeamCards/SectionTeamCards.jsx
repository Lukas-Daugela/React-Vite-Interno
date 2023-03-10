import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import TeamPersonCard from '../TeamPersonCard/TeamPersonCard';
import styles from './SectionTeamCards.module.scss';

const cn = classNames.bind(styles);

export default function SectionTeamCards({ employeesText }) {
  return (
    <div className={cn('team-cards')}>
      <h2 className={cn('team-cards__title')}>Our Best Employees</h2>
      <div className={cn('team-cards__wrapper')}>
        {employeesText.slice(0, 4).map((employeeText) => (
          <TeamPersonCard key={employeeText.name} text={employeeText} />
        ))}
      </div>
    </div>
  );
}

SectionTeamCards.propTypes = {
  SectionTeamCards: PropTypes.array,
};
