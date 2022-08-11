import React from "react";
import Image from "next/image";



export default function BgWithBlur({imgPos ,nobg, bg, height, width, imgContainerStyle, ...props }) {
    let fixedStyle = {
        position: 'absolute',
        overflow: 'hidden',
        height: '100px',
        width: '100px',
        zIndex: '-1'
    }
    if (height)
        fixedStyle.height = height
    if (width)
        fixedStyle.width = width

    return (
        <>
            {/* Background Image */}
            {
                nobg ?
                <article className={imgContainerStyle}
                    style={fixedStyle}
                >
                </article>
                :
                <article className={imgContainerStyle}
                    style={fixedStyle}
                >
                    <Image src={bg}
                        layout="fill"
                        objectFit="cover"
                        objectPosition={imgPos ? imgPos : 'center'}
                        priority
                    />
                </article>
            }
            {/* The following article tag is responsible for the frosted glass effect on top of the bg  */}
            <article className={`${imgContainerStyle} glassmorphHigh`}
                style={fixedStyle}
            >
            </article>
        </>
    )
}