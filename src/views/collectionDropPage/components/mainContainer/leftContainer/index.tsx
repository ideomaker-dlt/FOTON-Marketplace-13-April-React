import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const LeftContainer = memo(() => {
    return (
        <div className={styles.collectionDropPageContainerLeft}>
            <div className={styles.collectionDropPageAbout}>
                <div className={styles.collectionDropPageContainer10}>
                    <label className={styles.collectionDropPageText24}>
                        About this Collection
                    </label>
                </div>
                <div className={styles.collectionDropPageContainer11}></div>
                <p className={styles.collectionDropPageText25}>
                    <span>
                        In the year 2050, humanity had exhausted the resources of
                        Earth and faced the grim reality of its impending demise.
                        But hope was not lost, for a team of scientists had
                        discovered a new planet, similar to Mars, that could sustain
                        human life. A mission was launched to establish a colony on
                        this distant world, and after years of travel, the first
                        settlers arrived.
                    </span>
                    <br className="Content"></br>
                    <span>
                        The new planet, named Nova, was a harsh and unforgiving
                        environment. The colonists had to contend with intense
                        radiation, extreme temperatures, and unpredictable weather
                        patterns. But with their advanced technology and unyielding
                        determination, they managed to establish a self-sustaining
                        colony and began the process of terraforming the planet.
                    </span>
                    <br className="Content"></br>
                    <span>
                        As the years passed, the colonists adapted to their new home
                        and formed a thriving society. They built towering cities,
                        cultivated vast fields of crops, and explored the uncharted
                        regions of the planet. But they soon discovered that they
                        were not alone on Nova.
                    </span>
                    <br className="Content"></br>
                    <span>
                        The planet was home to a diverse array of alien life forms,
                        some of which were hostile to human presence. The colonists
                        found themselves in a constant struggle for survival,
                        battling against vicious predators and cunning adversaries.
                        And as they delved deeper into the mysteries of Nova, they
                        began to uncover dark secrets about its true nature and the
                        forces that brought them there.
                    </span>
                    <br className="Content"></br>
                    <span>
                        This is the story of the Nova colony and its struggle for
                        survival in an alien world. It is a tale of courage,
                        determination, and the indomitable spirit of humanity in the
                        face of adversity. But it is also a cautionary tale about
                        the dangers of playing god and the consequences of our
                        actions on the universe around us.
                    </span>
                </p>
            </div>
            <div className={styles.collectionDropPageAbout1}>
                <div className={styles.collectionDropPageContainer12}>
                    <label className={styles.collectionDropPageText35}>
                        Minting Details
                    </label>
                    <div className={styles.collectionDropPageContainer13}>
                        <p className={styles.collectionDropPageText36}>
                            <span>Price per item minted:</span>
                            <br></br>
                        </p>
                        <p className={styles.collectionDropPageText39}>
                            <span>Minting starts:</span>
                            <br></br>
                        </p>
                    </div>
                    <div className={styles.collectionDropPageContainer14}>
                        <label className={styles.collectionDropPageText42}>TBA</label>
                        <label className={styles.collectionDropPageText43}>
                            COMING SOON
                        </label>
                    </div>
                </div>
                <div className={styles.collectionDropPageContainer15}>
                    <div className={`${styles.collectionDropPageBuyContainer}`}>
                        <button className={`${styles.collectionDropPageButton4} button`}>
                            <span className={styles.collectionDropPageText44}>
                                <span>Minting Soon</span>
                                <br></br>
                            </span>
                        </button>
                        <button className={`${styles.collectionDropPageButton5} button`}>
                            <span className={styles.collectionDropPageText47}>
                                <span>
                                    Follow
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <br></br>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )


})