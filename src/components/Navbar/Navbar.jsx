import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { BurgerIcon, CloseIcon } from '../../../public/assets/svg';
import styles from './Navbar.module.scss';

const cn = classNames.bind(styles);

export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    return isBurgerOpen
      ? document.body.classList.add(cn('no-scroll'))
      : document.body.classList.remove(cn('no-scroll'));
  }, [isBurgerOpen]);
  return (
    <>
      <button
        className={cn('nav-button')}
        onClick={() => setIsBurgerOpen((prev) => !prev)}
      >
        Button
        {isBurgerOpen ? <CloseIcon /> : <BurgerIcon />}
      </button>
      <nav
        className={cn(
          'navigation',
          { 'navigation--expanded': isBurgerOpen },
          { 'navigation--closed': !isBurgerOpen },
        )}
      >
        <ul className={cn('navigation__wrapper')}>
          <li className={cn('navigation__option')}>
            <NavLink
              className={cn('navigation__link')}
              onClick={() => setIsBurgerOpen(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={cn('navigation__option')}>
            <NavLink
              className={cn('navigation__link')}
              onClick={() => setIsBurgerOpen(false)}
              to="about"
            >
              About Us
            </NavLink>
          </li>
          <li className={cn('navigation__option')}>
            <NavLink
              className={cn('navigation__link')}
              onClick={() => setIsBurgerOpen(false)}
              to="services"
            >
              Services
            </NavLink>
          </li>
          <li className={cn('navigation__option')}>
            <NavLink
              className={cn('navigation__link')}
              onClick={() => setIsBurgerOpen(false)}
              to="projects"
            >
              Projects
            </NavLink>
          </li>
          <li className={cn('navigation__option')}>
            <NavLink
              className={cn('navigation__link')}
              onClick={() => setIsBurgerOpen(false)}
              to="blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li className={cn('navigation__option')}>
            <NavLink
              className={cn('navigation__link')}
              onClick={() => setIsBurgerOpen(false)}
              to="contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
