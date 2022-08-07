import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from '../../styles/hero.module.css';
import Image from "next/image";
import heroBg from '../../public/assets/hero_bg.jpg';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

export default function Hero({ slides }) {
    const [translateAmount, setTranslateAmount] = useState(0)
    const [currentRadio, setCurrentRadio] = useState(0)

    // Previous <- slide. The one to the left. Same effect as swipe right.
    let goLeft = () => {
        if (translateAmount >= 0) {
            setTranslateAmount(-(slides.length - 1) * 100)
            setCurrentRadio(-(slides.length - 1) * 100)
        } else {
            setTranslateAmount(translateAmount + 100)
            setCurrentRadio(translateAmount + 100)
        }
    }
    // Next -> slide. The one to the right. Same effect as swipe left.
    let goRight = () => {
        if (translateAmount <= -(slides.length - 1) * 100) {
            setTranslateAmount(0)
            setCurrentRadio(0)
        }
        else {
            setTranslateAmount(translateAmount - 100)
            setCurrentRadio(translateAmount - 100)
        }
    }
    let changeSlidThroughRadio = (e) => setTranslateAmount(e.target.value)
    let selectRadio = (e) => setCurrentRadio(e.target.value)
    let isRadioSelected = (radio) => {
        if (radio == currentRadio)
            return true
        return false
    }

    return (
        <>
            <section className={styles.hero__container}>

                {/* Background Image */}
                <article className={styles.hero__imgContainer}>
                    <Image src={heroBg}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </article>
                {/* The following article tag is responsible for the frosted glass effect on top of the bg  */}
                <article className={`${styles.hero__imgContainer} ${styles.glassmorph_high}`}></article>

                {/* The main content, logo, links, etc */}
                <main className={styles.hero_content}>
                    <section className={styles.carousal_container}
                        style={{ transform: `translateX(${translateAmount}vw` }}>
                        {
                            slides &&
                            slides.map(({ categoryName, logo }, i) => {
                                return (
                                    <div className={styles.carousal_section} key={i}>
                                        <p>{categoryName}</p>
                                        <div className={styles.hero_content__img_container}>
                                            <Image src={logo}
                                                layout='fill'
                                                objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <section className={styles.hero_content__side_radio_btns}>
                        {
                            slides &&
                            slides.map((obj, i) => <input
                                key={i}
                                type="radio"
                                name="transition_value"
                                checked={isRadioSelected(i * (-100))}
                                value={i * (-100)}
                                onClick={changeSlidThroughRadio}
                                onChange={selectRadio}
                            />
                            )
                        }
                    </section>
                    <section className={styles.bottom_control_panel}>
                        <button className={styles.hero_btn} onClick={goLeft}><BsChevronDoubleLeft />Hair Care</button>
                        <Link href=''><a  className={styles.hero_btn} >Body Care</a></Link>
                        <button className={styles.hero_btn} onClick={goRight}>Face Care <BsChevronDoubleRight /></button>
                    </section>
                </main>

            </section>
        </>
    )
}
