import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import { Chevron } from '../../../public/assets/svg';
import NavLogo from '../../../public/assets/svg/NavLogo';
import styles from './Footer.module.scss';

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
          <button>
            <h3 className={cn('page-links__title')}>
              Pages
              <Chevron className={cn('page-links__title-chevron')} />
            </h3>
          </button>
          <div className={cn('page-links')}>
            <ul className={cn('page-links__links-list')}>
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
        </div>
        {/* Services */}
        <div className={cn('page-links')}>
          <button>
            <h3 className={cn('page-links__title')}>
              Services
              <Chevron className={cn('page-links__title-chevron')} />
            </h3>
          </button>
          <div className={cn('page-links')}>
            <ul className={cn('page-links__links-list')}>
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
        </div>
        {/* Contact */}
        <div className={cn('page-links')}>
          <h3 className={cn('page-links__title')}>Contact</h3>
          <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <p>contact@interno.com</p>
          <p>(123) 456 - 7890</p>
        </div>
      </div>
      <div className={cn('footer__copyright')}>Copyright</div>
    </footer>
  );
}
