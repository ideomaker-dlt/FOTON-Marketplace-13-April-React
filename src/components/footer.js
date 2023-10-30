import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-logo">
        <div className="footer-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer-image"
          />
        </div>
        <span className="footer-text">
          <span className="">
            Community centred and easy to use marketplace for digital
            collectibles and non-fungible tokens (NFTs). Create, trade and
            discover exclusive digital items on Radix DLT.
          </span>
          <br className=""></br>
          <span className="">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="footer-text04">
          <span className="">
            FOTON is Web3&apos;s Digital Assets Hub and NFTs Marketplace that
            runs on Radix DLT. 
          </span>
          <span className="">
            Create and Trade NFTs easily while Growing and Engaging directly
            your Community in One Powerful dApp.
          </span>
        </span>
        <img
          alt="image"
          src="/Foton Images/long-white-monochrome-outline-200h.png"
          className="footer-image1"
        />
      </div>
      <div className="footer-menu-footer">
        <div className="footer-container1">
          <div className="footer-column">
            <span className="footer-text07">{props.text}</span>
            <span className="footer-text08">{props.text1}</span>
            <span className="footer-text09">{props.text2}</span>
            <span className="footer-text10">{props.text3}</span>
            <span className="footer-text11">{props.text4}</span>
            <span className="footer-text12">{props.text5}</span>
          </div>
          <div className="footer-column1">
            <span className="footer-text13">{props.text6}</span>
            <Link to="/discover" className="footer-navlink">
              {props.text7}
            </Link>
            <Link to="/drops" className="footer-navlink1">
              {props.text8}
            </Link>
            <Link to="/stats" className="footer-navlink2">
              {props.text9}
            </Link>
            <span className="footer-text14">{props.text10}</span>
            <span className="footer-text15">{props.text11}</span>
          </div>
        </div>
        <div className="footer-container2">
          <div className="footer-column2">
            <span className="footer-text16">{props.text12}</span>
            <Link to="/creator-studio" className="footer-navlink3">
              {props.text13}
            </Link>
            <span className="footer-text17">{props.text14}</span>
            <span className="footer-text18">{props.text15}</span>
            <span className="footer-text19">{props.text16}</span>
          </div>
          <div className="footer-column3">
            <span className="footer-text20">{props.text17}</span>
            <span className="footer-text21">{props.text18}</span>
            <span className="footer-text22">{props.text19}</span>
            <span className="footer-text23">{props.text20}</span>
            <span className="footer-text24">{props.text21}</span>
            <a
              href="https://tally.so/r/w5bq46"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              {props.text22}
            </a>
          </div>
        </div>
      </div>
      <div className="footer-container3">
        <span className="footer-copyright">{props.Copyright}</span>
        <div className="footer-terms">
          <span className="footer-privacy-policy">
            <span className="">Privacy Policy</span>
            <br className=""></br>
          </span>
          <span className="footer-terms-of-service">
            {props.TermsOfService}
          </span>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  text9: 'Stats',
  text: 'Explore All',
  rootClassName: '',
  text19: 'Help Center',
  image_alt: 'image',
  text2: 'Art',
  text12: 'For Creators',
  text1: 'Avatars',
  Copyright: 'Copyright 2023 - FOTON SDK',
  text21: 'About',
  TermsOfService: 'Terms of Service',
  text7: 'Discover',
  text4: 'Memberships',
  text20: 'Developers - SDK',
  text10: 'Foton PRO',
  text5: 'Tickets',
  text14: 'Launchpad & Grants',
  text11: 'Seasons',
  image_src: '/foton%20logo%20white.svg',
  text3: 'Games',
  text8: 'Drops Portal',
  text17: 'Resources',
  text13: 'Creator Studio',
  text22: 'Press Kit',
  text15: 'Jobs Portal',
  text18: 'Announcements',
  text6: 'For Collectors',
  text16: 'Foton PRO',
}

Footer.propTypes = {
  text9: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text19: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  text12: PropTypes.string,
  text1: PropTypes.string,
  Copyright: PropTypes.string,
  text21: PropTypes.string,
  TermsOfService: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text20: PropTypes.string,
  text10: PropTypes.string,
  text5: PropTypes.string,
  text14: PropTypes.string,
  text11: PropTypes.string,
  image_src: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  text17: PropTypes.string,
  text13: PropTypes.string,
  text22: PropTypes.string,
  text15: PropTypes.string,
  text18: PropTypes.string,
  text6: PropTypes.string,
  text16: PropTypes.string,
}

export default Footer
