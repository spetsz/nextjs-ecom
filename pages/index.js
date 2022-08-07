import React from "react"
import Hero from "../components/homepage/Hero"
import Featured from "../components/homepage/Featured"
import Sale from "../components/homepage/Sale";
import Blogs from "../components/homepage/Blogs";

////////////////////////////////////////////////////////////
//* All this needs to be a prop *//
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
import Image from "next/image";
import heroBg from '../public/assets/hero_bg.jpg';
import logo0 from '../public/assets/hero\ logos/ducati.jpg';
import logo1 from '../public/assets/hero\ logos/mvAgusta0.jpg';
import logo2 from '../public/assets/hero\ logos/mvAgusta1.jpg';
import logo3 from '../public/assets/hero\ logos/mvAgusta2.jpg';
import logo4 from '../public/assets/hero\ logos/mvAgusta3.jpg';
import logo5 from '../public/assets/hero\ logos/mv_transparent.png';
import logo6 from '../public/assets/hero\ logos/mv1_transparent.png';
const heroData = [
  { categoryName: 'In the name of love', logo: logo0 },
  { categoryName: 'step inside', logo: logo1 },
  { categoryName: 'Ive been humble too long', logo: logo2 },
  { categoryName: 'lights camera action', logo: logo3 },
  { categoryName: 'rock it up rock it up', logo: logo4 },
  { categoryName: 'rock it up rock it up', logo: logo5 },
  { categoryName: 'rock it up rock it up', logo: logo6 }
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


let Home
export default Home = ({products, ...props}) => {
  return (
  <>
    <Hero slides={heroData}/>
    <Featured products={products}/>
    <Sale/>
    <Blogs/>
  </>
  )
}