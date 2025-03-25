import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Trending Items</h2>
        <div>
            <p>LATEST</p>
            <p>COLLECTIONS</p>
            <p>FOR EVERYONE</p>
        </div>
        <div className="hero-btn">
            <div>Shop Now</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
