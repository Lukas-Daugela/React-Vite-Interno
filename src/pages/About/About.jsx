import React from 'react';

import MessageForm from '../../components/MessageForm/MessageForm';
import SectionAboutWorkflow from '../../components/SectionAboutWorkflow/SectionAboutWorkflow';
import TeamPersonCard from '../../components/TeamPersonCard/TeamPersonCard';
import MainLayout from '../../layouts/MainLayout';
import { employeesText } from '../../shared';
import { formTexts, workflowTexts } from './texts';

export default function About() {
  return (
    <MainLayout>
      <div>About</div>
      <TeamPersonCard text={employeesText[0]} />
      <SectionAboutWorkflow texts={workflowTexts} />
      <MessageForm text={formTexts} />
    </MainLayout>
  );
}
