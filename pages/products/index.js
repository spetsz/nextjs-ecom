import React from "react";
import CardGrid from "../../components/CardGrid";
import Sidebar from "../../components/Sidebar";
export async function getStaticProps(){
    const res = await fetch('https://dummyjson.com/products?limit=10')
    const props = await res.json()
    return {
        props
    }
}

export default function Products({products ,...props}){
    return (
        <>
        <section style={{display:'flex'}}>
            <Sidebar/>
            <CardGrid itemList={products} style={{flexBasis: '100%'}}/>
        </section>
        </>
    )
}