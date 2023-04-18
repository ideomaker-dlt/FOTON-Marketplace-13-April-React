import React, { memo } from 'react'
import styles from './styles.module.scss'
import internal from 'stream'

export const Attribute = memo(({ attribute }: any) => {
    return (
        <>
            <div className={styles.collectionItemsContainerAccordion2}>
                <div className={styles.collectionItemsContainerAccordionHeader2}>
                    <div className={styles.collectionItemsContainerContainer10}>
                        <span className={styles.collectionItemsContainerText23}>
                            {attribute?.title}
                        </span>
                    </div>
                    <div className={styles.collectionItemsContainerContainer11}>
                        <span className={styles.collectionItemsContainerHowMany04}>
                            {attribute?.total}
                        </span>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={styles.collectionItemsContainerIcon06}
                        >
                            <path d='M316 366l196 196 196-196 60 60-256 256-256-256z'></path>
                        </svg>
                    </div>
                </div>
                <div className={styles.collectionItemsContainerAccordionDrawer2}>
                    {
                        attribute?.data?.map((item: any, index: internal) => (
                            <div className={styles.collectionItemsContainerAccordionItem04}>
                                <div className={styles.collectionItemsContainerContainer12}>
                                    <input
                                        type='checkbox'
                                        className={styles.collectionItemsContainerCheckbox04}
                                    />
                                    <span className={styles.collectionItemsContainerText24}>
                                        {item.title}
                                    </span>
                                </div>
                                <span className={styles.collectionItemsContainerHowMany05}>
                                    {item.total}
                                </span>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
})