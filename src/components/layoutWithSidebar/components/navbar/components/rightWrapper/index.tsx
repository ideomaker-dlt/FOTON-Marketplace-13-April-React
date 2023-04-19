import React, { memo } from 'react'
import styles from './styles.module.scss'
import { Links, MobileMenu, MobileSearch, Qr, Profile, Cart } from './components'

export const RightWrapper = memo(() => {
    return (
        <div className={styles.layoutWithSidebarWrapperRight}>
            <Links />
            <MobileSearch />
            <Cart />
            <MobileMenu />
            <div className={styles.layoutWithSidebarUser}>
                <div className={styles.layoutWithSidebarAvatar}></div>
            </div>
            <Profile />
            <Qr />
        </div>
    )
}
)