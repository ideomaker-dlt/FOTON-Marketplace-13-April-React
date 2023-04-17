import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Resources = memo(() => {
  return (
    <div className={styles.creatorStudioResources}>
      <div className={styles.creatorStudioContainer}>
        {[
          {
            creator: 'By FOTON',
            title: 'Introduction Video',
            content: 'Watch how the platform works',
          },
          {
            creator: 'By FOTON',
            title: 'What are NFTs?',
            content: 'Short intro',
          },
          {
            creator: 'By FOTON',
            title: 'Guide Book',
            content: 'FAQ and more',
          },
        ].map((item) => (
          <Link to='/creator-studio-project'>
            <div className={styles.creatorStudioItem}>
              <div className={styles.creatorStudioItemContainer}>
                <div className={styles.creatorStudioItemContainerInner}>
                  <h1 className='Smallest'>
                    <span>{item.creator}</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className='Heading3'>{item.title}</h1>
                <h1 className='Content'>
                  <span>{item.content}</span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})
