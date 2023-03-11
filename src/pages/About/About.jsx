import React from 'react';

import heroImg from '/assets/images/heroImages/kitchen-design.jpg';

import Hero from '../../components/Hero';
import SectionAboutWorkflow from '../../components/SectionAboutWorkflow';
import SectionCommaV1 from '../../components/SectionCommaV1';
import SectionMessageForm from '../../components/SectionMessageForm';
import SectionTeamCards from '../../components/SectionTeamCards';
import CustomLayout from '../../layouts/CustomLayout';
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
