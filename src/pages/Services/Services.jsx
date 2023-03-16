import classNames from 'classnames/bind';
import React, { useState } from 'react';

import heroImg from '/assets/images/heroImages/modern-kitchen.jpg';

import Hero from '../../components/Hero';
import Modal from '../../components/Modal';
import ModalImage from '../../components/ModalImage';
import SectionJoinTeam from '../../components/SectionJoinTeam';
import SectionServices from '../../components/SectionServices';
import SectionServiceWorkflow from '../../components/SectionServiceWorkflow';
import MainLayout from '../../layouts/MainLayout';
import styles from './Services.module.scss';

const cn = classNames.bind(styles);

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <MainLayout>
      <Hero title={'Services'} img={heroImg} />
      <button onClick={handleModalOpen}>Open modal</button>
      {isOpen && (
        <Modal ariaLabel="img" isOpen={isOpen} onClose={handleModalClose}>
          <ModalImage alt="altText" caption="This is Caption" image={heroImg} />
        </Modal>
      )}
      <SectionServices />
      <SectionServiceWorkflow />
      <SectionJoinTeam className={cn('join-team')} />
    </MainLayout>
  );
}
