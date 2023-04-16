import React, { memo } from 'react'

import './styles.scss'

export const Footer: React.FC<any> = memo(
  (
    props = {
      text9: 'Seasons',
      text: 'Explore All',
      rootClassName: '',
      text19: 'Help Center',
      image_alt: 'image',
      text2: 'Art',
      text12: 'For Creators',
      text1: 'Avatars',
      Copyright: 'Copyright 2023 - FOTON, IDEOMAKER SDK',
      text21: 'About',
      TermsOfService: 'Terms of Service',
      text7: 'Stats',
      text4: 'Memberships',
      text20: 'Developers - SDK',
      text10: 'Foton PRO',
      text5: 'Tickets',
      text14: 'Launchpad & Grants',
      text11: 'Tesseract NFT',
      image_src: '/playground_assets/foton%20logo%20white.svg',
      text3: 'Games',
      text8: 'Drops Portal',
      text17: 'Resources',
      text13: 'Creator Studio',
      text22: 'Contact',
      text15: 'Jobs Portal',
      text18: 'Announcements',
      text6: 'For Collectors',
      text16: 'Foton PRO',
    }
  ) => {
    return (
      <div className={`footer-footer ${props.rootClassName} `}>
        <div className='footer-logo'>
          <div className='footer-container'>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className='footer-image'
            />
          </div>
          <span className='footer-text'>
            <span className=''>
              Community centred and easy to use marketplace for digital
              collectibles and non-fungible tokens (NFTs). Create, trade and
              discover exclusive digital items on Radix DLT.
            </span>
            <br className=''></br>
            <br className=''></br>
            <span className=''>
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
              <span className='footer-text05'>{props.text}</span>
              <span className='footer-text06'>{props.text1}</span>
              <span className='footer-text07'>{props.text2}</span>
              <span className='footer-text08'>{props.text3}</span>
              <span className='footer-text09'>{props.text4}</span>
              <span className='footer-text10'>{props.text5}</span>
            </div>
            <div className='footer-column1'>
              <span className='footer-text11'>{props.text6}</span>
              <span className='footer-text12'>{props.text7}</span>
              <span className='footer-text13'>{props.text8}</span>
              <span className='footer-text14'>{props.text9}</span>
              <span className='footer-text15'>{props.text10}</span>
              <span className='footer-text16'>{props.text11}</span>
            </div>
          </div>
          <div className='footer-container2'>
            <div className='footer-column2'>
              <span className='footer-text17'>{props.text12}</span>
              <span className='footer-text18'>{props.text13}</span>
              <span className='footer-text19'>{props.text14}</span>
              <span className='footer-text20'>{props.text15}</span>
              <span className='footer-text21'>{props.text16}</span>
            </div>
            <div className='footer-column3'>
              <span className='footer-text22'>{props.text17}</span>
              <span className='footer-text23'>{props.text18}</span>
              <span className='footer-text24'>{props.text19}</span>
              <span className='footer-text25'>{props.text20}</span>
              <span className='footer-text26'>{props.text21}</span>
              <span className='footer-text27'>{props.text22}</span>
            </div>
          </div>
        </div>
        <div className='footer-container3'>
          <span className='footer-copyright'>{props.Copyright}</span>
          <div className='footer-terms'>
            <span className='footer-privacy-policy'>
              <span className=''>Privacy Policy</span>
              <br className=''></br>
            </span>
            <span className='footer-terms-of-service'>
              {props.TermsOfService}
            </span>
          </div>
        </div>
      </div>
    )
  }
)
