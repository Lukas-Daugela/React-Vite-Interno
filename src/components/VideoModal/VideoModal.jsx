import className from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { CloseIcon } from '../../../public/assets/svg';
import styles from './VideoModal.module.scss';

const cn = className.bind(styles);

export default function VideoModal({ thumbnail, videoUrl }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <button
      onClick={openModal}
      className={cn('modal-button')}
      style={{ backgroundImage: `url("${thumbnail}")` }}
    >
      {modal ? (
        <section className={cn('modal')}>
          <div className={cn('modal__content')}>
            <div className={cn('modal-video__close-icon')} onClick={setModal}>
              <CloseIcon className={cn('modal-video__close-icon__vetor')} />
            </div>
            <div className={cn('modal-video')}>
              <iframe
                className={cn('modal-video__iframe')}
                loading="lazy"
                width="800"
                height="500"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      ) : null}
    </button>
  );
}

VideoModal.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};
