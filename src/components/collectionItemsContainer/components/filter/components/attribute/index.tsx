import React, { memo } from 'react'
import styles from './styles.module.scss'
import internal from 'stream'

export const Attribute = memo(({ attribute }: any) => {
    return (
        <>
            <div className={styles.containerAccordion}>
                <div className={styles.accordionHeader}>
                    <div>
                        <span>
                            {attribute?.title}
                        </span>
                    </div>
                    <div >
                        <span>
                            {attribute?.total}
                        </span>
                        
                        <svg viewBox='0 0 1024 1024'>
                            <path d='M316 366l196 196 196-196 60 60-256 256-256-256z'></path>
                        </svg>
                    </div>
                </div>
                <div className={styles.accordionDrawer}>
                    {
                        attribute?.data?.map((item: any, index: internal) => (
                            <div className={styles.attribute}>
                                <div>
                                    <input
                                        type='checkbox'
                                        className={styles.input}
                                    />
                                    <span className={styles.span}>
                                        {item.title}
                                    </span>
                                </div>
                                <span>
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