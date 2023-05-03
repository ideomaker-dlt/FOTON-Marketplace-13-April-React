import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Name = memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                />
            </div>
            <div className={styles.nameContainer}>
                <h1>Collection One</h1>
                <div>
                    <p>
                        <span>By Smooth Collective</span>
                        <br></br>
                    </p>
                    <p>
                        <span>Verified</span>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    )


})