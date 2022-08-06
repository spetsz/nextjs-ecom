import React from "react";
import CardGrid from "../../components/CardGrid";

export async function getStaticProps(){
    const res = await fetch('https://dummyjson.com/products?limit=1')
    const props = await res.json()
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