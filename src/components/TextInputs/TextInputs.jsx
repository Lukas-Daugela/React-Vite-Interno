import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './TextInput.module.scss';

const cn = classNames.bind(styles);

export default function TextInput({ placeholder, autoComplete, ...props }) {
  return (
    <div className={cn('text-input')}>
      <input
        {...props}
        placeholder={placeholder}
        className={cn('text-input__field', {
          'text-input__field--has-error': error,
        })}
        autoComplete={autoComplete}
      />
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
};
