import React, { memo, useState } from 'react'
import styles from "./styles.module.scss"
export const InfoBox = memo(() => {

    return (
        <div className={styles.addProjectInfoBox}>
            <div className={styles.addProjectContainer10}>
                <h1 className={`${styles.addProjectText74} Content18 `}>
                    <span>Info:</span>
                    <br></br>
                </h1>
                <span className={styles.addProjectText77}>
                    <span>
                        A Project is the first type of content every user has to
                        create before adding any NFTs on the platform. Projects
                        will nest Collections and Collections will nest individual
                        NFTs.
                    </span>
                    <br className={styles.Content}></br>
                    <br></br>
                    <span>
                        Think of a Project as a recognisable Brand, Organisation
                        or Identity for the other users to find you easier.
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </span>
                    <span>
                        Later you will be able to invite team members to
                        collaborate or even trade the project or pass it over to
                        someone else, if you want to work on new things.
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </span>
                    <span>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </span>
                </span>
            </div>
        </div >
    )
})
