import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'
export const Name = memo(() => {
    return (
        <div className={styles.itemPageNameItem}>
            <div className={styles.itemPageContainer02}>
                <h1 className={styles.itemPageText004}>Item name #2044</h1>
                <div className={styles.itemPageContainer03}>
                    <Link to="/collection-page" className={styles.itemPageNavlink}>
                        <p className={styles.itemPageText005}>
                            <span>Collection Name</span>
                            <br></br>
                        </p>
                    </Link>
                    <p className={styles.itemPageText008}>
                        <span>
                            By
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </span>
                        <br></br>
                    </p>
                    <p className={styles.itemPageText011}>
                        <span>Smooth Collective</span>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    )
})
