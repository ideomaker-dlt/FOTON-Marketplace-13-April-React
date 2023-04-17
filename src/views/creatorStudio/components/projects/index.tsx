import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

export const Projects = memo(() => {
  return (
    <div className={styles.creatorStudioProjectsContainer}>
      <div className={styles.creatorStudioProjectsContainerInner}>
        {new Array(5).fill(null).map((_, index: number) => (
          <Link key={index} to='/creator-studio-project'>
            <div className={styles.creatorStudioProjectContainer}>
              <div className={styles.creatorStudioProjectHeader}>
                <img
                  src='/playground_assets/hexagonmaskbordergray.svg'
                  className={styles.creatorStudioProjectHeaderMask}
                />
                <img src='/playground_assets/art_3.0_ninja__2d__game_character_._cevtore_style__t_pose_00ed9e8d-9bd5-4d11-be76-c73a71e6f04e-200h.png' />
              </div>
              <div className={styles.creatorStudioProjectContent}>
                <div className={styles.creatorStudioProjectContentInner}>
                  <h1 className='Smallest'>
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className='Heading3'>Project One</h1>
                <h2 className='Content'>
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})
