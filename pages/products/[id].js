import axios from "axios"
import styles from '../../styles/product.module.css'
import { useState } from "react"


export const getStaticPaths = async () =>{

    const res = await axios.get('https://dummyjson.com/products?limit=15')
    const {products} = res.data

    const paths = products.map(product =>{
        return {
            params : { id : product.id.toString()}
        }
    } )


    return {
        paths,
        fallback : false
    }
}



export const getStaticProps = async (context) =>{
    const id = context.params.id
    const res = await axios.get(`https://dummyjson.com/products/${id}`)
    const {data} = res


    return {
        props : {product : data}
    }
}

export default function Product({product}){
    
    const {container, wrapper, sidebar, breakline, card,actions_btn, card_top, btn_transparent,card_image_container, price, quantity, actions, card_image, card_content, card_bottom, card_title, add_to_cart, card_rating } = styles
    const [qnty, setQuantity] = useState(0)

    return (
        <>
         
         <div className={container}>

            <div className={wrapper}>

                <div className={sidebar}>
                
                    {product.category}
                    <div className={breakline}></div>
                </div>
               
                <div className={card}>
                    <div className={card_top}>

                        <div className={card_image_container}>
                            <img className={card_image} src={product.images[0]} />
                        </div>
                        

                        <div className={card_content}>

                            <h2 className={card_title}>{product.title}</h2>
                            
                            <div className={card_rating}>
                            
                                {
                                // A ratting component will be added later to display stars, for now just dispaly the rating 
                                    product.rating
                                }

                            
                            </div>

                            <div className={price}>
                            $ {product.price},00
                            </div>

                            <div className={quantity}>
                                <button className={btn_transparent} type="button" onClick={ ()  => setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0)}>-</button>
                                {qnty}
                                <button className={btn_transparent}  type="button" onClick={() => setQuantity(prevQuantity => prevQuantity < product.stock ? prevQuantity + 1 : product.stock)}>+</button>
                            </div>

                            <div className={actions}>
                                <button type="button" className={add_to_cart} >ADD TO BASKET</button>
                                <button className={actions_btn}>BUY NOW</button>
                            </div>

                        </div>
                    </div>

                    <div className={card_bottom}>
                 
                            {product.description}
              
                    </div>

                   

                </div>
                
               


            </div>

            

         </div>


        </>
    )
}