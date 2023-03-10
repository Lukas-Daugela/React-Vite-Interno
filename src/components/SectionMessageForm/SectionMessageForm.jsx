import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import MessageForm from '../MessageForm';
import styles from './SectionMessageForm.module.scss';

const cn = classNames.bind(styles);

export default function SectionMessageForm({ className, title, formTexts }) {
  return (
    <div className={cn('section__message', className)}>
      <h2 className={cn('section__message__title')}>{title}</h2>
      <MessageForm text={formTexts} />
    </div>
  );
}

SectionMessageForm.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  formTexts: PropTypes.object,
};
