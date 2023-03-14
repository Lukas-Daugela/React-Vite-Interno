import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionProjects.module.scss';

const cn = classNames.bind(styles);

export default function SectionProjects() {
  return <div className={cn('projects')}></div>;
}
