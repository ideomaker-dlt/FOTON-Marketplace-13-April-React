import React, { memo } from 'react'
import { LeftContainer } from './leftContainer'
import { RightContainer } from './rightContainer'
import styles from "./styles.module.scss"


export const MainContainer = memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperAll}>
                <LeftContainer />
                {/* <div className="collection-drop-page-container-left">
                <div className="collection-drop-page-about">
                    <div className="collection-drop-page-container10">
                        <label className="collection-drop-page-text24">
                            About this Collection
                        </label>
                    </div>
                    <div className="collection-drop-page-container11"></div>
                    <p className="collection-drop-page-text25">
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
                <div className="collection-drop-page-about1">
                    <div className="collection-drop-page-container12">
                        <label className="collection-drop-page-text35">
                            Minting Details
                        </label>
                        <div className="collection-drop-page-container13">
                            <p className="collection-drop-page-text36">
                                <span>Price per item minted:</span>
                                <br></br>
                            </p>
                            <p className="collection-drop-page-text39">
                                <span>Minting starts:</span>
                                <br></br>
                            </p>
                        </div>
                        <div className="collection-drop-page-container14">
                            <label className="collection-drop-page-text42">TBA</label>
                            <label className="collection-drop-page-text43">
                                COMING SOON
                            </label>
                        </div>
                    </div>
                    <div className="collection-drop-page-container15">
                        <div className="collection-drop-page-buy-container">
                            <button className="collection-drop-page-button4 button">
                                <span className="collection-drop-page-text44">
                                    <span>Minting Soon</span>
                                    <br></br>
                                </span>
                            </button>
                            <button className="collection-drop-page-button5 button">
                                <span className="collection-drop-page-text47">
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
            </div> */}
                <RightContainer />
                {/* <div className="collection-drop-page-container-right">
                    <div className="collection-drop-page-item-info-box">
                        <div className="collection-drop-page-item-image">
                            <img
                                alt="image"
                                src="/playground_assets/vlad__foton.is__radix.stream_scenery_on_a_new_alien_planet_deso_556dbc6d-d05c-43d6-b5a3-019912494a61-1500w.png"
                                className="collection-drop-page-image1"
                            />
                        </div>
                        <div className="collection-drop-page-item-image1">
                            <img
                                alt="image"
                                src="/playground_assets/vlad__foton.is__radix.stream_scenery_on_a_new_alien_planet_inne_f7e1f32e-2759-4d97-ade9-00fbbe77368d-1500w.png"
                                className="collection-drop-page-image2"
                            />
                        </div>
                        <div className="collection-drop-page-item-image2">
                            <img
                                alt="image"
                                src="/playground_assets/vlad__foton.is__radix.stream_character_mood_board_from_3_angles_e1a1e6fb-e0fe-497f-9fce-c022e03dd47a-1500w.png"
                                className="collection-drop-page-image3"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )


})