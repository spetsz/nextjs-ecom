import React from "react";
import { useState } from "react";
import styles from "../styles/sidebar.module.css";
import {BsChevronBarRight} from "react-icons/bs";


export default function Sidebar(){
    const [collapse, toggleCollapse] = useState([{maxWidth: '500px',paddingInline: '30px'}, {transform: 'rotate(180deg)'}])
    const collapseSidebar = ()=>{
        console.log(collapse)
        if (collapse[0].maxWidth == '0px')
            toggleCollapse([{maxWidth: '500px',paddingInline: '30px'}, {transform: 'rotate(-540deg)'}])
        else
            toggleCollapse([{maxWidth: '0px',paddingInline: '0px'}, {transform: 'rotate(0deg)'}])
        console.log(collapse)
        
    }
    return(
    <>
        <section className={styles.sidebar_container} 
            style={collapse[0]}>
            <h2>I love kebab</h2>
            <hr/>
            Product Group
            <ul>
                <li>Foobar</li>
                <li>Foobar</li>
                <li>Foobar</li>
                <li>Foobar</li>
                <li>Foobar</li>
                <li>Foobar</li>
            </ul>
        </section>
        <button className={styles.collapse_btn} style={collapse[1]} onClick={collapseSidebar} ><BsChevronBarRight/></button>
    </>
    )
}