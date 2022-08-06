import React from "react";
import styles from '../../styles/hero.module.css';
import Image from "next/image";
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
        </>
    )
}