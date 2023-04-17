import React, { memo } from 'react'

import './styles.scss'

export const Footer: React.FC<any> = memo(() => {
  return (
    <div className={`footer-footer`}>
      <div className='footer-logo'>
        <div className='footer-container'>
          <img
            alt='Foton'
            src='/playground_assets/foton%20logo%20white.svg'
            className='footer-image'
          />
        </div>
        <span className='footer-text'>
          <span>
            Community centred and easy to use marketplace for digital
            collectibles and non-fungible tokens (NFTs). Create, trade and
            discover exclusive digital items on Radix DLT.
          </span>
          <br></br>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <div className='footer-menu-footer'>
        <div className='footer-container1'>
          <div className='footer-column'>
            <span className='footer-text05'>Explore All</span>
            <span className='footer-text06'>Avatars</span>
            <span className='footer-text07'>Art</span>
            <span className='footer-text08'>Games</span>
            <span className='footer-text09'>Memberships</span>
            <span className='footer-text10'>Tickets</span>
          </div>
          <div className='footer-column1'>
            <span className='footer-text11'>For Collectors</span>
            <span className='footer-text12'>Stats</span>
            <span className='footer-text13'>Drops Portal</span>
            <span className='footer-text14'>Seasons</span>
            <span className='footer-text15'>Foton PRO</span>
            <span className='footer-text16'>Tesseract NFT</span>
          </div>
        </div>
        <div className='footer-container2'>
          <div className='footer-column2'>
            <span className='footer-text17'>For Creators</span>
            <span className='footer-text18'>Creator Studio</span>
            <span className='footer-text19'>Launchpad & Grants</span>
            <span className='footer-text20'>Jobs Portal</span>
            <span className='footer-text21'>Foton PRO</span>
          </div>
          <div className='footer-column3'>
            <span className='footer-text22'>Resources</span>
            <span className='footer-text23'>Announcements</span>
            <span className='footer-text24'>Help Center</span>
            <span className='footer-text25'>Developers - SDK</span>
            <span className='footer-text26'>About</span>
            <span className='footer-text27'>Contact</span>
          </div>
        </div>
      </div>
      <div className='footer-container3'>
        <span className='footer-copyright'>
          Copyright 2023 - FOTON, IDEOMAKER SDK
        </span>
        <div className='footer-terms'>
          <span className='footer-privacy-policy'>
            <span>Privacy Policy</span>
            <br></br>
          </span>
          <span className='footer-terms-of-service'>Terms of Service</span>
        </div>
      </div>
    </div>
  )
})
