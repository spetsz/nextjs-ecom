import React from "react";
import ProductsPage from "../../components/productsPage/ProductsPage";


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
            <ProductsPage products={products}/>
        </>
    )
}