import React from "react";
import { useState, useEffect } from "react";
import {DiReact} from "react-icons/di";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import BgWithBlur from "./BgWithBlur";
import heroBg from '../public/assets/hero_bg.jpg';

export default function Navbar({links, ...props}){
    return (
        <>
        <nav className={styles.navbar_container }>
            <BgWithBlur bg={heroBg} height={'45px'} width={'100vw'} imgPos="0px 0px"/>
        {
        // Dynamic links with the following. Need to decide on the type/ category of links before uncommenting the code below.
            links &&
            links.map(({link, title}, i)=>(
                <div key={i}>
                    <Link href={link}><a>{title}</a></Link>
                </div>
            ))
        }
        </nav>
        </>
    )
}