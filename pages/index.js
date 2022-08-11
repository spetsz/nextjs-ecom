import React from "react"
import Hero from "../components/homepage/Hero"
import Featured from "../components/homepage/Featured"
import Sale from "../components/homepage/Sale";
import Blogs from "../components/homepage/Blogs";
import Navbar from "../components/Navbar";

////////////////////////////////////////////////////////////
//* All this needs to be a prop *//
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
import Image from "next/image";
import heroBg from '../public/assets/hero_bg.jpg';
import logo0 from '../public/assets/hero\ logos/mv1_transparent.png';
import logo1 from '../public/assets/hero\ logos/laptop.png';
import logo2 from '../public/assets/hero\ logos/case.png';
import logo3 from '../public/assets/hero\ logos/sunglasses.png';
import logo4 from '../public/assets/hero\ logos/perfume.png';
const heroData = [
  { categoryName: 'mv agusta', logo: logo0 },
  { categoryName: 'laptop', logo: logo1 },
  { categoryName: 'gaming pc', logo: logo2 },
  { categoryName: 'sunglasses', logo: logo3 },
  { categoryName: 'fragrance', logo: logo4 },
]
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

export async function getStaticProps(){
    const res = await fetch('https://dummyjson.com/products?limit=6')
    const props = await res.json()


    return {
        props,

    }
}

export default function Home({products, ...props}){
  return (
  <>
    <Hero slides={heroData}/>
    <Featured products={products}/>
    <Sale/>
    <Blogs/>
  </>

  )
}