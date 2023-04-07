import MainLayout from '@layouts/MainLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Tag from './components/Tag';

export default function Blog() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/blogs');
  };

  return (
    <MainLayout>
      <div>Blog</div>
      <Tag active onClick={handleNavigate}>
        Kitchen
      </Tag>
    </MainLayout>
  );
}
