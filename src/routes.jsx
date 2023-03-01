import React, { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Contact = lazy(() => import('./pages/Contact'));
const Service = lazy(() => import('./pages/Service'));

// Later change to proper Titles
const TITLES = {
  HOMEPAGE: 'TITLE',
  ABOUT: 'TITLE',
  PROJECTS: 'TITLE',
  BLOGS: 'TITLE',
  CONTACT: 'TITLE',
  SERVICE: 'TITLE',
};

const ROUTES = [
  {
    path: '/',
    title: TITLES.HOMEPAGE,
    element: <HomePage />,
  },

  {
    path: '/about',
    title: TITLES.ABOUT,
    element: <About />,
  },
  {
    path: '/projects',
    title: TITLES.PROJECTS,
    element: <Projects />,
  },
  {
    path: '/blogs',
    title: TITLES.BLOGS,
    element: <Blogs />,
  },
  {
    path: '/contact',
    title: TITLES.CONTACT,
    element: <Contact />,
  },
  {
    path: '/service',
    title: TITLES.SERVICE,
    element: <Service />,
  },
];

export default ROUTES;
