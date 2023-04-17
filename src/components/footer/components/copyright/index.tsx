import React, { memo } from 'react'

import styles from './styles.module.scss'

export const Copyright = memo(() => {
  return (
    <div className={styles.footerCopyrightContainer}>
      <span className={styles.footerCopyright}>
        Copyright 2023 - FOTON, IDEOMAKER SDK
      </span>
      <div className={styles.footerTerms}>
        <span>
          <span>Privacy Policy</span>
          <br></br>
        </span>
        <span>Terms of Service</span>
      </div>
    </div>
  )
})
