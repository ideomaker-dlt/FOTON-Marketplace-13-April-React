import React, { memo } from 'react'
import styles from "./styles.module.scss"
export const DetailsMobile = memo(() => {
    return (
        <div className={styles.itemPageItemDetailsMobile}>
            <div className={styles.itemPageTabsRow1}>
                <span className={styles.itemPageText033}>Details</span>
                <span className={styles.itemPageText034}>Description</span>
                <span className={styles.itemPageText035}>Creator</span>
            </div>
            <div className={styles.itemPageContainer06}>
                <h2 className={styles.itemPageText036}>
                    The crew of pirates gathered around a campfire on a tropical
                    island, their ship anchored offshore. They toasted their
                    recent plunder and shared stories of adventure. The sound of
                    waves and the scent of saltwater filled the air, as they
                    planned their next raid under the glow of the moon.
                </h2>
            </div>
        </div>
    )
})
