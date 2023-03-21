import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './CustomLazyLoadImage.module.scss';

const cn = classNames.bind(styles);

export default function CustomLazyLoadImage({
  imgUrl,
  blurhash,
  containerClass,
  imageClass,
}) {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    setLoadStarted(true);
  };

  return (
    <div className={cn(containerClass)}>
      <LazyLoadImage
        src={imgUrl}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
        className={cn('image', imageClass)}
      />
      {!isLoaded && isLoadStarted && (
        <Blurhash
          className={cn('blurhash')}
          hash={blurhash}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
    </div>
  );
}

CustomLazyLoadImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  blurhash: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  imageClass: PropTypes.string,
};
