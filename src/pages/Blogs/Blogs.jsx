import MainLayout from '@layouts/MainLayout';
import React from 'react';

import SectionBlogsIntro from './components/SectionBlogsIntro';

export default function Blogs() {
  return (
    <MainLayout>
      <div>Blogs</div>
      <SectionBlogsIntro />
    </MainLayout>
  );
}
