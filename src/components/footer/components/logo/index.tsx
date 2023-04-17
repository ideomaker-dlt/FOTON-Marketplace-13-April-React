import React, { memo } from 'react'

import styles from './styles.module.scss'

export const Logo = memo(() => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <img alt='Foton' src='/playground_assets/foton%20logo%20white.svg' />
      </div>
      <span className={styles.footerText}>
        <span>
          Community centred and easy to use marketplace for digital collectibles
          and non-fungible tokens (NFTs). Create, trade and discover exclusive
          digital items on Radix DLT.
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
  )
})
