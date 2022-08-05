import React from "react";
import Card from "./Card";


export default function CardGrid({ itemList, ...props }) {
    return (
        // Move the inline style to a file or global.
        <section style={{display: 'grid', 
                        gridTemplateColumns: `repeat(auto-fill, minmax(100px, 200px))`, 
                        gap: '10px', 
                        justifyContent: 'space-between', 
                        alignContent: 'center'
                    }}>
            {
                itemList.map((item, key) => <Card

                    key={key}
                    item={item}
                    className='products__card--grid'


                />)
            }
        </section>
    )
}