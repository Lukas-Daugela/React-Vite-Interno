import React from 'react';
import PropTypes from 'prop-types';

export default function CloseIcon({ className }) {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.546 0.459043C24.6915 0.604186 24.8069 0.776609 24.8857 0.966438C24.9645 1.15627 25.005 1.35977 25.005 1.56529C25.005 1.77082 24.9645 1.97432 24.8857 2.16415C24.8069 2.35398 24.6915 2.5264 24.546 2.67154L2.67097 24.5465C2.37757 24.8399 1.97964 25.0048 1.56472 25.0048C1.14979 25.0048 0.751863 24.8399 0.458468 24.5465C0.165072 24.2531 0.000244144 23.8552 0.000244141 23.4403C0.000244138 23.0254 0.165072 22.6274 0.458468 22.334L22.3335 0.459043C22.4786 0.313533 22.651 0.198086 22.8409 0.119316C23.0307 0.0405457 23.2342 0 23.4397 0C23.6452 0 23.8487 0.0405457 24.0386 0.119316C24.2284 0.198086 24.4008 0.313533 24.546 0.459043Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.459043 0.459043C0.313533 0.604186 0.198086 0.776609 0.119316 0.966438C0.0405457 1.15627 0 1.35977 0 1.56529C0 1.77082 0.0405457 1.97432 0.119316 2.16415C0.198086 2.35398 0.313533 2.5264 0.459043 2.67154L22.334 24.5465C22.6274 24.8399 23.0254 25.0048 23.4403 25.0048C23.8552 25.0048 24.2531 24.8399 24.5465 24.5465C24.8399 24.2531 25.0048 23.8552 25.0048 23.4403C25.0048 23.0254 24.8399 22.6274 24.5465 22.334L2.67154 0.459043C2.5264 0.313533 2.35398 0.198086 2.16415 0.119316C1.97432 0.0405457 1.77082 0 1.56529 0C1.35977 0 1.15627 0.0405457 0.966438 0.119316C0.776609 0.198086 0.604186 0.313533 0.459043 0.459043Z"
        fill="currentColor"
      />
    </svg>
  );
}

CloseIcon.propTypes = {
  className: PropTypes.string,
};
