import React from 'react';

import heroImg from '/assets/images/heroImages/kitchen-design.jpg';

import Hero from '../../components/Hero/Hero';
import MessageForm from '../../components/MessageForm/MessageForm';
import SectionAboutWorkflow from '../../components/SectionAboutWorkflow/SectionAboutWorkflow';
import SectionCommaV1 from '../../components/SectionCommaV1/SectionCommaV1';
import SectionTeamCards from '../../components/SectionTeamCards/SectionTeamCards';
import MainLayout from '../../layouts/MainLayout';
import { employeesText } from '../../shared';
import { commaText, formTexts, workflowTexts } from './texts';

export default function About() {
  return (
    <MainLayout>
      <Hero title={'About Us'} img={heroImg} />
      <SectionCommaV1 sectionInfo={commaText} />
      <SectionAboutWorkflow texts={workflowTexts} />
      <SectionTeamCards employeesText={employeesText} />
      <MessageForm text={formTexts} />
    </MainLayout>
  );
}
