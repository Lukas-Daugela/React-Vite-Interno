import Hero from '@components/molecules/Hero';
import CustomLayout from '@layouts/CustomLayout';
import MainLayout from '@layouts/MainLayout';
import heroImages from '@shared/lazyLoadImages/heroImages.json';
import React from 'react';

import SectionCommaV1 from '../../components/SectionCommaV1';
import SectionMessageForm from '../../components/SectionMessageForm';
import SectionTeamCards from '../../components/SectionTeamCards';
import SectionAboutWorkflow from './components/SectionAboutWorkflow';

export default function About() {
  const { about } = heroImages;

  return (
    <>
      <MainLayout>
        <Hero title={'About Us'} img={about.image} blurhash={about.blurhash} />
        <SectionCommaV1 />
        <SectionAboutWorkflow />
      </MainLayout>
      <CustomLayout>
        <SectionTeamCards />
        <SectionMessageForm />
      </CustomLayout>
    </>
  );
}
