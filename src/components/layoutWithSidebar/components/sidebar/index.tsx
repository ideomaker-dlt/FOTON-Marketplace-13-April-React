import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { SideMenu, Footer } from '@components'


// export const Sidebar = memo((props: React.PropsWithChildren<{ rootClassName?: string, sideMenuIsVisible: boolean }>) => {
export const Sidebar = memo(({ children, sideMenuIsVisible }: { children: any, sideMenuIsVisible: boolean }) => {
    return (
        <div className={styles.layoutWithSidebarContainAll}>
            {sideMenuIsVisible && (
                <div className={styles.layoutWithSidebarSideMenuWrapper}>
                    <SideMenu
                        text='Project'
                        text1='Store'
                        text2='Settings'
                        text3='Settings'
                        text4='Analytics'
                        image_src1='/playground_assets/tune.svg'
                        image_src2='/playground_assets/chart_data.svg'
                        rootClassName='side-menu-root-class-name5'
                    ></SideMenu>
                </div>
            )}
            <div className={styles.layoutWithSidebarMainMenu}>
                <div className={styles.layoutWithSidebarWrapperContent}>
                    {children}
                </div>
                <Footer rootClassName='footer-root-class-name' />
            </div>
        </div>
    )
}
)