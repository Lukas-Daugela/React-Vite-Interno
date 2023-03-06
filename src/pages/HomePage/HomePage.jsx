import React from 'react';

import HomeHero from '../../components/HomeHero';
import SectionEstimate from '../../components/SectionEstimate/SectionEstimate';
import SectionHomeServices from '../../components/SectionHomeServices';
import MainLayout from '../../layouts/MainLayout';
import serviceCardsText from '../../shared/serviceCardsText.json';
import { estimateText, heroText } from './text';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeHero text={heroText} />
      <SectionHomeServices cardsText={serviceCardsText} />
      <SectionEstimate estimateInfo={estimateText} />
    </MainLayout>
  );
}
