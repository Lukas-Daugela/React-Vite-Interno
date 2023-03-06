import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SectionAchievments.module.scss';

const cn = classNames.bind(styles);

export default function SectionAchievments({ achievments }) {
  return (
    <div className={cn('achievments')}>
      <div className={cn('achievments__container')}>
        {achievments.map((achievment, i) => (
          <div key={i} className={cn('achievment')}>
            <span className={cn('achievment__text-container')}>
              <p className={cn('achievment__amount')}>{achievment.amount}</p>
              <p className={cn('achievment__description')}>{achievment.description}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

SectionAchievments.propTypes = {
  achievments: PropTypes.array,
};
