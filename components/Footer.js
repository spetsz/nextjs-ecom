import React, { useState, useEffect } from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";
import { Button, Typography, TextField, FormControl, InputLabel, Input, FormHelperText } from '@mui/material/';
import psychedelic from "../public/assets/psychedelic.jpg"
import BgWithBlur from "./BgWithBlur";
import { BsFacebook, BsInstagram, BsTwitter, BsTwitch } from "react-icons/bs"

export default function Footer() {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <BgWithBlur bg={psychedelic} height='100%' width='100%' imgPos='center' imgBlur={'4px'} />
                <section className={styles.footer_container}>
                    <article className={styles.article_container}>
                        <Typography variant='h4'>Newsletter</Typography>
                        <form action="/">
                            <input className={styles.form_input} placeholder='Enter your email here' type="text"></input>

                            <Button className={styles.form_btn}
                                type='submit'
                                variant="contained"
                                sx={{ borderRightRadius: '100px' }}
                            >Join
                            </Button>

                        </form>
                        <Typography variant='p'>sign up for exclusive offers skin care tips, eco-friendly ideas and get 20% off your 1st purchase!</Typography>
                    </article>
                    <article className={styles.article_container}>
                        <Typography variant='h4'>Follow us</Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                            <Link href={'#'}><BsFacebook /></Link>
                            <Link href={'#'}><BsInstagram /></Link>
                            <Link href={'#'}><BsTwitter /></Link>
                            <Link href={'#'}><BsTwitch /></Link>
                        </div>
                    </article>
                </section>
                <section className={styles.copyright_container}>
                    <Typography variant='p'>copyright and stuff. Wirklich.</Typography>
                </section>
            </div>
        </>
    )
}