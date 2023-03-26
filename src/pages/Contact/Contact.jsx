import React from 'react';

import Hero from '@components/molecules/Hero';
import SectionContactUs from '../../components/SectionContactUs/SectionContactUs';
import SectionMap from '../../components/SectionMap';
import MainLayout from '../../layouts/MainLayout';
import heroImages from '../../shared/lazyLoadImages/heroImages.json';

export default function Contact() {
  const { contact } = heroImages;

  return (
    <MainLayout>
      <Hero blurhash={contact.blurhash} img={contact.image} title={'Contact Us'} />
      <SectionContactUs />
      <SectionMap />
    </MainLayout>
  );
}
