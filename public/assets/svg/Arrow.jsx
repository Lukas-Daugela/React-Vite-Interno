import React from 'react';
import PropTypes from 'prop-types';

export default function Arrow({ className }) {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M2 8.43536L15.7232 8.29851M10.6182 1.91132L17.1412 8.4343L10.4868 15.0887"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
};
