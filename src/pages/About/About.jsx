import React from 'react';

import MessageForm from '../../components/MessageForm/MessageForm';
import SectionAboutWorkflow from '../../components/SectionAboutWorkflow/SectionAboutWorkflow';
import MainLayout from '../../layouts/MainLayout';
import { formTexts, workflowTexts } from './texts';

export default function About() {
  return (
    <MainLayout>
      <div>About</div>
      <SectionAboutWorkflow texts={workflowTexts} />
      <MessageForm text={formTexts} />
    </MainLayout>
  );
}
