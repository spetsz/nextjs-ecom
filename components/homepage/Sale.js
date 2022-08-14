import React, { useEffect } from "react";
import { Card } from "@mui/material";
import BgWithBlur from "../BgWithBlur"
import Button from "@mui/material/Button";
import styles from '../../styles/sale.module.css';
import Typography from '@mui/material/Typography';
import Skeleton from "@mui/material/Skeleton";

export default function Sale({ bannerContent, ...props }) {
    console.log('banner ', bannerContent)
    const bannerStyling = {
        position: 'relative',
        textAlign: 'center',
        display: 'grid',
        padding: '1.2em',
        borderRadius: '0px',
        backgroundColor: 'transparent',
        aspectRatio: '4/5',
        zIndex: '0',
    }
    const templateBg = `https://picsum.photos/500/500`
    return (
        <>
            <section className={styles.content_container + ' ' + styles.gradient}>
                <Typography variant="h4" className={styles.section_heading}>Sale Product</Typography>
                <article className={styles.card_container}>
                    {
                        bannerContent ?
                            bannerContent.map(({ quote: textContent }, i) => {
                                return (
                                    <Card key={i} sx={bannerStyling}>
                                        <BgWithBlur bg={templateBg} height="100%" width="100%" imgBlur={'7px'} />
                                        <Typography>{textContent}</Typography>
                                        <Button variant="contained"
                                            className={styles.gradient}
                                            sx={{
                                                width: '80%',
                                                borderRadius: '300px',
                                                alignSelf: 'flex-end',
                                                justifySelf: 'center'
                                            }}>read more</Button>
                                    </Card>
                                )
                            })
                            :
                            [...Array(3)].map((textContent, i) => {
                                return( 
                                <Skeleton animation='wave' variant='rectangular' height='350px' >
                                </Skeleton>
                                )
                            })
                    }
                </article>
            </section>
        </>
    )
}