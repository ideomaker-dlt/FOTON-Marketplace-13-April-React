import React, { memo, useState } from 'react'
import styles from "./styles.module.scss"
export const OffersAndActivity = memo(() => {
    const [offers, setOffers] = useState([
        {
            "price": "357 XRD",
            "floorDifference": "59% below",
            "floorText": "Expires in",
            "floorVal": "1",
            "expiration": "in 21 hours",
            "quantity": "21",
            "from": "rdx7..274g",
            "percentage": "21 days left",
        },
        {
            "price": "357 XRD",
            "floorDifference": "59% below",
            "floorText": "Floor:",
            "floorVal": "1",
            "expiration": "in 21 hours",
            "quantity": "1",
            "from": "rdx7..274g",
            "percentage": "+31%",
        },
        {
            "price": "357 XRD",
            "floorDifference": "59% below",
            "floorText": "Floor:",
            "floorVal": "1",
            "expiration": "in 21 hours",
            "quantity": "1",
            "from": "rdx7..274g",
            "percentage": "+31%",
        },
        {
            "price": "357 XRD",
            "floorDifference": "59% below",
            "floorText": "Floor:",
            "floorVal": "1",
            "expiration": "in 21 hours",
            "quantity": "1",
            "from": "rdx7..274g",
            "percentage": "+31%",
        },
        {
            "price": "357 XRD",
            "floorDifference": "59% below",
            "floorText": "Floor:",
            "floorVal": "1",
            "expiration": "in 21 hours",
            "quantity": "1",
            "from": "rdx7..274g",
            "percentage": "+31%",
        },
        {
            "price": "357 XRD",
            "floorDifference": "59% below",
            "floorText": "Floor:",
            "floorVal": "1",
            "expiration": "in 21 hours",
            "quantity": "1",
            "from": "rdx7..274g",
            "percentage": "+31%",
        }
    ])
    return (
        <div className={styles.itemPageItemDetails2}>
            <div className={styles.itemPageTabsRow3}>
                <span className={styles.itemPageText165}>Offers</span>
                <span className={styles.itemPageText166}>Listings</span>
                <span className={styles.itemPageText167}>Activity</span>
            </div>
            <div className={styles.itemPageContainer17}>
                <div className={styles.itemPageHeaderTable}>
                    <div className={`${styles.itemPageSecondColumn} header-second-column`}>
                        <div className={styles.itemPageGroup1}>
                            <div className={styles.itemPageName}>
                                <span className={styles.itemPageText168}>
                                    <span className={`${styles.itemPageText169} Content16SemiBold`}>
                                        Price
                                    </span>
                                    <br></br>
                                </span>
                            </div>
                            <div className={styles.itemPageVolume}>
                                <span className={`${styles.itemPageText171} Content16SemiBold`}>
                                    Floor Difference
                                </span>
                            </div>
                        </div>
                        <div className={styles.itemPageGroup2}>
                            <div className={styles.itemPageChange}>
                                <span className={`${styles.itemPageText172} Content16SemiBold`}>
                                    expiration
                                </span>
                            </div>
                            <div className={styles.itemPageFloor}>
                                <span className={`${styles.itemPageText173} Content16SemiBold`}>
                                    Floor:
                                </span>
                                <span className={`${styles.itemPageText174} Content16SemiBold`}>
                                    quantity
                                </span>
                            </div>
                            <div className={styles.itemPageChange01}>
                                <span className={`${styles.itemPageText175} Content16SemiBold`}>
                                    from
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    offers.map((offer, key) => (
                        <div key={key} className={`table-row`}>
                            <div className={`${styles.itemPageSecondColumn1} table-row-second-column`}>
                                <div className={styles.itemPageGroup11}>
                                    <div className={styles.itemPageName1}>
                                        <span className={`${styles.itemPageText176} Content16SemiBold`}>
                                            {offer.price}
                                        </span>
                                    </div>
                                    <div className={styles.itemPageVolume1}>
                                        <span className={`${styles.itemPageText177} Content16SemiBold`}>
                                            {offer.floorDifference}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.itemPageGroup21}>
                                    <div className={styles.itemPageChange02}>
                                        <span className={styles.itemPageText178}>{offer.expiration}</span>
                                    </div>
                                    <div className={styles.itemPageFloor1}>
                                        <span className={`${styles.itemPageTextMobile} Content16SemiBold`}>
                                            {offer.floorText}
                                        </span>
                                        <span className={`${styles.itemPageText179} Content16SemiBold`}>
                                            {offer.floorVal}
                                        </span>
                                    </div>
                                    <div className={styles.itemPageChange03}>
                                        <span className={styles.itemPageText180}>{offer.from}</span>
                                        <span className={styles.itemPageChangeMobile}>
                                            {offer.percentage}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/*<div className="table-row">
                    <div className="item-page-second-column1 table-row-second-column">
                        <div className="item-page-group11">
                            <div className="item-page-name1">
                                <span className="item-page-text176 Content16SemiBold">
                                    357 XRD
                                </span>
                            </div>
                            <div className="item-page-volume1">
                                <span className="item-page-text177 Content16SemiBold">
                                    59% below
                                </span>
                            </div>
                        </div>
                        <div className="item-page-group21">
                            <div className="item-page-change02">
                                <span className="item-page-text178">in 21 hours</span>
                            </div>
                            <div className="item-page-floor1">
                                <span className="item-page-text-mobile Content16SemiBold">
                                    Expires in
                                </span>
                                <span className="item-page-text179 Content16SemiBold">
                                    21
                                </span>
                            </div>
                            <div className="item-page-change03">
                                <span className="item-page-text180">rdx7..274g</span>
                                <span className="item-page-change-mobile">
                                    21 days left
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="table-row">
                    <div className="item-page-second-column2 table-row-second-column">
                        <div className="item-page-group12">
                            <div className="item-page-name2">
                                <span className="item-page-text181 Content16SemiBold">
                                    357 XRD
                                </span>
                            </div>
                            <div className="item-page-volume2">
                                <span className="item-page-text182 Content16SemiBold">
                                    59% below
                                </span>
                            </div>
                        </div>
                        <div className="item-page-group22">
                            <div className="item-page-change04">
                                <span className="item-page-text183">in 21 hours</span>
                            </div>
                            <div className="item-page-floor2">
                                <span className="item-page-text-mobile1 Content16SemiBold">
                                    Floor:
                                </span>
                                <span className="item-page-text184 Content16SemiBold">
                                    1
                                </span>
                            </div>
                            <div className="item-page-change05">
                                <span className="item-page-text185">rdx7..274g</span>
                                <span className="item-page-change-mobile1">+31%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-row">
                    <div className="item-page-second-column3 table-row-second-column">
                        <div className="item-page-group13">
                            <div className="item-page-name3">
                                <span className="item-page-text186 Content16SemiBold">
                                    357 XRD
                                </span>
                            </div>
                            <div className="item-page-volume3">
                                <span className="item-page-text187 Content16SemiBold">
                                    59% below
                                </span>
                            </div>
                        </div>
                        <div className="item-page-group23">
                            <div className="item-page-change06">
                                <span className="item-page-text188">in 21 hours</span>
                            </div>
                            <div className="item-page-floor3">
                                <span className="item-page-text-mobile2 Content16SemiBold">
                                    Floor:
                                </span>
                                <span className="item-page-text189 Content16SemiBold">
                                    1
                                </span>
                            </div>
                            <div className="item-page-change07">
                                <span className="item-page-text190">rdx7..274g</span>
                                <span className="item-page-change-mobile2">+31%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-row">
                    <div className="item-page-second-column4 table-row-second-column">
                        <div className="item-page-group14">
                            <div className="item-page-name4">
                                <span className="item-page-text191 Content16SemiBold">
                                    357 XRD
                                </span>
                            </div>
                            <div className="item-page-volume4">
                                <span className="item-page-text192 Content16SemiBold">
                                    59% below
                                </span>
                            </div>
                        </div>
                        <div className="item-page-group24">
                            <div className="item-page-change08">
                                <span className="item-page-text193">in 21 hours</span>
                            </div>
                            <div className="item-page-floor4">
                                <span className="item-page-text-mobile3 Content16SemiBold">
                                    Floor:
                                </span>
                                <span className="item-page-text194 Content16SemiBold">
                                    1
                                </span>
                            </div>
                            <div className="item-page-change09">
                                <span className="item-page-text195">rdx7..274g</span>
                                <span className="item-page-change-mobile3">+31%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-row">
                    <div className="item-page-second-column5 table-row-second-column">
                        <div className="item-page-group15">
                            <div className="item-page-name5">
                                <span className="item-page-text196 Content16SemiBold">
                                    357 XRD
                                </span>
                            </div>
                            <div className="item-page-volume5">
                                <span className="item-page-text197 Content16SemiBold">
                                    59% below
                                </span>
                            </div>
                        </div>
                        <div className="item-page-group25">
                            <div className="item-page-change10">
                                <span className="item-page-text198">in 21 hours</span>
                            </div>
                            <div className="item-page-floor5">
                                <span className="item-page-text-mobile4 Content16SemiBold">
                                    Floor:
                                </span>
                                <span className="item-page-text199 Content16SemiBold">
                                    1
                                </span>
                            </div>
                            <div className="item-page-change11">
                                <span className="item-page-text200">rdx7..274g</span>
                                <span className="item-page-change-mobile4">+31%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-row">
                    <div className="item-page-second-column6 table-row-second-column">
                        <div className="item-page-group16">
                            <div className="item-page-name6">
                                <span className="item-page-text201 Content16SemiBold">
                                    357 XRD
                                </span>
                            </div>
                            <div className="item-page-volume6">
                                <span className="item-page-text202 Content16SemiBold">
                                    59% below
                                </span>
                            </div>
                        </div>
                        <div className="item-page-group26">
                            <div className="item-page-change12">
                                <span className="item-page-text203">in 21 hours</span>
                            </div>
                            <div className="item-page-floor6">
                                <span className="item-page-text-mobile5 Content16SemiBold">
                                    Floor:
                                </span>
                                <span className="item-page-text204 Content16SemiBold">
                                    1
                                </span>
                            </div>
                            <div className="item-page-change13">
                                <span className="item-page-text205">rdx7..274g</span>
                                <span className="item-page-change-mobile5">+31%</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
})
