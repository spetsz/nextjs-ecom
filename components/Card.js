import React from "react";
import Image from 'next/image'
import Link from "next/link";


export default function Card({item, className}){

  const {id, thumbnail, title, price, rating} = item

    return(
        <section className={className}>
            <article id={id} className={`${className}--img`}>
                <Link href={`/products/${id}`} >
                    <Image src={thumbnail}
                            width={228}
                            height={177}
                        />

                </Link>
                
              
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