import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Links = memo(() => {
    const [links, setLinks] = useState([
        {
            link: "/drops",
            title: "Drops"
        },
        {
            link: "/stats",
            title: "Stats"
        },
        {
            link: "/creator-studio",
            title: "Create"
        },
        {
            link: "/drops",
            title: "More"
        },

    ])
    return (
        <div className={styles.container}>
            <div>
                {
                    links.map((link) => (
                        <Link
                            to={link.link}
                            className={`${styles.link} Content`}>
                            {link.title}
                        </Link>
                    ))
                }

                {/* <Link
                    to="/drops"
                    className={styles.layoutWithSidebarNavlink01}>
                    Drops
                </Link>
                <Link
                    to='/stats'
                    className={`${styles.layoutWithSidebarNavlink02} Content`}>
                    Stats
                </Link>
                <Link
                    to='/creator-studio'
                    className={`${styles.layoutWithSidebarNavlink03} Content`}>
                    Create
                </Link>
                <button className={`${styles.layoutWithSidebarButton1} Content`}>
                    More
                </button> */}
            </div>
        </div>
    )
}
)