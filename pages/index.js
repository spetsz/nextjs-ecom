import React from "react"
<<<<<<< HEAD
import Hero from "../components/homepage/Hero"
export default function Home() {
  return (
    <Hero/>
=======
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
>>>>>>> 6b8127f951a28997faacc6cf71f8bd8404459f17
  )
}
