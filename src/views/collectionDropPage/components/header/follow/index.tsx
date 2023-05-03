import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Follow = memo(() => {
    return (
        <div className={styles.overlay}>
            <div className={styles.collectionDropPageContainerButtons}>
                <button type="button" className={styles.collectionDropPageButton}>
                    <svg
                        viewBox="0 0 1024 1024"
                        className={`${styles.collectionDropPageIcon} fill-color-white`}
                    >
                        <path d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"></path>
                    </svg>
                    <span className={styles.collectionDropPageText09}>
                        <span>Follow</span>
                        <br></br>
                    </span>
                </button>
                <button type="button" className={styles.collectionDropPageButton1}>
                    <svg
                        viewBox="0 0 1024 1024"
                        className={`${styles.collectionDropPageIcon2} fill-color-white`}
                    >
                        <path d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <span className={styles.collectionDropPageText12}>
                        <span>Follow</span>
                        <br></br>
                    </span>
                </button>
                <button type="button" className={styles.collectionDropPageButton2}>
                    <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className={`${styles.collectionDropPageIcon4} fill-color-white`}
                    >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <span className={styles.collectionDropPageText15}>
                        <span>Follow</span>
                        <br></br>
                    </span>
                </button>
                <button type="button" className={styles.collectionDropPageButton3}>
                    <span className={styles.collectionDropPageText18}>
                        <span>Follow</span>
                        <br></br>
                    </span>
                    <svg
                        viewBox="0 0 1024 1024"
                        className={`${styles.collectionDropPageIcon6} fill-color-white`}
                    >
                        <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )


})