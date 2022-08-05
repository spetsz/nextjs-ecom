import React from "react";
import Image from 'next/image'
import styles from "../styles/card.module.css";



export default function Card({ item, className, key }) {

    const { thumbnail, title, price, rating, description } = item

    return (
        <section key={key} className={styles.card__container}>
            {/* <article className={styles.card__img_container}> */}
            <article className={styles.card__img_container}>
                <Image src='https://picsum.photos/200/180'
                    width={200}
                    height={177}
                />
            </article>
            <article className={styles.card__body} >
                <h3 className={styles.card__body__title}>{title}</h3>
                <p className={styles.card__body__description}>{description}</p>
                <p>{price}</p>
                <button className={styles.card__btn}>Add to card</button>
            </article>
        </section>
    )
}