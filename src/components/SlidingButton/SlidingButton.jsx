import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';

import SliderRadioButton from '../SliderRadioButton';
import styles from './SlidingButton.module.scss';
import { buttonsInfo } from './texts/texts';
import { buttonsCategories } from '../../shared/constants/texts';

const cn = classNames.bind(styles);

export default function SlidingButton() {
  const [currentMovement, setCurrentMovement] = useState(null);
  const { BATHROOM, BEDROOM, KITCHAN, LIVINGAREA } = buttonsCategories;
  const [currentlyActive, setCurrentlyActive] = useState(BATHROOM);

  const movement = (value) => setCurrentMovement(value);

  const handleClick = (e) => {
    if (e.target.id === BATHROOM) movement('button__active-background--to-first');
    else if (e.target.id === BEDROOM) movement('button__active-background--to-second');
    else if (e.target.id === KITCHAN) movement('button__active-background--to-third');
    else if (e.target.id === LIVINGAREA) movement('button__active-background--to-fourth');
  };

  const categoriesButton = buttonsInfo.map((item) => (
    <SliderRadioButton
      onClick={handleClick}
      key={item.id}
      text={item}
      className={
        currentlyActive === item.id
          ? classNames(styles['radio-button'], styles.active)
          : styles['radio-button']
      }
    />
  ));

  const onChangeValue = (e) => {
    setCurrentlyActive(e.target.id);
  };

  return (
    <div onChange={onChangeValue} className={cn('button__container')}>
      {categoriesButton}
      <span className={cn('button__active-background', currentMovement)}></span>
    </div>
  );
}

// SlidingButton.propTypes = {
//   children: PropTypes.string,
// };
