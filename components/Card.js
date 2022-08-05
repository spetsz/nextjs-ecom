import React from "react";
import Image from 'next/image'



export default function Card({item, className}){

  const {id, thumbnail, title, price, rating} = item

    return(
        <section className={className}>
            <article id={id} className={`${className}--img`}>
                <Image src={thumbnail}
                         width={228}
                         height={177}
                    />
            </article>
            <article id={id} className={`${className}--content`}>
                <h3>{title}</h3>
                <li>{price}</li>
                <li>{rating}</li>
                <button>Add to card</button>
            </article>
        </section>
    )
}