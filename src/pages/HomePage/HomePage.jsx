import React from 'react';

import HomeHero from '../../components/HomeHero';
import SectionAchievments from '../../components/SectionAchievments';
import SectionClients from '../../components/SectionClients/SectionClients';
import SectionEstimate from '../../components/SectionEstimate/SectionEstimate';
import SectionHomeNews from '../../components/SectionHomeNews';
import SectionHomeProjects from '../../components/SectionHomeProjects/SectionHomeProjects';
import SectionHomeServices from '../../components/SectionHomeServices';
import SectionTestimonials from '../../components/SectionTestimonials';
import CustomLayout from '../../layouts/CustomLayout/CustomLayout';
import MainLayout from '../../layouts/MainLayout';
import achievments from '../../shared/achievments.json';
import newsCards from '../../shared/newsCards.json';
import projects from '../../shared/projects.json';
import serviceCardsText from '../../shared/serviceCardsText.json';
import { estimateText, heroText, testimonialsText } from './text';

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <HomeHero text={heroText} />
        <SectionHomeServices cardsText={serviceCardsText} />
        <SectionEstimate estimateInfo={estimateText} />
        <SectionTestimonials
          testimonialsInfo={testimonialsText}
          title={'What the People Thinks About Us'}
        />
        <SectionClients />
        <SectionHomeProjects projects={projects} />
      </MainLayout>
      <CustomLayout>
        <SectionAchievments achievments={achievments} />
        <SectionHomeNews cardsInfo={newsCards} />
      </CustomLayout>
    </>
  );
}
