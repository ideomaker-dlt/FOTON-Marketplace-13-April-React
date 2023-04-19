import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Sidebar } from "./components"
import styles from "./styles.module.scss"

export const LayoutWithSidebar = memo(
  (props: React.PropsWithChildren<{ rootClassName?: string }>) => {
    const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false)
    return (
      <div className={` ${styles.layoutWithSidebarContainer} ${props.rootClassName} `}>
        <Navbar
          sideMenuIsVisible={sideMenuIsVisible}
          setSideMenuIsVisible={setSideMenuIsVisible}
        />
        <Sidebar children={props.children} sideMenuIsVisible={sideMenuIsVisible} />



      </div>
    )
  }
)
