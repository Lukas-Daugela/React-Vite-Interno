import Hero from '@components/molecules/Hero';
import MainLayout from '@layouts/MainLayout';
import heroImages from '@shared/lazyLoadImages/heroImages.json';
import React from 'react';

import SectionBlogsIntro from './components/SectionBlogsIntro';
import SectionBlogsNews from './components/SectionBlogsNews';

export default function Blogs() {
  const { blogs } = heroImages;

  return (
    <MainLayout>
      <Hero title={'Articles & News'} img={blogs.image} blurhash={blogs.blurhash} />
      <SectionBlogsIntro />
      <SectionBlogsNews />
    </MainLayout>
  );
}
