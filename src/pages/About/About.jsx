import React from 'react';

import SectionCommaV2 from '../../components/SectionCommaV2';
import MainLayout from '../../layouts/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <div>About</div>
      <SectionCommaV2 text={'The details are not the details. They make the design.'} />
    </MainLayout>
  );
}
