
import React, { useState } from "react";
import { useEffect } from "react";
import CardGrid from "../../components/CardGrid";
import Sidebar from "../../components/Sidebar";
import { BsChevronBarDown } from "react-icons/bs";
import styles from "../../styles/productsPage.module.css"




export default function ProductsPage({ products, ...props }) {
    let getMoreProducts = ()=>{
        return 'No. Go do it yourself'
    }
    const [isContentLoaded, setContentState] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            console.log("done")
            setContentState(false)
        }, 5000)
    }, [])
    return (
        <>
            <section style={{ display: 'flex' }}>
                
                <Sidebar />
                <main style={{ flexBasis: '100%' }} className={styles.mainContent_container}>
                    {
                        isContentLoaded ? <CardGrid itemList={products} /> :
                            [...Array(10)].map((elem, i)=> <CardGrid key={i} itemList={products} loading/> )
                    }

                    {/* <button onClick={getMoreProducts} className={styles.contentLoad_btn}>
                        <p>LOAD MORE</p>
                        <BsChevronBarDown />
                    </button> */}
                    <div className={styles.bottom_banner}>I AM AN UGLY BANNER! I SERVE NO PURPOSE OTHER THAN TO PESTER THE WEBSITE USERS!</div>
                </main>

            </section>
        </>
    )
}