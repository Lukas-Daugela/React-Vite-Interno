import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SectionAchievments.module.scss';

const cn = classNames.bind(styles);

export default function SectionAchievments({ text }) {
  return <div className={cn('achievments')}>{text}</div>;
}

SectionAchievments.propTypes = {
  text: PropTypes.array,
};
