import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import styles from './SectionAboutWorkflow.module.scss';

const cn = classNames.bind(styles);

export default function SectionAboutWorkflow({ texts }) {
  return (
    <div className={cn('workflow')}>
      {texts.map((text) => (
        <div key={text.id} className={cn('workflow-single')}>
          <div className={cn('workflow-single__text-container')}>
            <h2 className={cn('workflow-single__title')}>{text.title}</h2>
            <p className={cn('workflow-single__description')}>{text.description}</p>
            <Link to={text.buttonLink}>
              <Button>{text.buttonTitle}</Button>
            </Link>
          </div>
          <img className={cn('workflow-single__image')} src={text.imgUrl} alt="" />
        </div>
      ))}
    </div>
  );
}

SectionAboutWorkflow.propTypes = {
  texts: PropTypes.array.isRequired,
};
