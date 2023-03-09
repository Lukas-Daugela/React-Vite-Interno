import React from 'react';

import MessageForm from '../../components/MessageForm/MessageForm';
import MainLayout from '../../layouts/MainLayout';
import { formTexts } from './texts';

export default function About() {
  return (
    <MainLayout>
      <div>About</div>
      <MessageForm text={formTexts} />
    </MainLayout>
  );
}
