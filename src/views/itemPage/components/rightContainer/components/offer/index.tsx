import React, { memo } from 'react'
import styles from "./styles.module.scss"
export const Offer = memo(() => {
    return (
        <div className={styles.container}>
            <button className={`${styles.itemPageButton3} button`}>
                <span className={styles.itemPageText027}>
                    <span>Minting Soon</span>
                    <br></br>
                </span>
                <svg viewBox="0 0 1024 1024" className={styles.itemPageIcon04}>
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
            </button>
            <button className={`${styles.itemPageButton4} button`}>
                <span className={styles.itemPageText030}>
                    <span>
                        Make Offer
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </span>
                    <br></br>
                </span>
            </button>
        </div>
    )
})
