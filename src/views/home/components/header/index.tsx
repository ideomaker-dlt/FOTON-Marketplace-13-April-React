import React, { memo } from 'react'
import classnames from 'classnames'

import { FeaturedProjects } from './components'
import styles from './styles.module.scss'

export const Header = memo(() => {
  return (
    <div className={styles.header}>
      <div className={classnames([styles.container, 'article-container'])}>
        {/* <div
          className={classnames([styles.containerImage, 'article-img-holder'])}
        ></div> */}
        <div className={classnames([styles.containerImage, 'article-img-holder'])}>
          <div className={styles.maskOverlay}></div>
        </div>
        <div
          className={classnames([styles.containerInner, 'article-title-link'])}
        >
          <div>
            <div className={styles.headline}>
              <h1>Featured Collection</h1>
              <h3>By Sharp Collective</h3>
              <div className={styles.content}>
                <div>
                  <div>
                    <div className={styles.dot}></div>
                    <span>MINTING STARTS</span>
                  </div>
                  <div>
                    <span>1 JUL 2023</span>
                  </div>
                </div>
                <div>
                  <span>view drop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProjects />
    </div>
  )
})
