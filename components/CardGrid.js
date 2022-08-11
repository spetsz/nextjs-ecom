import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import styles from '../styles/cardGrid.module.css';
import Skeleton from '@mui/material/Skeleton';

import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { BsChevronBarDown } from "react-icons/bs";


export default function CardGrid({ itemList, productLimit = 8, loading, style, ...props }) {
    // itemList is an array
    const [productAmount, setProductAmount] = useState(8)

    let getMoreProducts = () => {
        if (productAmount + 8 <= productLimit) {
            setProductAmount(productAmount + 8)
        } else {
            setProductAmount(productLimit - productAmount + 8)
        }
    }

    return (
        <>
            <section className={styles.card_container} style={style}>
                {

                    loading ?
                        // This is the skeleton of the card structure which appears when content is loading.
                        [...Array(8)].map(() => {
                            return (
                                <>
                                    <Box sx={{ width: '100%', maxWidth: 245, background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.901), rgba(114, 114, 114, 0.935))' }}>
                                        <CardHeader
                                            avatar={
                                                <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                            }
                                            title={
                                                <Skeleton
                                                    animation="wave"
                                                    height={10}
                                                    width="80%"
                                                    style={{ marginBottom: 6 }}
                                                />
                                            }
                                            subheader={
                                                <Skeleton animation="wave" height={10} width="40%" />
                                            }
                                        />
                                        <Skeleton sx={{ height: 150 }} animation="wave" variant="rectangular" />
                                        <CardContent>
                                            <React.Fragment>
                                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                                <Skeleton animation="wave" height={10} width="80%" />
                                            </React.Fragment>
                                        </CardContent>
                                    </Box>
                                </>
                            )
                        })
                        :
                        itemList &&
                        itemList.slice(0, productAmount).map((item, i) => <Card

                            key={i}
                            item={item}
                            className='products__card--grid'
                        />)
                }
            </section>
            <button onClick={getMoreProducts} className={styles.contentLoad_btn}>
                <p>LOAD MORE</p>
                <BsChevronBarDown />
            </button>
        </>
    )
}