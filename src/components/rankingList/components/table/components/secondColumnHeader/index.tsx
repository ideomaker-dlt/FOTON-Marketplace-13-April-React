import React, { memo } from 'react'

import styles from './styles.module.scss'

export const SecondColumnHeader = memo(() => {
  return (
    <div>
      <div className={styles.headerName}>
        <span className='Content16SemiBold'>Collection</span>
      </div>
      <div className={styles.headerVolume}>
        <span className='Content16SemiBold'>Volume</span>
      </div>
    </div>
  )
})
