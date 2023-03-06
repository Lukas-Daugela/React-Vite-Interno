import React from 'react';

import HomeHero from '../../components/HomeHero';
import SectionEstimate from '../../components/SectionEstimate/SectionEstimate';
import MainLayout from '../../layouts/MainLayout';
import { estimateText, heroText } from './text';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeHero text={heroText} />
      <SectionEstimate estimateInfo={estimateText} />
    </MainLayout>
  );
}
