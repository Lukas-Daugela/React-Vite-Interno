import classNames from 'classnames/bind';
import React from 'react';
import { useParams } from 'react-router-dom';

import heroImage from '/assets/images/heroImages/bright-living-room.jpg';

import Hero from '../../components/Hero';
import SectionAchievments from '../../components/SectionAchievments';
import SectionClients from '../../components/SectionClients';
import SectionGlimpseOfPortfolio from '../../components/SectionGlimpseOfPortfolio/SectionGlimpseOfPortfolio';
import SectionServiceBenefits from '../../components/SectionServiceBenefits';
import SectionServiceIntro from '../../components/SectionServiceIntro';
import SectionServiceVideo from '../../components/SectionServiceVideo';
import CustomLayout from '../../layouts/CustomLayout/CustomLayout';
import MainLayout from '../../layouts/MainLayout';
import { serviceCards } from '../../shared';
import styles from './Service.module.scss';

const cn = classNames.bind(styles);

export default function Service() {
  const { serviceId } = useParams();

  const service = serviceCards.find((serviceCard) => serviceCard.serviceId === serviceId);

  return (
    <>
      <MainLayout>
        <Hero title={'Service Single'} img={heroImage} />
        <SectionServiceIntro introInfo={service} />
        <SectionClients />
        <SectionServiceVideo thumbnail={service.thumbnail} videoUrl={service.videoUrl} />
        <SectionServiceBenefits />
        <SectionGlimpseOfPortfolio />
      </MainLayout>
      <CustomLayout>
        <SectionAchievments className={cn('section-achievments')} />
      </CustomLayout>
    </>
  );
}
