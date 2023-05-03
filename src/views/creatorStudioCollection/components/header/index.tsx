import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const Header = memo(() => {

    return (
        <div className={styles.header}>
            <div className={styles.creatorStudioCollectionGrayOverlay}></div>
            <div className={styles.container}>
                <div className={styles.creatorStudioCollectionContainer2}>
                    <div className={styles.creatorStudioCollectionAvatarLogo}>
                        <img
                            src='/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png'
                            className={styles.creatorStudioCollectionImage}
                        />
                    </div>
                    <div className={styles.creatorStudioCollectionContainer3}>
                        <h1 className={styles.creatorStudioCollectionText}>
                            Collection One
                        </h1>
                        <div className={styles.creatorStudioCollectionContainer4}>
                            <h1 className={styles.creatorStudioCollectionText01}>
                                <span>1500 items</span>
                                <br></br>
                            </h1>
                            <h1 className={styles.creatorStudioCollectionText04}>
                                <span>Unlisted</span>
                                <br></br>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={styles.creatorStudioCollectionButtons}>
                    <Link
                        to='/add-items-selector'
                        className={`${styles.creatorStudioCollectionNavlink} button`}
                    >
                        <span className={styles.creatorStudioCollectionText07}>
                            <span>Add Items</span>
                            <br></br>
                        </span>
                    </Link>
                    <button className={`${styles.creatorStudioCollectionButton} button`}>
                        <span className={styles.creatorStudioCollectionText10}>
                            <span>List</span>
                            <br></br>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )


})