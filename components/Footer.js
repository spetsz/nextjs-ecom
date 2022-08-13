import React from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";
import TextField from '@mui/material/TextField';
import {Button, Typography} from '@mui/material/';


export default function Footer(){
    return(
        <section className={styles.footer_container}>
            <h2>FOOTER COMPONENT HERE</h2>
            <TextField text='a'/>
            <Button variant="text">Submit</Button>
        </section>
    )
}