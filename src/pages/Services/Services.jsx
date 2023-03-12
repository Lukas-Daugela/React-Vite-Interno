import React from 'react';

import SectionServices from '../../components/SectionServices';
import SectionServiceWorkflow from '../../components/SectionServiceWorkflow';
import MainLayout from '../../layouts/MainLayout';

export default function Services() {
  return (
    <MainLayout>
      <div>Services</div>
      <SectionServices />
      <SectionServiceWorkflow />
    </MainLayout>
  );
}
