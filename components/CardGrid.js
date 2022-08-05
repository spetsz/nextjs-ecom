import React from "react";
import Card from "./Card";
import styles from '../styles/cardGrid.module.css'


export default function CardGrid({ itemList, ...props }) {
    return (
        <section className={styles.card_container}>
            {
                itemList.map((item, key) => <Card

                    key={key}
                    item={item}
                    className='products__card--grid'
                />)
            }
        </section>
    )
}