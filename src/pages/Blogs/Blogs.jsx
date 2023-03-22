import React from 'react';

import SectionError from '../../components/SectionError/SectionError';
import MainLayout from '../../layouts/MainLayout';

export default function Blogs() {
  return (
    <SectionError
      blurhash={'UiIhW[D%Rjt7~qaeNFa#IpWBWBofM{NGt7of'}
      buttonText={'Back To Home'}
      description={'We are sorry, but the page you requested was not found'}
      imgUrl={'/assets/images/messy-room.jpg'}
      title={'404'}
    />
  );
}
