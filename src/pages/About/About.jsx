import React from 'react';

import MessageForm from '../../components/MessageForm/MessageForm';
import SectionAboutWorkflow from '../../components/SectionAboutWorkflow/SectionAboutWorkflow';
import SectionTeamCards from '../../components/SectionTeamCards/SectionTeamCards';
import MainLayout from '../../layouts/MainLayout';
import { employeesText } from '../../shared';
import { formTexts, workflowTexts } from './texts';

export default function About() {
  return (
    <MainLayout>
      <div>About</div>
      <SectionTeamCards employeesText={employeesText} />
      <SectionAboutWorkflow texts={workflowTexts} />
      <MessageForm text={formTexts} />
    </MainLayout>
  );
}
