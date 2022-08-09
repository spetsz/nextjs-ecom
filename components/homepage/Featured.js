import React from "react";
import styles from '../../styles/featured.module.css';
import Image from "next/image";
import CardGrid from "../CardGrid";


export default function Featured({products, ...props}){
    return (
        <>
        <h2>Most Popular Products</h2>
        <CardGrid itemList={products} />
        </>
    )
}