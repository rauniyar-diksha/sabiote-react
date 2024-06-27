import React from 'react';
import './banner.css';
import bannerImage from '../../../images/backgroundfirst.jpg'; // Adjusted path
import zigzag from '../../../images/zigzag.svg'; // Adjusted path

const Banner = () => {
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-content">
          <h3>Welcome to Sabiote Healthcare Pvt Ltd, where innovation meets healthcare excellence. We specialize in manufacturing cutting-edge medical devices that redefine standards in patient care and wellness.</h3>
          <p><i><span></span></i></p>
          <p>Key Features:<span>&nbsp;</span></p>
          <p>✓ Innovative Medical Solutions<br /> ✓ Commitment to Quality and Safety<br /> ✓ Global Impact on Healthcare<br /> ✓ Expertise in Advanced Technologies</p>
        </div>
        <div className="et_pb_bottom_inside_divider" style={{ '--zigzag': `url(${zigzag})` }}></div>
      </div>

    </>
  );
};

export default Banner;
