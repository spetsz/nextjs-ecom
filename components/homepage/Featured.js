import React from "react";
import styles from '../../styles/featured.module.css';
import Image from "next/image";
import CardGrid from "../CardGrid"



export default function Featured({products, ...props}){
    console.log('inside FEATURE DDD !!', products)
    return (
        <>
        <CardGrid itemList={products} />
        </>
    )
}