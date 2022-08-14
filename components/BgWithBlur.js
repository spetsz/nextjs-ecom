import React from "react";
import Image from "next/image";



export default function BgWithBlur({ imgPos, imgBlur, nobg, bg, height, width, imgContainerStyle, ...props }) {
    let fixedStyle = {
        position: 'absolute',
        overflow: 'hidden',
        height: '100px',
        width: '100px',
        zIndex: '-1',
        backdropFilter: 'blur(11.8px)'
    }
    let glassmorphHigh = {
        /* From https://css.glass */
        background: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(11.8px)',
        // -webkit-backdrop-filter: blur(11.8px),
    }

    let glassmorphLow = {
        /* From https://css.glass */
        background: 'rgba(255, 255, 255, 0.006)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(4px)',
        // -webkit-backdrop-filter: blur(4px),
    }

    if (height)
        fixedStyle.height = height
    if (width)
        fixedStyle.width = width
    if (imgBlur){
        fixedStyle.backdropFilter = `blur(${imgBlur})` 
    }

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
            <article className={`${imgContainerStyle}`}
                style={fixedStyle
                }
            >
            </article>
        </>
    )
}