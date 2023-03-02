import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import { Facebook, Instagram, Linkedin, Twitter } from '../../../public/assets/svg';
import NavLogo from '../../../public/assets/svg/NavLogo';
import FooterListCard from '../FooterListCard';
import styles from './Footer.module.scss';
import { contactInfo, pageLinks } from './text';

const cn = classNames.bind(styles);

export default function Footer() {
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
        <FooterListCard contactInfo={contactInfo} />
      </div>
      <div className={cn('footer__copyright')}>
        Copyright © Interno | Designed by Victorflow Templates - Made by Lukas
      </div>
    </footer>
  );
}
