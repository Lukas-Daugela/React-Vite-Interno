import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Chevron } from '../../../public/assets/svg';
import NavLogo from '../../../public/assets/svg/NavLogo';
import styles from './Footer.module.scss';

const cn = classNames.bind(styles);

export default function Footer() {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
              <Link to="about" className={cn('link')}>
                1
              </Link>
            </li>
            <li className={cn('footer__social-option')}>
              <Link to="about" className={cn('link')}>
                1
              </Link>
            </li>
            <li className={cn('footer__social-option')}>
              <Link to="about" className={cn('link')}>
                1
              </Link>
            </li>
            <li className={cn('footer__social-option')}>
              <Link to="about" className={cn('link')}>
                1
              </Link>
            </li>
          </ul>
        </div>
        {/* Pages */}
        <div className={cn('page-links__container')}>
          <button
            onClick={() => setIsPagesOpen(!isPagesOpen)}
            className={cn('page-links__button')}
          >
            <h3 className={cn('page-links__title')}>
              Pages
              <Chevron
                className={cn('page-links__chevron-icon', {
                  'page-links__chevron-icon--expanded': isPagesOpen,
                })}
              />
            </h3>
          </button>
          <ul
            className={cn('page-links__list', {
              'page-links__list--expanded': isPagesOpen,
            })}
          >
            <li>
              <Link to="about" className={cn('link')}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="projects" className={cn('link')}>
                Our Projects
              </Link>
            </li>
            <li>
              <Link to="/" className={cn('link')}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="contact" className={cn('link')}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="services" className={cn('link')}>
                Services
              </Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div className={cn('page-links')}>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={cn('page-links__button')}
          >
            <h3 className={cn('page-links__title')}>
              Services
              <Chevron
                className={cn('page-links__chevron-icon', {
                  'page-links__chevron-icon--expanded': isServicesOpen,
                })}
              />
            </h3>
          </button>
          <ul
            className={cn('page-links__list', {
              'page-links__list--expanded': isServicesOpen,
            })}
          >
            <li>
              <Link to="about" className={cn('link')}>
                Kitchen
              </Link>
            </li>
            <li>
              <Link to="projects" className={cn('link')}>
                Living Area
              </Link>
            </li>
            <li>
              <Link to="/" className={cn('link')}>
                Bathroom
              </Link>
            </li>
            <li>
              <Link to="contact" className={cn('link')}>
                Dining Hall
              </Link>
            </li>
            <li>
              <Link to="services" className={cn('link')}>
                Bedroom
              </Link>
            </li>
          </ul>
        </div>
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
