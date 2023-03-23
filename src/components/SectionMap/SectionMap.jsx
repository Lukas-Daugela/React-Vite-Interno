import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import classNames from 'classnames/bind';
import React, { useMemo, useState } from 'react';

import styles from './SectionMap.module.scss';

const cn = classNames.bind(styles);

export default function SectionMap() {
  const [selected, setSelected] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBhvxIMflM5ZwsHEa5X5bCWtHXx_b6htlY',
  });

  // GoogleMap container style
  const containerStyle = useMemo(
    () => ({
      width: '100%',
      height: '100%',
    }),
    [],
  );

  // GoogleMap initial position and Marker position
  const center = useMemo(
    () => ({
      lat: 54.896932,
      lng: 23.919109,
    }),
    [],
  );

  // GoogleMap options
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    [],
  );

  return (
    <div className={cn('map')}>
      {isLoaded && (
        <GoogleMap
          zoom={13}
          center={center}
          options={options}
          mapContainerStyle={containerStyle}
        >
          <Marker position={center} onClick={() => setSelected(!selected)} />
        </GoogleMap>
      )}
    </div>
  );
}
