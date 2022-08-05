import React from "react";
import Card from "./Card";


export default function CardGrid({itemList, ...props}){
    return(
        <section className="card-grid">
        {
            itemList.map((item, i) => <Card 
                                       
                                        key={i}
                                        item={item}
                                        className='products__card--grid'
                                     

                                    />)
        }
        </section>
    )
}