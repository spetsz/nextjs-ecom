import React from "react";
import Image from 'next/image'



export default function Card(props){
    return(
        <section className={props.class}>
            <article id={props.id} className={`${props.class}--img`}>
                <Image src={props.thumbnail}
                        // width={228}
                        // height={177}
                    />
            </article>
            <article id={props.id} className={`${props.class}--content`}>
                <h3>{props.title}</h3>
                <li>{props.price}</li>
                <li>{props.rating}</li>
                <button>Add to card</button>
            </article>
        </section>
    )
}