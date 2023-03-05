import React from 'react';

import HomeHero from '../../components/HomeHero';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import MainLayout from '../../layouts/MainLayout';
import projects from '../../shared/projects.json';
import heroInfo from './text/heroText.json';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeHero text={heroInfo} />
      <ProjectCard cardInfo={projects[3]} />
    </MainLayout>
  );
}
