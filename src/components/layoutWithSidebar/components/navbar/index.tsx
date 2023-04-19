import React, { memo, useState } from 'react'
import styles from './styles.module.scss'
import { Collapse, Logo, SearchBar, RightWrapper } from './components'

export const Navbar = memo(({ setSideMenuIsVisible, sideMenuIsVisible }: { setSideMenuIsVisible: any, sideMenuIsVisible: boolean }) => {
    return (
        <div className={styles.layoutWithSidebarNavbar}>
            <div className={styles.layoutWithSidebarContainer1}>
                <Collapse
                    setSideMenuIsVisible={setSideMenuIsVisible}
                    sideMenuIsVisible={sideMenuIsVisible} />
                <Logo />
                <SearchBar />
                <RightWrapper />
            </div>
        </div>
    )
}
)