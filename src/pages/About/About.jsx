import React from 'react';

import SectionCommaV1 from '../../components/SectionCommaV1/SectionCommaV1';
import MainLayout from '../../layouts/MainLayout';
import { commaText } from '../../shared';

export default function About() {
  return (
    <MainLayout>
      <div>About</div>
      <SectionCommaV1 sectionInfo={commaText} />
    </MainLayout>
  );
}
