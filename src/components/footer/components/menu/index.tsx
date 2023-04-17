import React, { memo } from 'react'

import styles from './styles.module.scss'

export const Menu = memo(() => {
  return (
    <div className={styles.footerMenu}>
      <div>
        <div>
          <span>Explore All</span>
          <span>Avatars</span>
          <span>Art</span>
          <span>Games</span>
          <span>Memberships</span>
          <span>Tickets</span>
        </div>
        <div>
          <span>For Collectors</span>
          <span>Stats</span>
          <span>Drops Portal</span>
          <span>Seasons</span>
          <span>Foton PRO</span>
          <span>Tesseract NFT</span>
        </div>
      </div>
      <div>
        <div>
          <span>For Creators</span>
          <span>Creator Studio</span>
          <span>Launchpad & Grants</span>
          <span>Jobs Portal</span>
          <span>Foton PRO</span>
        </div>
        <div>
          <span>Resources</span>
          <span>Announcements</span>
          <span>Help Center</span>
          <span>Developers - SDK</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
})
