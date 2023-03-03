import React from 'react';

import CustomLink from '../../components/CustomLink/CustomLink';
import MainLayout from '../../layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <div>HomePage</div>
      <CustomLink path={'about'}>Read More</CustomLink>
    </MainLayout>
  );
}
