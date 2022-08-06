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

<<<<<<< HEAD
export default function CardGrid({ itemList, ...props }) {
    return (
        <section className={styles.card_container}>
            {
                itemList.map((item, key) => <Card

                    key={key}
=======
                    key={i}
>>>>>>> 6b8127f951a28997faacc6cf71f8bd8404459f17
                    item={item}
                    className='products__card--grid'
                />)
            }
        </section>
    )
}