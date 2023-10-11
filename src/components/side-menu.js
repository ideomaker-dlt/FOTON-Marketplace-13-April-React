import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './side-menu.css'

const SideMenu = (props) => {
  return (
    <div className={`side-menu-side-menu ${props.rootClassName} `}>
      <div className="side-menu-container hide-scroll">
        <div className="side-menu-container01">
          <img
            src="/Icons Imported/deblur.svg"
            alt="image"
            className="side-menu-image"
          />
        </div>
        <div className="side-menu-container02">
          <img
            src="/Icons Imported/category_300.svg"
            alt="image"
            className="side-menu-image01"
          />
        </div>
        <div className="side-menu-line-separator"></div>
        <div className="side-menu-container-hexa">
          <div className="side-menu-container-over"></div>
          <div className="side-menu-container-base"></div>
        </div>
        <div className="side-menu-container-hexa1">
          <div className="side-menu-container-over1"></div>
          <div className="side-menu-container-base1"></div>
        </div>
        <div className="side-menu-container-hexa2">
          <div className="side-menu-container-over2"></div>
          <div className="side-menu-container-base2"></div>
        </div>
        <div className="side-menu-container03"></div>
        <div className="side-menu-line-separator1"></div>
        <div className="side-menu-container04"></div>
        <div className="side-menu-container05"></div>
        <div className="side-menu-container06"></div>
        <div className="side-menu-container07"></div>
        <div className="side-menu-container08"></div>
      </div>
      <div className="side-menu-container09">
        <span className="side-menu-text Content16SemiBold">Creator Studio</span>
        <div className="side-menu-container10">
          <Link to="/creator-studio-collection" className="side-menu-navlink">
            <div className="side-menu-container11">
              <img
                alt="image"
                src="/Icons Imported/dashboard_customize1.svg"
                className="side-menu-image02"
              />
              <span className="side-menu-text01 Content">Dashboard</span>
            </div>
          </Link>
          <Link
            to="/creator-studio-project-teams"
            className="side-menu-navlink1"
          >
            <div className="side-menu-container12">
              <img
                alt="image"
                src="/Icons Imported/group_add.svg"
                className="side-menu-image03"
              />
              <span className="side-menu-text02 Content">Teams</span>
            </div>
          </Link>
          <div className="side-menu-container13">
            <img
              alt="image"
              src="/Icons Imported/bar_chart_4_bars.svg"
              className="side-menu-image04"
            />
            <span className="side-menu-text03 Content">Analytics</span>
          </div>
          <div className="side-menu-container14">
            <img
              alt="image"
              src="/Icons Imported/diversity_1.svg"
              className="side-menu-image05"
            />
            <span className="side-menu-text04 Content">Community</span>
          </div>
          <div className="side-menu-container15">
            <img
              alt="image"
              src="/Icons Imported/storefront.svg"
              className="side-menu-image06"
            />
            <span className="side-menu-text05 Content">Store</span>
          </div>
          <div className="side-menu-container16">
            <img
              alt="image"
              src="/Icons Imported/settings.svg"
              className="side-menu-image07"
            />
            <span className="side-menu-text06 Content">Settings</span>
          </div>
          <div className="side-menu-container17">
            <img
              alt="image"
              src="/Icons Imported/team_dashboard.svg"
              className="side-menu-image08"
            />
            <span className="side-menu-text07">Home</span>
          </div>
          <div className="side-menu-container18">
            <img
              alt="image"
              src="/Icons Imported/manage_accounts.svg"
              className="side-menu-image09"
            />
            <span className="side-menu-text08 Content">Profile Sett.</span>
          </div>
          <div className="side-menu-container19">
            <img
              alt="image"
              src="/Icons Imported/notifications_active.svg"
              className="side-menu-image10"
            />
            <span className="side-menu-text09 Content">Notifications</span>
          </div>
          <div className="side-menu-container20">
            <img
              alt="image"
              src="/Icons Imported/emoji_events.svg"
              className="side-menu-image11"
            />
            <span className="side-menu-text10 Content">Events</span>
          </div>
          <div className="side-menu-container21">
            <img
              alt="image"
              src="/Icons Imported/help_center.svg"
              className="side-menu-image12"
            />
            <span className="side-menu-text11 Content">Support</span>
          </div>
        </div>
      </div>
    </div>
  )
}

SideMenu.defaultProps = {
  rootClassName: '',
}

SideMenu.propTypes = {
  rootClassName: PropTypes.string,
}

export default SideMenu
