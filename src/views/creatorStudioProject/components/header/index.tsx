import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const Header = memo(() => {

    return (
        <div className={styles.creatorStudioProjectHeaderCreator}>
            <div className={styles.creatorStudioProjectGrayOverlay}></div>
            <div className={styles.creatorStudioProjectContainer01}>
                <div className={styles.creatorStudioProjectContainer02}>
                    <div className={styles.creatorStudioProjectAvatarLogo}>
                        <img src='/playground_assets/hexagonmaskbordergray.svg'
                            className={styles.creatorStudioProjectMask} />
                        <img src='/playground_assets/art_3.0_ninja__2d__game_character_._cevtore_style__t_pose_00ed9e8d-9bd5-4d11-be76-c73a71e6f04e-200h.png'
                            className={styles.creatorStudioProjectImage} />
                    </div>
                    <div className={styles.creatorStudioProjectContainer03}>
                        <h1 className={styles.creatorStudioProjectText}>Project One</h1>
                        <h1 className={styles.creatorStudioProjectText01}>
                            <span>2 Collections, 1500 items</span>
                            <br></br>
                        </h1>
                    </div>
                </div>
                <div className={styles.creatorStudioProjectButtons}>
                    <Link
                        to='/add-collection1'
                        className={`${styles.creatorStudioProjectNavlink} button`}
                    >
                        <span className={styles.creatorStudioProjectText04}>
                            <span>Add Collection</span>
                            <br></br>
                        </span>
                    </Link>
                    <Link
                        to='/add-items-selector'
                        className={`${styles.creatorStudioProjectNavlink1} button`}
                    >
                        <span className={styles.creatorStudioProjectText07}>
                            <span>Add Items</span>
                            <br></br>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )


})