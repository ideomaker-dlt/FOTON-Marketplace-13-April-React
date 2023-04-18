import React, { memo } from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const SecondColumnChange = memo(() => {
  return (
    <div className={styles.headerChange}>
      <div>
        <span className='Content16SemiBold'>Change</span>
      </div>
      <div>
        <span className='Content16SemiBold'>Floor</span>
      </div>
      <div>
        <span className='Content16SemiBold'>Sales</span>
      </div>
    </div>
  )
})
