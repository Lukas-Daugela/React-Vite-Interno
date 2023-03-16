import classNames from 'classnames/bind';
import React from 'react';

import heroImg from '/assets/images/heroImages/modern-kitchen.jpg';

import Hero from '../../components/Hero';
import SectionJoinTeam from '../../components/SectionJoinTeam';
import SectionServices from '../../components/SectionServices';
import SectionServiceWorkflow from '../../components/SectionServiceWorkflow';
import MainLayout from '../../layouts/MainLayout';
import styles from './Services.module.scss';

const cn = classNames.bind(styles);

export default function Services() {
  return (
    <MainLayout>
      <Hero title={'Services'} img={heroImg} />
      <SectionServices />
      <SectionServiceWorkflow />
      <SectionJoinTeam className={cn('join-team')} />
    </MainLayout>
  );
}
