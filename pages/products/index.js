import React from "react";
import CardGrid from "../../components/CardGrid";

export async function getStaticProps(){
    const res = await fetch('https://dummyjson.com/products?limit=15')
    const props = await res.json()
    let {} = props
    return {
        props
    }
}

export default function Products({products ,...props}){
    return (
        <>
            <CardGrid itemList={products} />
        </>
    )
}