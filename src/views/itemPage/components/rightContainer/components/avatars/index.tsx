import React, { memo } from 'react'
import styles from "./styles.module.scss"
export const Avatars = memo(() => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.itemPageContainer05}>
                    <div className={styles.itemPageEngagementButtons}>
                        <button type="button" className={styles.itemPageButton}>
                            <svg
                                viewBox="0 0 1024 1024"
                                className={`${styles.itemPageIcon} fill-color-white`}
                            >
                                <path d="M516 792q96-86 142-130t100-104 75-106 21-90q0-64-43-106t-107-42q-50 0-93 28t-59 72h-80q-16-44-59-72t-93-28q-64 0-107 42t-43 106q0 44 21 90t75 106 100 104 142 130l4 4zM704 128q100 0 167 68t67 166q0 58-22 113t-81 123-107 114-154 142l-62 56-62-54q-138-124-199-186t-113-146-52-162q0-98 67-166t167-68q116 0 192 90 76-90 192-90z"></path>
                            </svg>
                            <span className={styles.itemPageText014}>
                                <span>2536</span>
                                <br></br>
                            </span>
                        </button>
                        <button type="button" className={styles.itemPageButton1}>
                            <svg
                                viewBox="0 0 1024 1024"
                                className={`${styles.itemPageIcon02} fill-color-white`}
                            >
                                <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                            </svg>
                            <span className={styles.itemPageText017}>
                                <span>16536</span>
                                <br></br>
                            </span>
                        </button>
                        <button type="button" className={styles.itemPageButton2}>
                            <span className={styles.itemPageText020}>
                                <span>Avatars</span>
                                <br></br>
                            </span>
                        </button>
                    </div>
                    <h2 className={styles.itemPageText023}>
                        The crew of pirates gathered around a campfire on a
                        tropical island, their ship anchored offshore. They
                        toasted their recent plunder and shared stories of
                        adventure. The sound of waves and the scent of saltwater
                        filled the air, as they planned their next raid under the
                        glow of the moon.
                    </h2>
                    <p className={styles.itemPageText024}>
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
            </div >
        </div >
    )
})
