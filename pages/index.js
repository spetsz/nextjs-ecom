import React from "react"
import Featured from "../components/homepage/Featured"
import Hero from "../components/homepage/Hero"

export async function getStaticProps(){
    const res = await fetch('https://dummyjson.com/products?limit=6')
    const props = await res.json()
    return {
        props
    }
}

export default function Home({products, ...props}) {
  return (
  <>
    <Hero/>
    <Featured products={products}/>
  </>
  )
}
