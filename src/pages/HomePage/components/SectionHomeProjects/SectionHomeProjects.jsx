import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import ProjectCard from '@components/molecules/ProjectCard';
import { buttonsCategories } from '@shared/constants/texts';
import { filterProjects } from '@shared/functions/dataFilter';
import { projects } from '@shared/projects';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionHomeProjects.module.scss';

const cn = classNames.bind(styles);

export default function SectionHomeProjects() {
  const displayedProjects = filterProjects(projects, buttonsCategories.LIVINGAREA);

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
        {displayedProjects.slice(0, 4).map((project) => (
          <div key={project.id} className={cn('projects__card')}>
            <ProjectCard cardInfo={project}>
              <CustomLazyLoadImage
                blurhash={project.blurhash}
                imgUrl={project.imgUrl}
                containerClass={cn('projects__img')}
              />
            </ProjectCard>
          </div>
        ))}
      </div>
    </div>
  );
}
