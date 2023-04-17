import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Header = memo(() => {
  return (
    <div className={styles.creatorStudioHeaderCreator}>
      <div className={styles.creatorStudioContent}>
        <div className={styles.creatorStudioContentInner}>
          <div className={styles.creatorStudioImageContainer}>
            <img
              src='/playground_assets/creatorstudiologo.svg'
              className={styles.creatorStudioImage}
            />
          </div>
          <div className={styles.creatorStudioHeadline}>
            <h1 className={styles.creatorStudioHeadlineTitle}>
              Creator Studio
            </h1>
            <h1 className={styles.creatorStudioHeadlineSubtitle}>
              <span>Version 0.1</span>
              <br></br>
            </h1>
          </div>
        </div>
        <div className={styles.creatorStudioButtons}>
          <Link
            to='/add-project'
            className={classnames([styles.creatorStudioNavlink, 'button'])}
          >
            <span>
              <span>New Project</span>
              <br></br>
            </span>
          </Link>
        </div>
      </div>
      <div className={styles.creatorStudioOverlay}></div>
    </div>
  )
})
