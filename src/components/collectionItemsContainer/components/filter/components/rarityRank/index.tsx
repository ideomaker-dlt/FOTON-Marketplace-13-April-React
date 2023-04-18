import React, { memo } from 'react'
import styles from './styles.module.scss'

export const RarityRank = memo(() => {
  return (
    <>
      <div className={styles.collectionItemsContainerHeaderStickyMobile}>
        <div className={styles.collectionItemsContainerHeaderFilterMenu}>
          <div className={styles.collectionItemsContainerContainer01}>
            <span className={styles.collectionItemsContainerText}>
              <span className={styles.collectionItemsContainerText01}>
                Filters
              </span>
              <br></br>
            </span>
          </div>
          <div className={styles.collectionItemsContainerApplyButton}>
            <span className={styles.collectionItemsContainerText03}>
              <span className={styles.collectionItemsContainerText04}>
                Apply
              </span>
              <br></br>
            </span>
          </div>
          <div className={styles.collectionItemsContainerCloseButton}>
            <svg
              viewBox='0 0 1024 1024'
              className={styles.collectionItemsContainerIcon}
            >
              <path d='M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z'></path>
            </svg>
          </div>
        </div>
        <div className={styles.collectionItemsContainerBigButton}>
          <div className={styles.collectionItemsContainerSubmit}>
            <button className={styles.collectionItemsContainerButtonButton}>
              <span className={styles.collectionItemsContainerText06}>
                <span>Apply</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.collectionItemsContainerAccordion}>
        <div className={styles.collectionItemsContainerAccordionHeader}>
          <div className={styles.collectionItemsContainerContainer02}>
            <span className={styles.collectionItemsContainerText09}>
              <span className={styles.collectionItemsContainerText10}>
                Rarity Rank
              </span>
              <br></br>
            </span>
          </div>
          <div className={styles.collectionItemsContainerContainer03}>
            <svg
              viewBox='0 0 1024 1024'
              className={styles.collectionItemsContainerIcon02}
            >
              <path d='M316 366l196 196 196-196 60 60-256 256-256-256z'></path>
            </svg>
          </div>
        </div>
        <div className={styles.collectionItemsContainerAccordionDrawer}>
          <div className={styles.collectionItemsContainerRange}>
            <input
              type='text'
              placeholder='1'
              className={`${styles.collectionItemsContainerTextinput} focus-reset-forms input Content16SemiBold`}
            />
            <span className={styles.collectionItemsContainerText12}>To</span>
            <input
              type='text'
              placeholder='350'
              className={`${styles.collectionItemsContainerTextinput1} focus-reset-forms input Content16SemiBold`}
            />
          </div>
          <div className={styles.collectionItemsContainerSubmit1}>
            <button className={`${styles.collectionItemsContainerButton1} button`}>
              <span className={styles.collectionItemsContainerText13}>
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