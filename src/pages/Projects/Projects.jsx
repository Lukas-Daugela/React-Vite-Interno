import React from 'react';

import heroImg from '/assets/images/heroImages/modern-light-bedroom.jpg';

import Hero from '../../components/Hero';
import SectionProjects from '../../components/SectionProjects/SectionProjects';
import MainLayout from '../../layouts/MainLayout';

export default function Projects() {
  return (
    <MainLayout>
      <Hero title={'Our Projects'} img={heroImg} />
      <SectionProjects />
    </MainLayout>
  );
}
