import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Name = memo(() => {
    return (
        <div className={styles.collectionPageContainer02}>
            <div className={styles.collectionPageAvatarLogo}>
                <img
                    src="/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                    className={styles.collectionPageImage1}
                />
            </div>
            <div className={styles.collectionPageContainer03}>
                <h1 className={styles.collectionPageText}>Collection One</h1>
                <div className={styles.collectionPageContainer04}>
                    <p className={styles.collectionPageText01}>
                        <span>By Smooth Collective</span>
                        <br></br>
                    </p>
                    <p className={styles.collectionPageText04}>
                        <span>Verified</span>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    )


})