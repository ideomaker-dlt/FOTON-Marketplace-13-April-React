import React, { memo, useState } from 'react'
import styles from './styles.module.scss'

export const Status = memo(() => {
    const [status, setStatus] = useState([
        {
            "title": "Listed",
            "value": 20
        },
        {
            "title": "Unlisted",
            "value": 80
        },
        {
            "title": "Has Offers",
            "value": 4
        },
        {
            "title": "Auctioned",
            "value": 4
        }
    ])
    return (
        <>
            <div className={styles.accordion}>
                <div className={styles.accordionHeader}>
                    <div>
                        <span>
                            <span>
                                Status
                            </span>
                            <br></br>
                        </span>
                    </div>
                    <div>
                        <svg
                            viewBox='0 0 1024 1024'>
                            <path d='M316 366l196 196 196-196 60 60-256 256-256-256z'></path>
                        </svg>
                    </div>
                </div>

                <div className={styles.accordionDrawer}>

                    {
                        status.map((sts, key) => (
                            <div key={key} className={styles.accordionItem}>
                                <div>
                                    <input type='checkbox' />
                                    <span>
                                        {sts.title}
                                    </span>
                                </div>
                                <span>
                                    {sts.value}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    )
})
