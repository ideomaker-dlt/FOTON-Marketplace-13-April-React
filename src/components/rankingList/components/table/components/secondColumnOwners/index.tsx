import React, { memo } from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const SecondColumnOwners = memo(() => {
  return (
    <div className={styles.headerOwners}>
      <div>
        <span>Owners</span>
      </div>
      <div>
        <span className='Content16SemiBold'>Listed</span>
      </div>
      <div>
        <span className='Content16SemiBold'>Follow</span>
      </div>
    </div>
  )
})
