import React, { memo } from 'react'
import styles from './styles.module.scss'

export const LeftContainer = memo(() => {
    return (
        <div className={styles.collectorProfileContainer08}>
            <div className={styles.collectorProfileAbout}>
                <div className={styles.collectorProfileContainer09}>
                    <label className={styles.collectorProfileText36}>About</label>
                </div>
                <div className={styles.collectorProfileContainer10}>
                    <h2 className={`${styles.collectorProfileText37} Content`}>
                        The crew of pirates gathered around a campfire on a tropical
                        island, their ship anchored offshore. They toasted their
                        recent plunder and shared stories of adventure. The sound of
                        waves and the scent of saltwater filled the air, as they
                        planned their next raid under the glow of the moon.
                    </h2>
                </div>
            </div>
            <div className={styles.collectorProfileLevels}>
                <div className={styles.collectorProfileHeaderTable}>
                    <div className={`${styles.collectorProfileSecondColumn} header-second-column`}>
                        <div className={styles.collectorProfileGroup1}>
                            <div className={styles.collectorProfileName}>
                                <span className={styles.collectorProfileText38}>
                                    <span className={`${styles.collectorProfileText39} Content16SemiBold`}>
                                        Type
                                    </span>
                                    <br></br>
                                </span>
                            </div>
                            <div className={styles.collectorProfileVolume}>
                                <span className={`${styles.collectorProfileText41} Content16SemiBold`}>
                                    Level
                                </span>
                            </div>
                        </div>
                        <div className={styles.collectorProfileGroup2}>
                            <div className={styles.collectorProfileChange}>
                                <span className={`${styles.collectorProfileText42} Content16SemiBold`}>
                                    points
                                </span>
                            </div>
                            <div className={styles.collectorProfileFloor}>
                                <span className={`${styles.collectorProfileText43} Content16SemiBold`}>
                                    Floor:
                                </span>
                                <span className={`${styles.collectorProfileText44} Content16SemiBold`}>
                                    to level up
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.collectorProfileContainer11}>
                    <div className={`${styles.collectorProfileRow} table-row`}>
                        <div className={`${styles.collectorProfileSecondColumn1} table-row-second-column`}>
                            <div className={styles.collectorProfileGroup11}>
                                <div className={styles.collectorProfileSkill}>
                                    <span className={`${styles.collectorProfileText45} Content16SemiBold`}>
                                        Creating
                                    </span>
                                </div>
                                <div className={styles.collectorProfileLevel}>
                                    <span className={`${styles.collectorProfileText46} Content16SemiBold`}>
                                        3/60
                                    </span>
                                </div>
                            </div>
                            <div className={styles.collectorProfileGroup21}>
                                <div className={styles.collectorProfileChange1}>
                                    <span className={styles.collectorProfileText47}>
                                        Points:
                                    </span>
                                    <span className={styles.collectorProfileText48}>2300</span>
                                </div>
                                <div className={styles.collectorProfileFloor1}>
                                    <span className={`${styles.collectorProfileTextMobile} Content16SemiBold`}>
                                        To Level Up:
                                    </span>
                                    <span className={`${styles.collectorProfileText49} Content16SemiBold`}>
                                        500
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.collectorProfileRow1} table-row`}>
                        <div className={`${styles.collectorProfileSecondColumn2} table-row-second-column`}>
                            <div className={styles.collectorProfileGroup12}>
                                <div className={styles.collectorProfileSkill1}>
                                    <span className={`${styles.collectorProfileText50} Content16SemiBold`}>
                                        Engaging
                                    </span>
                                </div>
                                <div className={styles.collectorProfileLevel1}>
                                    <span className={`${styles.collectorProfileText51} Content16SemiBold`}>
                                        1/60
                                    </span>
                                </div>
                            </div>
                            <div className={styles.collectorProfileGroup22}>
                                <div className={styles.collectorProfileChange2}>
                                    <span className={styles.collectorProfileText52}>
                                        Points:
                                    </span>
                                    <span className={styles.collectorProfileText53}>3500</span>
                                </div>
                                <div className={styles.collectorProfileFloor2}>
                                    <span className={`${styles.collectorProfileTextMobile1} Content16SemiBold`}>
                                        To Level Up:
                                    </span>
                                    <span className={`${styles.collectorProfileText54} Content16SemiBold`}>
                                        500
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.collectorProfileRow2} table-row`}>
                        <div className={`${styles.collectorProfileSecondColumn3} table-row-second-column`}>
                            <div className={styles.collectorProfileGroup13}>
                                <div className={styles.collectorProfileSkill2}>
                                    <span className={`${styles.collectorProfileText55} Content16SemiBold`}>
                                        Trading
                                    </span>
                                </div>
                                <div className={styles.collectorProfileLevel2}>
                                    <span className={`${styles.collectorProfileText56} Content16SemiBold`}>
                                        0/60
                                    </span>
                                </div>
                            </div>
                            <div className={styles.collectorProfileGroup23}>
                                <div className={styles.collectorProfileChange3}>
                                    <span className={styles.collectorProfileText57}>
                                        Points:
                                    </span>
                                    <span className={styles.collectorProfileText58}>0</span>
                                </div>
                                <div className={styles.collectorProfileFloor3}>
                                    <span className={`${styles.collectorProfileTextMobile2} Content16SemiBold`}>
                                        To Level Up:
                                    </span>
                                    <span className={`${styles.collectorProfileText59} Content16SemiBold`}>
                                        500
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})