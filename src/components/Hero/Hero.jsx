import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import styles from './Hero.module.scss';

const cn = classNames.bind(styles);

export default function Hero({ title, img, blurhash }) {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    setLoadStarted(true);
  };

  return (
    <div className={cn('hero')}>
      <LazyLoadImage
        src={img}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
        className={cn('hero__img')}
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
      {/* <img className={cn('hero__img')} src={img} alt="" /> */}
      {title && (
        <div className={cn('hero__title-container')}>
          <h1 className={cn('hero__title')}>{title}</h1>
          <div className={cn('hero__description')}>
            <Link to="/" className={cn('hero__backwards-link')}>
              Home
            </Link>
            <span className={cn('hero__current-page')}> / {title}</span>
          </div>
        </div>
      )}
    </div>
  );
}

Hero.proptTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  blurhash: PropTypes.string,
};
