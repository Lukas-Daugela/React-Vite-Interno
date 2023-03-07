import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Children } from 'react';

import styles from './CustomLayout.module.scss';

const cn = classNames.bind(styles);

export default function CustomLayout({ children }) {
  return (
    <div>
      {Children.map(children, (child) => (
        <section className={cn('custom-layout__section')}>{child}</section>
      ))}
    </div>
  );
}

CustomLayout.proptTypes = {
  children: PropTypes.node.isRequired,
};
