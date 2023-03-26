import classNames from 'classnames/bind';
import React from 'react';

import Hero from '@components/molecules/Hero';
import SectionJoinTeam from '../../components/SectionJoinTeam';
import SectionServices from '../../components/SectionServices';
import SectionServiceWorkflow from '../../components/SectionServiceWorkflow';
import MainLayout from '../../layouts/MainLayout';
import heroImages from '../../shared/lazyLoadImages/heroImages.json';
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
