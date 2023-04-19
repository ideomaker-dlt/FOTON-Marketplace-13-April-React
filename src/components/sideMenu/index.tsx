import React, { memo } from 'react'
import { Category, CreatorStudio } from "./components"
import styles from './styles.module.scss'

export const SideMenu = memo((props: any) => {
  return (
    <div className={`${styles.sideMenuSideMenu} ${props.rootClassName} `}>

      <Category />
      <CreatorStudio />

      {/* <div className='side-menu-container hide-scroll'>
        <div className='side-menu-container01'>
          <span className='side-menu-text material-symbols-outlined'>
            category
          </span>
        </div>
        <div className='side-menu-line-separator'></div>
        <div className='side-menu-container-hexa'>
          <div className='side-menu-container-over'></div>
          <div className='side-menu-container-base'></div>
        </div>
        <div className='side-menu-container-hexa1'>
          <div className='side-menu-container-over1'></div>
          <div className='side-menu-container-base1'></div>
        </div>
        <div className='side-menu-container-hexa2'>
          <div className='side-menu-container-over2'></div>
          <div className='side-menu-container-base2'></div>
        </div>
        <div className='side-menu-container02'></div>
        <div className='side-menu-line-separator1'></div>
        <div className='side-menu-container03'></div>
        <div className='side-menu-container04'></div>
        <div className='side-menu-container05'></div>
        <div className='side-menu-container06'></div>
        <div className='side-menu-container07'></div>
      </div>
      <div className='side-menu-container08'>
        <span className='side-menu-text01 Content16SemiBold'>
          Creator Studio
        </span>
        <div className='side-menu-container09'>
          <div className='side-menu-container10'>
            <span className='side-menu-text02 material-symbols-outlined'>
              <span className=''>dashboard_customize</span>
              <br className=''></br>
            </span>
            <span className='side-menu-text05 Content'>Dashboard</span>
          </div>
          <div className='side-menu-container11'>
            <span className='side-menu-text06 material-symbols-outlined'>
              insights
            </span>
            <span className='side-menu-text07 Content'>Analytics</span>
          </div>
          <div className='side-menu-container12'>
            <span className='side-menu-text08 material-symbols-outlined'>
              settings
            </span>
            <span className='side-menu-text09 Content'>Community</span>
          </div>
          <div className='side-menu-container13'>
            <span className='side-menu-text10 material-symbols-outlined'>
              group
            </span>
            <span className='side-menu-text11 Content'>Team</span>
          </div>
          <div className='side-menu-container14'>
            <span className='side-menu-text12 material-symbols-outlined'>
              store
            </span>
            <span className='side-menu-text13 Content'>Store</span>
          </div>
          <div className='side-menu-container15'>
            <span className='side-menu-text14 material-symbols-outlined'>
              settings
            </span>
            <span className='side-menu-text15 Content'>Settings</span>
          </div>
        </div>
      </div> */}
    </div>
  )
})
