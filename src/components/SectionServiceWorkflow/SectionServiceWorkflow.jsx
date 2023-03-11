import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionServiceWorkflow.module.scss';
import texts from './text/workflowTexts.json';

const cn = classNames.bind(styles);

export default function SectionServiceWorkflow() {
  return (
    <div className={cn('workflow')}>
      <h2 className={cn('workflow__title')}>How We Work</h2>
      <p className={cn('workflow__desciption')}>
        It is a long established fact will be distracted.Lorem Ipsum is simply dummy text
        of the printing and typesetting industry.
      </p>
      <div className={cn('workflow-steps')}>
        {texts.map((text) => (
          <div key={text.id} className={cn('workflow-step')}>
            <img src={text.imgUrl} alt="" className={cn('workflow-step')} />
            <div className={cn('text-side')}>
              <div className={cn('text-side__icon-container')}>
                <img src={text.iconUrl} alt="" />
                <p className={cn('text-side__icon-container')}>{text.step}</p>
              </div>
              <div className={cn('text-side__text-container')}>
                <h3>{text.title}</h3>
                <p>{text.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
