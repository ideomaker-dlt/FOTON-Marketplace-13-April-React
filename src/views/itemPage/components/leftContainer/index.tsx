import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const LeftContainer = memo(() => {
    return (
        <div className={styles.itemPageContainerLeft}>
            <div className={styles.itemPageItemImage}>
                <img
                    alt="image"
                    src="/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_985a59cd-5e25-43ca-b106-15a717076d76-1500w.png"
                    className={styles.itemPageImage}
                />
            </div>
            <div className={styles.itemPageItemDetails}>
                <div className={styles.itemPageTabsRow}>
                    <span className={styles.itemPageText}>Details</span>
                    <span className={styles.itemPageText001}>Description</span>
                    <span className={styles.itemPageText002}>Creator</span>
                </div>
                <div className={styles.itemPageContainer01}>
                    <h2 className={styles.itemPageText003}>
                        The crew of pirates gathered around a campfire on a tropical
                        island, their ship anchored offshore. They toasted their
                        recent plunder and shared stories of adventure. The sound of
                        waves and the scent of saltwater filled the air, as they
                        planned their next raid under the glow of the moon.
                    </h2>
                </div>
            </div>
        </div>
    )
})
