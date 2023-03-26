import Hero from '@components/molecules/Hero';
import MainLayout from '@layouts/MainLayout';
import heroImages from '@shared/lazyLoadImages/heroImages.json';
import React from 'react';

import SectionProjects from './components/SectionProjects';

export default function Projects() {
  const { projects } = heroImages;

  return (
    <MainLayout>
      <Hero title={'Our Projects'} img={projects.image} blurhash={projects.blurhash} />
      <SectionProjects />
    </MainLayout>
  );
}
