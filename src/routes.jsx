import React, { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Service = lazy(() => import('./pages/Service'));
const Project = lazy(() => import('./pages/Project'));
const NotFound = lazy(() => import('./pages/NotFound'));
const UnderDevelopment = lazy(() => import('./pages/UnderDevelopment'));

const TITLES = {
  HOMEPAGE: 'Home',
  ABOUT: 'About Us',
  PROJECTS: 'Projects',
  PROJECT: 'Project',
  BLOGS: 'Blogs',
  CONTACT: 'Contact',
  SERVICES: 'Services',
  SERVICE: 'Service',
  NOTFOUND: 'Not Found',
  UNDERDEVELOPMENT: 'Not ready',
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
    path: '/projects/:projectId',
    title: TITLES.PROJECT,
    element: <Project />,
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
    path: '/services',
    title: TITLES.SERVICES,
    element: <Services />,
  },
  {
    path: '/services/:serviceId',
    title: TITLES.SERVICE,
    element: <Service />,
  },
  {
    path: '/under-development',
    title: TITLES.UNDERDEVELOPMENT,
    element: <UnderDevelopment />,
  },
  {
    path: '*',
    title: TITLES.NOTFOUND,
    element: <NotFound />,
  },
];

export default ROUTES;
