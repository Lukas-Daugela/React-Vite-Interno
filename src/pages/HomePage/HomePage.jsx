import React from 'react';

import HomeHero from '../../components/HomeHero';
import SectionClients from '../../components/SectionClients/SectionClients';
import SectionEstimate from '../../components/SectionEstimate/SectionEstimate';
import SectionHomeProjects from '../../components/SectionHomeProjects/SectionHomeProjects';
import SectionHomeServices from '../../components/SectionHomeServices';
import MainLayout from '../../layouts/MainLayout';
import projects from '../../shared/projects.json';
import serviceCardsText from '../../shared/serviceCardsText.json';
import { estimateText, heroText } from './text';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeHero text={heroText} />
      <SectionHomeServices cardsText={serviceCardsText} />
      <SectionEstimate estimateInfo={estimateText} />
      <SectionClients />
      <SectionHomeProjects projects={projects} />
    </MainLayout>
  );
}
