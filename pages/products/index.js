import React from "react";
import CardGrid from "../../components/CardGrid";

export async function getStaticProps(){
<<<<<<< HEAD
    const res = await fetch('https://dummyjson.com/products?limit=15')
=======
    const res = await fetch('https://dummyjson.com/products?limit=1')
>>>>>>> 6b8127f951a28997faacc6cf71f8bd8404459f17
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