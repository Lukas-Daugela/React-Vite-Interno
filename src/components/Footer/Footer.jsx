import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Chevron,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from '../../../public/assets/svg';
import NavLogo from '../../../public/assets/svg/NavLogo';
import FooterListCard from '../FooterListCard';
import styles from './Footer.module.scss';
import { pageLinks } from './text';

const cn = classNames.bind(styles);

export default function Footer() {
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  return (
    <footer className={cn('footer')}>
      <div className={cn('footer__links-wrapper')}>
        <div className={cn('footer__about-social')}>
          <Link to="/" className={cn('footer__logo-title')}>
            <NavLogo />
            Interno
          </Link>
          <p className={cn('footer__description')}>
            It is a long established fact that a reader will be distracted lookings.
          </p>
          <ul className={cn('footer__social-links')}>
            <li className={cn('footer__social-option')}>
              <Link to="/" className={cn('link')}>
                <Facebook />
              </Link>
            </li>
            <li className={cn('footer__social-option')}>
              <Link to="/" className={cn('link')}>
                <Twitter />
              </Link>
            </li>
            <li className={cn('footer__social-option')}>
              <Link to="/" className={cn('link')}>
                <Linkedin />
              </Link>
            </li>
            <li className={cn('footer__social-option')}>
              <Link to="/" className={cn('link')}>
                <Instagram />
              </Link>
            </li>
          </ul>
        </div>
        {pageLinks.map((link) => {
          return (
            <FooterListCard key={link.title} links={link.links} title={link.title} />
          );
        })}
        {/* Contact */}
        <div className={cn('page-links')}>
          <button
            onClick={() => setIsContactsOpen(!isContactsOpen)}
            className={cn('page-links__button')}
          >
            <h3 className={cn('page-links__title')}>
              Contact
              <Chevron
                className={cn('page-links__chevron-icon', {
                  'page-links__chevron-icon--expanded': isContactsOpen,
                })}
              />
            </h3>
          </button>
          <ul
            className={cn('page-links__list', {
              'page-links__list--expanded': isContactsOpen,
            })}
          >
            <li>
              <p className={cn('page-links__contact-text')}>
                55 East Birchwood Ave. Brooklyn, New York 11201
              </p>
            </li>
            <li>
              <p className={cn('page-links__contact-text')}>contact@interno.com</p>
            </li>
            <li>
              <p className={cn('page-links__contact-text')}>(123) 456 - 7890</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cn('footer__copyright')}>
        Copyright © Interno | Designed by Victorflow Templates - Made by Lukas
      </div>
    </footer>
  );
}
