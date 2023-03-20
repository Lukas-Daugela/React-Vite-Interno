import classNames from 'classnames/bind';
import React from 'react';

import heroImages from '../../shared/heroImages/heroImages.json';

import Hero from '../../components/Hero';
import SectionJoinTeam from '../../components/SectionJoinTeam';
import SectionServices from '../../components/SectionServices';
import SectionServiceWorkflow from '../../components/SectionServiceWorkflow';
import MainLayout from '../../layouts/MainLayout';
import styles from './Services.module.scss';

const cn = classNames.bind(styles);

export default function Services() {
  const { services } = heroImages;

  return (
    <MainLayout>
      <Hero title={'Services'} img={services.image} blurhash={services.blurhash} />
      <SectionServices />
      <SectionServiceWorkflow />
      <SectionJoinTeam className={cn('join-team')} />
    </MainLayout>
  );
}
