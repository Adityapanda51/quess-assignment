import React from 'react';

import bannerImage from '../../images/banner.png'; 

function Banner() {
  return (
    <div className="banner-container">
      <img src={bannerImage} className="mt-0 img-fluid w-100" alt="Banner" />
    </div>
  );
}

export default Banner;
