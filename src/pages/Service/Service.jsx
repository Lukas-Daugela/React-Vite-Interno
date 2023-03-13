import React from 'react';
import { useParams } from 'react-router-dom';

import heroImage from '/assets/images/heroImages/bright-living-room.jpg';

import Hero from '../../components/Hero';
import SectionGlimpseOfPortfolio from '../../components/SectionGlimpseOfPortfolio/SectionGlimpseOfPortfolio';
import SectionServiceBenefits from '../../components/SectionServiceBenefits';
import SectionServiceIntro from '../../components/SectionServiceIntro';
import MainLayout from '../../layouts/MainLayout';
import { serviceCards } from '../../shared';

export default function Service() {
  const { serviceId } = useParams();

  const service = serviceCards.find((serviceCard) => serviceCard.serviceId === serviceId);

  return (
    <MainLayout>
      <Hero title={'Service Single'} img={heroImage} />
      <SectionGlimpseOfPortfolio />
      <SectionServiceBenefits />
      <SectionServiceIntro introInfo={service} />
    </MainLayout>
  );
}
