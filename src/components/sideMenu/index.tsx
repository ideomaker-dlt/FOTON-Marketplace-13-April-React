import React, { memo } from 'react'
import { Category, CreatorStudio } from "./components"
import styles from './styles.module.scss'

export const SideMenu = memo((props: any) => {
  return (
    <div className={`${styles.sideMenuSideMenu} ${props.rootClassName} `}>
      <Category />
      <CreatorStudio />
    </div>
  )
})
