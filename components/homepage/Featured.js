import React, { useEffect, useState } from "react";
import styles from '../../styles/featured.module.css';
import Image from "next/image";
import CardGrid from "../CardGrid";
import BgWithBlur from "../BgWithBlur"
import heroBg from '../../public/assets/hero_bg.jpg';


export default function Featured({products, ...props}){
    const [isLoading, setLoading] = useState(true)
  
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    }, [])
    
    return (
        <>
        <section className={styles.featured_container}>
            <BgWithBlur nobg imgContainerStyle={styles.bgPattern} height={'100%'} width={'100%'}/>
            <h2  className={styles.featured_heading}>Most Popular Products</h2>
            {
                isLoading ?
                    <CardGrid itemList={products} loading/>
                    :
                    <CardGrid itemList={products} productLimit='30' />
            }
        </section>
        </>
    )
}