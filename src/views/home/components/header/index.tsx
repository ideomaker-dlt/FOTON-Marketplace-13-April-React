import React, { memo } from 'react'

import './styles.scss'
import { FeaturedProjects } from './components'

export const Header = memo(() => {
  return (
    <div className='header'>
      <div className='container article-container'>
        <div className='container-image article-img-holder'></div>
        <div className='container-inner article-title-link'>
          <div>
            <div className='headline'>
              <h1 className='heading1'>Featured Collection</h1>
              <h3>By Sharp Collective</h3>
              <div className='content'>
                <div>
                  <div>
                    <div className='dot'></div>
                    <span>MINTING STARTS</span>
                  </div>
                  <div>
                    <span>1 JUL 2023</span>
                  </div>
                </div>
                <div>
                  <span>view drop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProjects />
    </div>
  )
})
