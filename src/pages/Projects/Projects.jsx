import React from 'react';

import Hero from '../../components/Hero';
import SectionProjects from '../../components/SectionProjects/SectionProjects';
import MainLayout from '../../layouts/MainLayout';
import heroImages from '../../shared/lazyLoadImages/heroImages.json';

export default function Projects() {
  const { projects } = heroImages;

  return (
    <MainLayout>
      <Hero title={'Our Projects'} img={projects.image} blurhash={projects.blurhash} />
      <SectionProjects />
    </MainLayout>
  );
}
