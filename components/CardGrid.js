import React from "react";
import Card from "./Card";


export default function CardGrid({itemList, ...props}){
    return(
        <section className="card-grid">
        {
            itemList.map((item) => <Card id={item.id}
                                        class='products__card--grid'
                                        title={item.title}
                                        thumbnail={item.thumbnail}
                                        price={item.price}
                                        rating={item.rating}
                                                />)
        }
        </section>
    )
}