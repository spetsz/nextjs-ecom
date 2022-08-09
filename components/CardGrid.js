import React from "react";
import Card from "./Card";
import styles from '../styles/cardGrid.module.css';
import Skeleton from '@mui/material/Skeleton';

import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


export default function CardGrid({ itemList, loading, style, ...props }) {
    // itemList is an array
    return (
        <section className={styles.card_container} style={style}>
            {
                loading ?
                    itemList &&
                    itemList.map((item, i) => <Card

                        key={i}
                        item={item}
                        className='products__card--grid'
                    />)

                    :
                    // This is the skeleton of the card structure which appears when content is loading.
                    [...Array(10)].map(() => {
                        return (
                            <>
                                <Box sx={{width: '100%', maxWidth: 345, m: 2 , background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.901), rgba(114, 114, 114, 0.935))'}}>
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
            }
        </section>
    )
}