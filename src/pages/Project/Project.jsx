import classNames from 'classnames/bind';
import React from 'react';
import { useParams } from 'react-router-dom';

import heroImage from '/assets/images/heroImages/modern-living-room.jpg';

import Hero from '../../components/Hero';
import SectionProjectDetails from '../../components/SectionProjectDetails/SectionProjectDetails';
import SectionProjectDetailsImage from '../../components/SectionProjectDetailsImage';
import MainLayout from '../../layouts/MainLayout';
import { projects } from '../../shared/projects';
import styles from './Project.module.scss';

const cn = classNames.bind(styles);

export default function Project() {
  const { projectId } = useParams();

  let singleProject;
  for (let i in projects) {
    const correctProject = projects[i].projectsInfo.find(
      (projectInfo) => projectInfo.projectId === projectId,
    );
    if (correctProject) singleProject = correctProject;
  }

  return (
    <MainLayout>
      <Hero img={heroImage} />
      <SectionProjectDetails project={singleProject} />
      <SectionProjectDetailsImage
        image={singleProject.imgUrl}
        className={cn('section-image')}
      />
    </MainLayout>
  );
}
