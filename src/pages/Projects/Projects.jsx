import React from 'react';

import SectionProjects from '../../components/SectionProjects/SectionProjects';
// import SlidingButton from '../../components/SlidingButton/SlidingButton';
import MainLayout from '../../layouts/MainLayout';

export default function Projects() {
  return (
    <MainLayout>
      <div>Projects</div>
      {/* <SlidingButton /> */}
      <SectionProjects />
    </MainLayout>
  );
}
