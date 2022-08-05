import React from "react";
import Image from 'next/image'
<<<<<<< HEAD
import Link from "next/link";
=======
import styles from "../styles/card.module.css";

>>>>>>> 064856eb8b3157dcf7d4e4df67790976ac4bfcbc


export default function Card({ item, className, key }) {

    const { thumbnail, title, price, rating, description } = item

<<<<<<< HEAD
    return(
        <section className={className}>
            <article id={id} className={`${className}--img`}>
                <Link href={`/products/${id}`} >
                    <Image src={thumbnail}
                            width={228}
                            height={177}
                        />

                </Link>
                
              
=======
    return (
        <section key={key} className={styles.card__container}>
            <article className={styles.card__img_container}>
                <Image src='https://picsum.photos/350/300'
                    width={250}
                    height={177}
                />
>>>>>>> 064856eb8b3157dcf7d4e4df67790976ac4bfcbc
            </article>
            <article className={styles.card__body} >
                <h3 className={styles.card__body__title}>{title}</h3>
                <p className={styles.card__body__description}>{description}</p>
                <p>{price}</p>
                <button className={styles.card__body__btn}>Add to card</button>
            </article>
        </section>
    )
}