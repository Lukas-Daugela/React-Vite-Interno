import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './SectionHomeProjects.module.scss';

const cn = classNames.bind(styles);

export default function SectionHomeProjects({ projects }) {
  return (
    <div className={cn('projects')}>
      <h2 className={cn('projects__title')}>Follow Our Projects</h2>
      <p className={cn('projects__description')}>
        It is a long established fact that a reader will be distracted by the of readable
        content of page lookings at its layouts points.
      </p>
      <div className={cn('projects__cards-container')}>
        {projects.slice(0, 4).map((project) => (
          <div key={project.id} className={cn('projects__card')}>
            <ProjectCard cardInfo={project}>
              <img src={project.imgUrl} alt="" />
            </ProjectCard>
          </div>
        ))}
      </div>
    </div>
  );
}

SectionHomeProjects.propTypes = {
  projects: PropTypes.array,
};
