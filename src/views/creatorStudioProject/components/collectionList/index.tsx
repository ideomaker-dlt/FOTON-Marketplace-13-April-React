import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const CollectionList = memo(() => {

    return (
        <div className={styles.container}>
            <div className={styles.creatorStudioProjectContainer05}>
                {[...Array(4)].map((x, i) => (
                    <Link to='/creator-studio-collection'>
                        <div className={styles.creatorStudioProjectCollection}>
                            <div className={styles.creatorStudioProjectContainer06}>
                                <img
                                    src='/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png'
                                    className={styles.creatorStudioProjectImage1}
                                />
                            </div>
                            <div className={styles.creatorStudioProjectContainer07}>
                                <div className={styles.creatorStudioProjectContainer08}>
                                    <h1 className={`${styles.creatorStudioProjectText11} Smallest`}>
                                        <span>Role: Admin</span>
                                        <br></br>
                                    </h1>
                                </div>
                                <h1 className={`${styles.creatorStudioProjectText14} Heading3`}>
                                    Collection One
                                </h1>
                                <h1 className={`${styles.creatorStudioProjectText15} Content`}>
                                    <span>1500 Items</span>
                                    <br></br>
                                </h1>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )


})