import classNames from 'classnames/bind';
import React from 'react';

import { projects } from '../../shared';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './SectionHomeProjects.module.scss';

const cn = classNames.bind(styles);

export default function SectionHomeProjects() {
  return (
    <div className={cn('projects')}>
      <div className={cn('projects__text-container')}>
        <h2 className={cn('projects__title')}>Follow Our Projects</h2>
        <p className={cn('projects__description')}>
          It is a long established fact that a reader will be distracted by the of
          readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className={cn('projects__cards-container')}>
        {projects.slice(0, 4).map((project) => (
          <div key={project.id} className={cn('projects__card')}>
            <ProjectCard cardInfo={project}>
              <img src={project.imgUrl} alt="" className={cn('projects__img')} />
            </ProjectCard>
          </div>
        ))}
      </div>
    </div>
  );
}
