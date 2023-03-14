import classNames from 'classnames/bind';
import React, { useState } from 'react';

import { projects } from '../../shared';
import { CircleLink } from '../CustomLink';
import SlidingButton from '../SlidingButton/SlidingButton';
import styles from './SectionProjects.module.scss';

const cn = classNames.bind(styles);

export default function SectionProjects() {
  const [currentProjects, setCurrentProjects] = useState(projects);
  console.log(setCurrentProjects);

  return (
    <>
      <SlidingButton />
      <div className={cn('projects')}>
        {currentProjects.map((project) => (
          <div key={project.id} className={cn('project-card')}>
            <img src={project.imgUrl} alt="" className={cn('project-card__image')} />
            <div className={cn('project-card__bottom-container')}>
              <span className={cn('project-card__title-category')}>
                <p className={cn('project-card__title')}>{project.title}</p>
                <p className={cn('project-card__category')}>
                  {project.serviceCategory} / Artchitecture
                </p>
              </span>
              <CircleLink path={project.path} size="large" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
