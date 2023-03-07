import React from 'react';

import HomeHero from '../../components/HomeHero';
import SectionAchievments from '../../components/SectionAchievments';
import SectionClients from '../../components/SectionClients';
import SectionEstimate from '../../components/SectionEstimate';
import SectionHomeNews from '../../components/SectionHomeNews';
import SectionHomeProjects from '../../components/SectionHomeProjects';
import SectionHomeServices from '../../components/SectionHomeServices';
import SectionJoinTeam from '../../components/SectionJoinTeam';
import SectionTestimonials from '../../components/SectionTestimonials';
import CustomLayout from '../../layouts/CustomLayout/CustomLayout';
import MainLayout from '../../layouts/MainLayout';
import { achievments, newsCards, projects, serviceCards } from '../../shared';
import { estimateText, heroText, testimonialsText } from './text';

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <HomeHero text={heroText} />
        <SectionHomeServices cardsText={serviceCards} />
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
        <SectionJoinTeam />
      </CustomLayout>
    </>
  );
}
