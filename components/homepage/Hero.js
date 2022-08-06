import React from "react";
import styles from '../../styles/hero.module.css';
import Image from "next/image";
<<<<<<< HEAD

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
=======
import heroBg from '../../public/hero_bg.jpg'

export default function Hero(){
    return (
        <>
        <section className={styles.hero__container}>
            <article className={styles.hero__imgContainer}>
                <Image src={heroBg}
                    layout="fill"
                    objectFit="cover"
                    priority
                    />
            </article>
            <article className={`${styles.hero__imgContainer} ${styles.glassmorph_high}`}></article>
            <article>
                welcome to the party.
            </article>
        </section>
>>>>>>> 6b8127f951a28997faacc6cf71f8bd8404459f17
        </>
    )
}