import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Description = memo(() => {
    return (
        <div className={styles.collectionPageContainer05}>
            <div className={styles.collectionPageDescriptionCollection}>
                <div className={styles.collectionPageContainer06}>
                    <h2 className={styles.collectionPageText07}>
                        <span>
                            The crew of pirates gathered around a campfire on a
                            tropical island, their ship anchored offshore. They
                            toasted their recent plunder and shared stories of
                            adventure. The sound of waves and the scent of saltwater
                            filled the air, as they planned their next raid under the
                            glow of the moon.
                        </span>
                        <br></br>
                    </h2>
                    <div className={styles.collectionPageContainer07}></div>
                    <p className={styles.collectionPageText10}>
                        <span>
                            Created on 23 Apr 2023
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </span>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    )


})