import React, { memo, useState } from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'

export const CreatorStudio = memo(() => {
    const [navlinks, setNavlinks] = useState([
        {
            title: "Dashboard",
            link: "/creator-studio-collection",
            icon: "dashboard_customize"
        },
        {
            title: "Analytics",
            link: "/creator-studio-collection-analytics",
            icon: "insights"
        },
        {
            title: "Community",
            link: "/creator-studio-collection-analytics",
            icon: "settings"
        },
        {
            title: "Team",
            link: "/creator-studio-collection-analytics",
            icon: "group"
        },
        {
            title: "Store",
            link: "/creator-studio-collection-analytics",
            icon: "store"
        },
        {
            title: "Settings",
            link: "/creator-studio-collection-analytics",
            icon: "settings"
        },
    ])
    return (
        <div className={styles.container}>
            <span className={`Content16SemiBold`}>
                Creator Studio
            </span>
            <div>
                {
                    navlinks.map((navlink, ind) => (
                        <Link key={ind} to={navlink.link} className={styles.navlink}>
                            <div>
                                <span className={`material-symbols-outlined`}>
                                    <span>{navlink.icon}</span>
                                    <br></br>
                                </span>
                                <span className={`Content`}>{navlink.title}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
})
