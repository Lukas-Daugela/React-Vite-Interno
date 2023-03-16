import className from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { CloseIcon } from '../../../public/assets/svg';
import styles from './Modal.module.scss';

const cn = className.bind(styles);

export default function Modal({ children, ariaLabel, isOpen, onClose }) {
  const [isMoving, setIsMoving] = useState(true);

  console.log(isOpen);

  const handleMouseMove = () => {
    setIsMoving(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoving(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isMoving]);

  const handleOverlayClose = (e) => {
    if (e.target.dataset.overlay === 'overlay') onClose();
  };

  useEffect(() => {
    const handleClose = (e) => e.key === 'Escape' && onClose();

    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', handleClose);

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <FocusTrap focusTrapOptions={{ active: isOpen, initialFocus: false }}>
      <dialog
        data-overlay="overlay"
        className={cn('modal')}
        onClick={handleOverlayClose}
        onMouseMove={handleMouseMove}
        role="dialog"
        aria-label={ariaLabel}
        open={isOpen}
      >
        <button
          onClick={onClose}
          className={cn('modal__close-button', {
            'modal__close-button--animated': !isMoving,
          })}
        >
          <CloseIcon className={cn('modal__close-button__vector')} />
        </button>
        {children}
      </dialog>
    </FocusTrap>,
    document.getElementById('portal'),
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};