import className from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { VideoPlayIcon } from '../../../public/assets/svg';
import Modal from '../Modal';
import ModalVideo from '../ModalVideo/ModalVideo';
import styles from './SectionServiceVideo.module.scss';

const cn = className.bind(styles);

export default function SectionServiceVideo({ thumbnail, videoUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleModalOpen}
        className={cn('modal-button')}
        style={{ backgroundImage: `url("${thumbnail}")` }}
      >
        <div className={cn('modal-button__play-icon-container')}>
          <VideoPlayIcon />
        </div>
      </button>
      {isOpen && (
        <Modal ariaLabel="video" isOpen={isOpen} onClose={handleModalClose}>
          <ModalVideo videoUrl={videoUrl} />
        </Modal>
      )}
    </div>
  );
}

SectionServiceVideo.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};
