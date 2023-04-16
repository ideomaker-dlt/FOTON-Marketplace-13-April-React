import React, { memo } from 'react'

import './styles.scss'

export const HeaderCarousel = memo(() => {
  return (
    <div className='header-carousel-header-carousel'>
      <div className='header-carousel-title'>
        <h3 className='header-carousel-text'>
          <span>Trending in Avatars</span>
          <br></br>
        </h3>
      </div>
      <span className='header-carousel-text3 button'>View All</span>
    </div>
  )
})
