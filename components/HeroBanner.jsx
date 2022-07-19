import React from 'react';
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        {/* DEV NOTE: All CAPITAL text will be dynamic data fed from Sanity */}
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt="headphones" className='hero-banner-image'></img>

        <div>
          <Link href='/product/ID'>
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HeroBanner