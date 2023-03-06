import React from 'react';

import HomeHero from '../../components/HomeHero';
import SectionEstimate from '../../components/SectionEstimate/SectionEstimate';
import MainLayout from '../../layouts/MainLayout';
import heroInfo from './text/heroText.json';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeHero text={heroInfo} />
      <SectionEstimate />
    </MainLayout>
  );
}
