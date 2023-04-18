import React, { memo } from 'react'
import styles from './styles.module.scss'

export const Status = memo(() => {
    return (

        <>
            <div className={styles.collectionItemsContainerAccordion1}>
                <div className={styles.collectionItemsContainerAccordionHeader1}>
                    <div className={styles.collectionItemsContainerContainer04}>
                        <span className={styles.collectionItemsContainerText16}>
                            <span className={styles.collectionItemsContainerText17}>
                                Status
                            </span>
                            <br></br>
                        </span>
                    </div>
                    <div className={styles.collectionItemsContainerContainer05}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={styles.collectionItemsContainerIcon04}
                        >
                            <path d='M316 366l196 196 196-196 60 60-256 256-256-256z'></path>
                        </svg>
                    </div>
                </div>
                <div className={styles.collectionItemsContainerAccordionDrawer1}>
                    <div className={styles.collectionItemsContainerAccordionItem}>
                        <div className={styles.collectionItemsContainerContainer06}>
                            <input
                                type='checkbox'
                                className={styles.collectionItemsContainerCheckbox}
                            />
                            <span className={styles.collectionItemsContainerText19}>
                                Listed
                            </span>
                        </div>
                        <span className={styles.collectionItemsContainerHowMany}>
                            20
                        </span>
                    </div>
                    <div className={styles.collectionItemsContainerAccordionItem01}>
                        <div className={styles.collectionItemsContainerContainer07}>
                            <input
                                type='checkbox'
                                className={styles.collectionItemsContainerCheckbox01}
                            />
                            <span className={styles.collectionItemsContainerText20}>
                                Unlisted
                            </span>
                        </div>
                        <span className={styles.collectionItemsContainerHowMany01}>
                            80
                        </span>
                    </div>
                    <div className={styles.collectionItemsContainerAccordionItem02}>
                        <div className={styles.collectionItemsContainerContainer08}>
                            <input
                                type='checkbox'
                                className={styles.collectionItemsContainerCheckbox02}
                            />
                            <span className={styles.collectionItemsContainerText21}>
                                Has Offers
                            </span>
                        </div>
                        <span className={styles.collectionItemsContainerHowMany02}>
                            4
                        </span>
                    </div>
                    <div className={styles.collectionItemsContainerAccordionItem03}>
                        <div className={styles.collectionItemsContainerContainer09}>
                            <input
                                type='checkbox'
                                className={styles.collectionItemsContainerCheckbox03}
                            />
                            <span className={styles.collectionItemsContainerText22}>
                                Auctioned
                            </span>
                        </div>
                        <span className={styles.collectionItemsContainerHowMany03}>
                            4
                        </span>
                    </div>
                </div>
            </div>
        </>

    )
})
