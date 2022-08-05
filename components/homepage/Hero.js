import React from "react";
import styles from '../../styles/hero.module.css';
import Image from "next/image";

// export default Hero = () =>{
export default function Hero(){
    return (
        <>
        is here was
            <Image src='https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                // width='400px'
                // height='100px'
                layout="fill"
                />

            <section className={styles.hero__container}>
                homePage and stuff
            </section>
        </>
    )
}