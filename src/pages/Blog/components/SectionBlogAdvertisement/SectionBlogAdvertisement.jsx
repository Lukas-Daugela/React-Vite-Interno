import classNames from 'classnames/bind';
import React from 'react';

import imgUrl from '/assets/images/kitchen-design-four.jpg';

import styles from './SectionBlogAdvertisement.module.scss';

const cn = classNames.bind(styles);

export default function SectionBlogAdvertisement() {
  return (
    <div className={cn('advertisement')}>
      <h1 className={cn('advertisement__title')}>Design sprints are great</h1>
      <p className={cn('advertisement__introduction')}>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered.
      </p>
      <ol className={cn('advertisement__list')}>
        <li className={cn('advertisement__option')}>
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered.
        </li>
        <li className={cn('advertisement__option')}>
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered.
        </li>
        <li className={cn('advertisement__option')}>
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered.
        </li>
      </ol>
      <img src={imgUrl} alt="" className={cn('advertisement__image')} />
      <p className={cn('advertisement__description')}>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered.
      </p>
    </div>
  );
}
