import React, { useEffect } from "react";
import { Card } from "@mui/material";
import BgWithBlur from "../BgWithBlur"
import Button from "@mui/material/Button";
import styles from '../../styles/sale.module.css';
import Typography from '@mui/material/Typography'
import psychedelic from "../../public/assets/psychedelic.jpg"

export default function Sale({ blogContent, ...props }) {
    const bannerStyling = { 
        position: 'relative', 
        textAlign: 'center',
        display: 'grid',
        padding: '1.2em',
        borderRadius: '0px',
        background: 'transparent',
        aspectRatio: '4/6'
    }
    const templateBg = `https://picsum.photos/100/100`
    return (
        <>
            <section className={styles.content_container}>
            {/* <BgWithBlur bg={psychedelic} height='100%' width='100%' imgPos='center'/> */}
                <Typography variant="h4" className={styles.section_heading}>Sale Product</Typography>
                <article className={styles.card_container}>
                    {
                        blogContent ?
                        blogContent.map((textContent, i) => {
                            return (
                                <Card key={i} sx={bannerStyling}>
                                    <BgWithBlur bg={templateBg} height="100%" width="100%" />
                                    <Typography>{textContent}</Typography>
                                    <Button variant="outlined">read more</Button>
                                </Card>
                            )
                        })
                        :
                        [...Array(3)].map((textContent, i) => {
                            return (
                                <Card key={i} sx={bannerStyling}>
                                    <BgWithBlur bg={templateBg} height="100%" width="100%" />
                                    <Typography>Refresh or contact the devs Refresh or contact the devs Refresh or contact the devs Refresh or contact the devs Refresh or contact the devs</Typography>
                                    <Button variant="filled" sx={{width: '80%', 
                                                                    backgroundColor: 'white',
                                                                    borderRadius: '300px',
                                                                    alignSelf: 'flex-end',
                                                                    justifySelf: 'center'
                                                                    }}>read more</Button>
                                    
                                </Card>
                            )
                        })
                    }
                </article>
            </section>
        </>
    )
}