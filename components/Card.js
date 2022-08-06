import React from "react";
import Image from 'next/image'
import Link from "next/link";
import styles from "../styles/card.module.css";



export default function Card({ item, className, key }) {

    const { thumbnail, title, price, rating, description, id } = item


    return(
        <section className={className}>
            <article id={id} className={`${className}--img`}>
                <Link href={`/products/${id}`} >
                    <Image src={thumbnail}
                            width={228}
                            height={177}
                        />

                </Link>
                
              

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