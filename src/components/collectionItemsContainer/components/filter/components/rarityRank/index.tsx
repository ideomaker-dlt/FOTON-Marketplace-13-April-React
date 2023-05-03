import React, { memo } from 'react'
import styles from './styles.module.scss'

export const RarityRank = memo(() => {
  return (
    <>
      <div className={styles.headerStickyMobile}>

        <div className={styles.filterMenu}>

          <div>
            <span>
              <span>
                Filters
              </span>
              <br></br>
            </span>
          </div>

          <div>
            <span>
              <span>
                Apply
              </span>
              <br></br>
            </span>
          </div>

          <div>
            <svg
              viewBox='0 0 1024 1024'>
              <path d='M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z'></path>
            </svg>
          </div>

        </div>

        <div className={styles.bigButton}>
          <div>
            <button>
              <span>
                <span>Apply</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>


      </div>


      <div className={styles.accordion}>

        <div className={styles.accordionHeader}>
          <div>
            <span>
              <span>
                Rarity Rank
              </span>
              <br></br>
            </span>
          </div>
          <div>
            <svg
              viewBox='0 0 1024 1024'
            >
              <path d='M316 366l196 196 196-196 60 60-256 256-256-256z'></path>
            </svg>
          </div>
        </div>

        <div className={styles.accordionDrawer}>
          <div>
            <input
              type='text'
              placeholder='1'
              className={`${styles.input} focus-reset-forms input Content16SemiBold`}
            />
            <span>To</span>
            <input
              type='text'
              placeholder='350'
              className={`${styles.input2} focus-reset-forms input Content16SemiBold`}
            />
          </div>

          <div>
            <button className="button">
              <span>
                <span>Apply</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>

      </div>
    </>
  )
})