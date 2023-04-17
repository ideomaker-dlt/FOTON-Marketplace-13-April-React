import React, { memo } from 'react'

import styles from './styles.module.scss'
import { Copyright, Logo, Menu } from './components'

export const Footer: React.FC<any> = memo(() => {
  return (
    <div className={styles.footerContainer}>
      <Logo />
      <Menu />
      <Copyright />
    </div>
  )
})
