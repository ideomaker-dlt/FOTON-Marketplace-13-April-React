import React, { memo, useState } from 'react'
import styles from "./styles.module.scss"

export const Treats = memo(() => {
    const [treats, setTreats] = useState([
        {
            "title": "Eyes",
            "count": 243,
            "haveIt": "Have It",
            "color": "Purple",
            "percentage": "14%",
        },
        {
            "title": "Eyes",
            "count": 243,
            "haveIt": "Have It",
            "color": "Purple",
            "percentage": "14%",
        },
        {
            "title": "Eyes",
            "count": 243,
            "haveIt": "Have It",
            "color": "Purple",
            "percentage": "14%",
        },

        {
            "title": "Eyes",
            "count": 243,
            "haveIt": "Have It",
            "color": "Purple",
            "percentage": "14%",
        },
        {
            "title": "Eyes",
            "count": 243,
            "haveIt": "Have It",
            "color": "Purple",
            "percentage": "14%",
        },
        {
            "title": "Eyes",
            "count": 243,
            "haveIt": "Have It",
            "color": "Purple",
            "percentage": "14%",
        },
        {
            "title": "Eyes",
            "count": 243,
            "haveIt": "Have It",
            "color": "Purple",
            "percentage": "14%",
        },

        {
            "title": "Eyes",
            "count": 243,
            "haveIt": "Have It",
            "color": "Purple",
            "percentage": "14%",
        },

    ])
    return (
        <div className={styles.itemPageItemDetails1}>
            <div className={styles.itemPageTabsRow2}>
                <span className={styles.itemPageText043}>Treats</span>
                <span className={styles.itemPageText044}>Rarity</span>
            </div>
            <div className={styles.itemPageContainer08}>
                {
                    treats.map((treat, ind) => (
                        <div key={ind} className={styles.itemPageTreat}>
                            <div className={styles.itemPageContainerRow}>
                                <p className={styles.itemPageText045}>
                                    <span>{treat.title}</span>
                                    <br></br>
                                </p>
                                <div className={styles.itemPageContainer09}>
                                    <p className={styles.itemPageText048}>
                                        <span>{treat.count}</span>
                                        <br></br>
                                    </p>
                                    <p className={styles.itemPageText051}>
                                        <span>{treat.haveIt}</span>
                                        <br></br>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.itemPageContainerRow01}>
                                <p className={styles.itemPageText054}>
                                    <span>{treat.color}</span>
                                    <br></br>
                                </p>
                                <p className={styles.itemPageText057}>
                                    <span>{treat.percentage}</span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    ))
                }

                {/* <div className="itemPageTreat1">
                    <div className="itemPageContainer-row02">
                        <p className="itemPageText060">
                            <span>Eyes</span>
                            <br></br>
                        </p>
                        <div className="itemPageContainer10">
                            <p className="itemPageText063">
                                <span>243</span>
                                <br></br>
                            </p>
                            <p className="itemPageText066">
                                <span>Have it</span>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <div className="itemPageContainer-row03">
                        <p className="itemPageText069">
                            <span>Purple</span>
                            <br></br>
                        </p>
                        <p className="itemPageText072">
                            <span>14%</span>
                            <br></br>
                        </p>
                    </div>
                </div>
                <div className="itemPageTreat2">
                    <div className="itemPageContainer-row04">
                        <p className="itemPageText075">
                            <span>Eyes</span>
                            <br></br>
                        </p>
                        <div className="itemPageContainer11">
                            <p className="itemPageText078">
                                <span>243</span>
                                <br></br>
                            </p>
                            <p className="itemPageText081">
                                <span>Have it</span>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <div className="itemPageContainer-row05">
                        <p className="itemPageText084">
                            <span>Purple</span>
                            <br></br>
                        </p>
                        <p className="itemPageText087">
                            <span>14%</span>
                            <br></br>
                        </p>
                    </div>
                </div>
                <div className="itemPageTreat3">
                    <div className="itemPageContainer-row06">
                        <p className="itemPageText090">
                            <span>Eyes</span>
                            <br></br>
                        </p>
                        <div className="itemPageContainer12">
                            <p className="itemPageText093">
                                <span>243</span>
                                <br></br>
                            </p>
                            <p className="itemPageText096">
                                <span>Have it</span>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <div className="itemPageContainer-row07">
                        <p className="itemPageText099">
                            <span>Purple</span>
                            <br></br>
                        </p>
                        <p className="itemPageText102">
                            <span>14%</span>
                            <br></br>
                        </p>
                    </div>
                </div>
                <div className="itemPageTreat4">
                    <div className="itemPageContainer-row08">
                        <p className="itemPageText105">
                            <span>Eyes</span>
                            <br></br>
                        </p>
                        <div className="itemPageContainer13">
                            <p className="itemPageText108">
                                <span>243</span>
                                <br></br>
                            </p>
                            <p className="itemPageText111">
                                <span>Have it</span>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <div className="itemPageContainer-row09">
                        <p className="itemPageText114">
                            <span>Purple</span>
                            <br></br>
                        </p>
                        <p className="itemPageText117">
                            <span>14%</span>
                            <br></br>
                        </p>
                    </div>
                </div>
                <div className="itemPageTreat5">
                    <div className="itemPageContainer-row10">
                        <p className="itemPageText120">
                            <span>Eyes</span>
                            <br></br>
                        </p>
                        <div className="itemPageContainer14">
                            <p className="itemPageText123">
                                <span>243</span>
                                <br></br>
                            </p>
                            <p className="itemPageText126">
                                <span>Have it</span>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <div className="itemPageContainer-row11">
                        <p className="itemPageText129">
                            <span>Purple</span>
                            <br></br>
                        </p>
                        <p className="itemPageText132">
                            <span>14%</span>
                            <br></br>
                        </p>
                    </div>
                </div>
                <div className="itemPageTreat6">
                    <div className="itemPageContainer-row12">
                        <p className="itemPageText135">
                            <span>Eyes</span>
                            <br></br>
                        </p>
                        <div className="itemPageContainer15">
                            <p className="itemPageText138">
                                <span>243</span>
                                <br></br>
                            </p>
                            <p className="itemPageText141">
                                <span>Have it</span>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <div className="itemPageContainer-row13">
                        <p className="itemPageText144">
                            <span>Purple</span>
                            <br></br>
                        </p>
                        <p className="itemPageText147">
                            <span>14%</span>
                            <br></br>
                        </p>
                    </div>
                </div>
                <div className="itemPageTreat7">
                    <div className="itemPageContainer-row14">
                        <p className="itemPageText150">
                            <span>Eyes</span>
                            <br></br>
                        </p>
                        <div className="itemPageContainer16">
                            <p className="itemPageText153">
                                <span>243</span>
                                <br></br>
                            </p>
                            <p className="itemPageText156">
                                <span>Have it</span>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <div className="itemPageContainer-row15">
                        <p className="itemPageText159">
                            <span>Purple</span>
                            <br></br>
                        </p>
                        <p className="itemPageText162">
                            <span>14%</span>
                            <br></br>
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
})
