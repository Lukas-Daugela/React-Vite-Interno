import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import MainLayout from '../../layouts/MainLayout';
import { formTexts } from './texts';

export default function Contact() {
  return (
    <MainLayout>
      <div>Contact</div>
      <ContactForm text={formTexts} />
    </MainLayout>
  );
}
