import React from 'react';
import { useParams } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import { serviceCards } from '../../shared';

export default function Service() {
  const { serviceId } = useParams();

  const service = serviceCards.find((serviceCard) => serviceCard.serviceId === serviceId);
  console.log(service);

  return (
    <MainLayout>
      <div>Service</div>
    </MainLayout>
  );
}