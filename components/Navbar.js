import React from "react";
import { useState } from "react";
import {DiReact} from "react-icons/di";
import Link from "next/link";
import styles from "../styles/navbar.module.css"

// This will move to another file
// let navTempStyle = {
    // position: 'fixed', 
    // top: '0px', 
    // insetInline: '0px',
    // border: 'solid red 2px',
    // minHeight: '60px',
    // zIndex: '10',
    // display: 'flex',
    // gap: '10px',
// }


export default function Navbar({links, ...props}){
    const [pos, setPos] = useState('sticky')
    const setPosition=()=>{
        setPosition('absolute')
        console.log('moving')
    }
    return (
        <>
        <nav style={{position: pos}} 
            className={styles.navbar_container +' '+ styles.glassmorphHigh}
            onScroll={setPosition}
            >
        {
        // Dynamic links with the following. Need to decide on the type/ category of links before uncommenting the code below.
            // links &&
            // links.map(()=>(
            //     <Link href="ToTheGatesOfHell"><a>link this </a></Link>
            // ))
        }
        {/* Can remove these after styling */}
            <Link href="ToTheGatesOfHell"><a>link this </a></Link>
            <Link href="ToTheGatesOfHell"><a>link that </a></Link>
            <Link href="ToTheGatesOfHell"><a>when mom shout </a></Link>
            <Link href="ToTheGatesOfHell"><a>i dont know how to react <DiReact style={{fontSize: '20px'}}/></a></Link>
        </nav>
        </>
    )
}