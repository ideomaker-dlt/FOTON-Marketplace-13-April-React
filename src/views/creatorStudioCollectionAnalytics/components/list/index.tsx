import React, { memo, useState } from 'react'
import styles from "./styles.module.scss"


export const List = memo(() => {
    const [listWithBlueBg, setlistWithBlueBg] = useState([
        {
            title: "Items in Collection",
            percentage: "+31%",
            count: "15000"
        },
        {
            title: "Followers",
            percentage: "+31%",
            count: "3782"
        },
        {
            title: "Views",
            percentage: "+31%",
            count: "351,368"
        },
        {
            title: "Market Cap",
            percentage: "+31%",
            count: "203,365"
        },
        {
            title: "Volume",
            percentage: "+31%",
            count: "203,365"
        },
        {
            title: "Total Revenue",
            percentage: "+31%",
            count: "203,365"
        }
    ])
    const [listWithOutBlueBg, setlistWithOutBlueBg] = useState([
        {
            title: "Revenue Initial Sales",
            percentage: "+31%",
            count: "15000"
        },
        {
            title: "Revenue Royalties",
            percentage: "-14%",
            count: "3782"
        },
        {
            title: "Items Sold",
            percentage: "+31%",
            count: "351,368"
        },
        {
            title: "Items Resold",
            percentage: "+31%",
            count: "203,365"
        },
        {
            title: "Unique Owners",
            percentage: "+31%",
            count: "203,365"
        },
        {
            title: "# Rank on FOTON",
            percentage: "+31%",
            count: "203,365"
        }
    ])
    return (
        <div className={styles.creatorStudioCollectionAnalyticsResources}>
            <div className={styles.creatorStudioCollectionAnalyticsContainer06}>

                {
                    listWithBlueBg.map((item, index) => (
                        <div key={index} className={styles.creatorStudioCollectionAnalyticsItemData}>
                            <div className={styles.creatorStudioCollectionAnalyticsContainer07}>
                                <div className={styles.creatorStudioCollectionAnalyticsLabelRow}>
                                    <h1 className={styles.creatorStudioCollectionAnalyticsText16}>
                                        {item.title}
                                    </h1>
                                    <h1 className={styles.creatorStudioCollectionAnalyticsText17}>
                                        {item.percentage}
                                    </h1>
                                </div>
                                <div className={styles.creatorStudioCollectionAnalyticsValue}>
                                    <p className={styles.creatorStudioCollectionAnalyticsText18}>
                                        <span>
                                            {item.count}
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className={styles.creatorStudioCollectionAnalyticsText29}>
                                            XRD
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }


                {
                    listWithOutBlueBg.map((val, key) => (
                        <div key={key} className={styles.creatorStudioCollectionAnalyticsItemData06}>
                            <div className={styles.creatorStudioCollectionAnalyticsContainer13}>
                                <div className={styles.creatorStudioCollectionAnalyticsLabelRow06}>
                                    <h1 className={styles.creatorStudioCollectionAnalyticsText40}>
                                        {val.title}
                                    </h1>
                                    <h1 className={styles.creatorStudioCollectionAnalyticsText41}>
                                        {val.percentage}
                                    </h1>
                                </div>
                                <div className={styles.creatorStudioCollectionAnalyticsValue06}>
                                    <p className={styles.creatorStudioCollectionAnalyticsText42}>
                                        <span>
                                            {val.count}
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className={styles.creatorStudioCollectionAnalyticsText44}>
                                            XRD
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }





            </div>
        </div>
    )


})