import React from "react";
import Card from "./Card";
import styles from '../styles/cardGrid.module.css'

export default function CardGrid({ itemList, ...props }) {
// itemList is an array
    return (
        <section className={styles.card_container}>
            {
                itemList &&
                itemList.map((item, i) => <Card

                    key={i}
                    item={item}
                    className='products__card--grid'
                />)
            }
        </section>
    )
}