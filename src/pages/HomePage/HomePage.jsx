import React from 'react';

import HomeHero from '../../components/HomeHero';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import MainLayout from '../../layouts/MainLayout';
import heroInfo from './text/heroText.json';
import cardInfo from './text/testimonialsText.json';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeHero text={heroInfo} />
      <div>HomePage</div>
      <TestimonialCard cardInfo={cardInfo[0]} />
    </MainLayout>
  );
}
