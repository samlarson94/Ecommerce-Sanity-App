import React from 'react';
import Link from 'next/link'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        {/* DEV NOTE: All CAPITAL text will be dynamic data fed from Sanity */}
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <img src="" alt="headphones" className='hero-banner-image'></img>

        <div>
          <Link href='/product/ID'>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HeroBanner