import React from 'react';

import HomeHero from '../../components/HomeHero';
import MainLayout from '../../layouts/MainLayout';
import testImg from '../../shared/newsCards.json';
import heroInfo from './text/heroText.json';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeHero text={heroInfo} />
      <div>HomePage</div>
      {testImg.map((text) => (
        <img key={text.imgUrl} src={text.imgUrl} alt="" />
      ))}
    </MainLayout>
  );
}
