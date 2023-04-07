import MainLayout from '@layouts/MainLayout';
import { newsCards } from '@shared';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SectionBlogIntro from './components/SectionBlogIntro/SectionBlogIntro';

export default function Blog() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/blogs');
  };

  const { blogId } = useParams();

  const blogInfo = newsCards.find((blogCard) => blogCard.blogId === blogId);

  return (
    <MainLayout>
      <div>Blog</div>
      <SectionBlogIntro blogInfo={blogInfo} />
    </MainLayout>
  );
}
