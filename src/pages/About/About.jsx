import React from 'react';

import heroImg from '/assets/images/heroImages/kitchen-design.jpg';

import Hero from '../../components/Hero/Hero';
import SectionAboutWorkflow from '../../components/SectionAboutWorkflow/SectionAboutWorkflow';
import SectionCommaV1 from '../../components/SectionCommaV1/SectionCommaV1';
import SectionMessageForm from '../../components/SectionMessageForm/SectionMessageForm';
import SectionTeamCards from '../../components/SectionTeamCards/SectionTeamCards';
import CustomLayout from '../../layouts/CustomLayout/CustomLayout';
import MainLayout from '../../layouts/MainLayout';

export default function About() {
  return (
    <>
      <MainLayout>
        <Hero title={'About Us'} img={heroImg} />
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
