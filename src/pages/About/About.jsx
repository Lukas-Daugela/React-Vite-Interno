import React from 'react';

import MessageForm from '../../components/MessageForm/MessageForm';
import SectionAboutWorkflow from '../../components/SectionAboutWorkflow/SectionAboutWorkflow';
import MainLayout from '../../layouts/MainLayout';
import { formTexts } from './texts';

export default function About() {
  return (
    <MainLayout>
      <div>About</div>
      <SectionAboutWorkflow text="text" />
      <MessageForm text={formTexts} />
    </MainLayout>
  );
}
