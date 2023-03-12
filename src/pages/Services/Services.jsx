import React from 'react';

import heroImg from '/assets/images/heroImages/modern-kitchen.jpg';

import Hero from '../../components/Hero';
import SectionServices from '../../components/SectionServices';
import SectionServiceWorkflow from '../../components/SectionServiceWorkflow';
import MainLayout from '../../layouts/MainLayout';

export default function Services() {
  return (
    <MainLayout>
      <Hero title={'Services'} img={heroImg} />
      <SectionServices />
      <SectionServiceWorkflow />
    </MainLayout>
  );
}
