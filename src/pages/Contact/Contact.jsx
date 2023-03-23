import React from 'react';

import SectionContactUs from '../../components/SectionContactUs/SectionContactUs';
import SectionMap from '../../components/SectionMap';
import MainLayout from '../../layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <div>Contact</div>
      <SectionContactUs />
      <SectionMap />
    </MainLayout>
  );
}
