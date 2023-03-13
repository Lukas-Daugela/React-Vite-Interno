import classNames from 'classnames/bind';
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
import styles from './HomePage.module.scss';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <HomeHero />
        <SectionHomeServices />
        <SectionEstimate />
        <SectionTestimonials />
        <SectionClients />
        <SectionHomeProjects />
      </MainLayout>
      <CustomLayout>
        <SectionAchievments className={cn('section-achievments')} />
        <SectionHomeNews />
        <SectionJoinTeam className={cn('join-team')} />
      </CustomLayout>
    </>
  );
}
