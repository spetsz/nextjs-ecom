import React from "react";
import Image from "next/image";



export default function BgWithBlur({ bg, height, width, imgContainerStyle, ...props }) {
    let fixedStyle = {
        position: 'absolute',
        overflow: 'hidden',
        height: '100px',
        width: '100px',
        zIndex: '-1'
    }
    fixedStyle.width = width
    fixedStyle.height = height

    return (
        <>
            {/* Background Image */}
            <article className={imgContainerStyle}
                style={fixedStyle}
            >
                <Image src={bg}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </article>
            {/* The following article tag is responsible for the frosted glass effect on top of the bg  */}
            <article className={`${imgContainerStyle} glassmorphHigh`}
                style={fixedStyle}
            >
            </article>
        </>
    )
}