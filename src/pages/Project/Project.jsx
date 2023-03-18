import classNames from 'classnames/bind';
import React from 'react';
import { useParams } from 'react-router-dom';

import heroImage from '/assets/images/heroImages/modern-living-room.jpg';

import Hero from '../../components/Hero';
import SectionProjectDetailsImage from '../../components/SectionProjectDetailsImage';
import MainLayout from '../../layouts/MainLayout';
import projects from '../../shared/projects';
import styles from './Project.module.scss';

const cn = classNames.bind(styles);

export default function Project() {
  console.log(cn);
  const { projectId } = useParams();

  const project = projects.map((projectObject) => {
    projectObject.projectsInfo.find((projectInfo) => projectInfo.projectId === projectId);
  });

  console.log(project);

  return (
    <MainLayout>
      <Hero img={heroImage} />
      <SectionProjectDetailsImage image={heroImage} />
    </MainLayout>
  );
}
