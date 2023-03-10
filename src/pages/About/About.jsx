import classNames from 'classnames/bind';
import React from 'react';

import heroImg from '/assets/images/heroImages/kitchen-design.jpg';

import Hero from '../../components/Hero/Hero';
import MessageForm from '../../components/MessageForm/MessageForm';
import SectionAboutWorkflow from '../../components/SectionAboutWorkflow/SectionAboutWorkflow';
import SectionCommaV1 from '../../components/SectionCommaV1/SectionCommaV1';
import SectionTeamCards from '../../components/SectionTeamCards/SectionTeamCards';
import CustomLayout from '../../layouts/CustomLayout/CustomLayout';
import MainLayout from '../../layouts/MainLayout';
import { employeesText } from '../../shared';
import styles from './About.module.scss';
import { commaText, formTexts, workflowTexts } from './texts';

const cn = classNames.bind(styles);

export default function About() {
  return (
    <>
      <MainLayout>
        <Hero title={'About Us'} img={heroImg} />
        <SectionCommaV1 sectionInfo={commaText} />
        <SectionAboutWorkflow texts={workflowTexts} className={cn('section__workflow')} />
      </MainLayout>
      <CustomLayout>
        <SectionTeamCards employeesText={employeesText} />
        <MessageForm text={formTexts} />
      </CustomLayout>
    </>
  );
}
