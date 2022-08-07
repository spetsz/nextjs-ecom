import axios from "axios"
import styles from '../../styles/product.module.css'
import { useState } from "react"
import RatingComp from "../../components/Rating"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from "next/router";

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
    const [qnty, setQuantity] = useState(1)
    const router = useRouter()

    const addToCart = (product, quantity) =>{
        const cart = localStorage.getItem('cart')
        if(!cart){

            localStorage.setItem('cart', JSON.stringify({
                products : [{product, quantity }]
                
            }))

        }else{
            
            const cartObject = JSON.parse(cart)
            cartObject.products.push({product,quantity})
            localStorage.setItem('cart', JSON.stringify(cartObject))
        }
    }

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
                            <img className={card_image} src={product.thumbnail} />
                        </div>
                        

                        <div className={card_content}>

                            <h2 className={card_title}>{product.title}</h2>
                            
                            <div className={card_rating}>

                                {
                                // I'm outputting produt in stock number for now, but later that should be the number of actual ratings
                                }

                                <RatingComp rating={product.rating} /> ({product.stock})

                            
                            </div>
                            <div>
                                {product.description}
                            </div>

                            <div className={price}>
                            $ {product.price},00
                            </div>

                            <div className={quantity}>
                                <button className={btn_transparent} type="button" onClick={ ()  => setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1)}>-</button>
                                {qnty}
                                <button className={btn_transparent}  type="button" onClick={() => setQuantity(prevQuantity => prevQuantity < product.stock ? prevQuantity + 1 : product.stock)}>+</button>
                            </div>

                            <div className={actions}>
                                <button onClick={() => addToCart(product, qnty)} type="button" className={add_to_cart} > <ShoppingCartIcon /> ADD TO BASKET</button>
                                <button onClick={() => router.push('/products/order') } className={actions_btn}>BUY NOW</button>
                            </div>

                        </div>
                    </div>

                    <div className={card_bottom}>
                 
                            

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu tortor sit amet purus aliquam mollis ac quis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id eros a ligula dictum efficitur non eu libero. Donec quis aliquam felis. Aliquam consectetur luctus venenatis. Fusce nec enim faucibus, iaculis mauris ullamcorper, ultrices libero. Suspendisse potenti. In vitae nulla nibh.

                            Fusce sed neque consequat, vehicula nisi ut, bibendum urna. Vestibulum sit amet lectus gravida, laoreet tellus id, dictum massa. Curabitur fringilla sapien quam, sit amet luctus purus viverra eu. Cras eget semper nunc. Nullam efficitur consequat suscipit. Integer dapibus elementum diam posuere ultrices. Nullam vestibulum elit vitae lacus gravida, eget auctor dolor sagittis. Sed in fringilla elit.

                            Nulla facilisi. Suspendisse cursus cursus ligula ut ornare. Nam interdum ex ut leo elementum, non molestie quam consequat. Etiam nibh mauris, finibus nec lorem eu, tempor viverra est. Sed at libero justo. Sed sagittis nisl non magna lacinia, eu tincidunt sapien sodales. Phasellus vehicula magna non purus condimentum efficitur. Vivamus tempus ligula ac risus vehicula, convallis auctor orci rhoncus. Etiam ac augue nulla. Vivamus placerat in lorem consequat congue. Suspendisse potenti. Curabitur aliquet lorem quis enim mattis aliquet. Sed vitae aliquam dolor, ut finibus diam. Cras quis dolor tempor, tristique odio sit amet, malesuada enim. Pellentesque elementum quis ipsum a mollis. Suspendisse id dignissim tellus.

                            Donec cursus mauris nec nibh dignissim sodales vel sed turpis. Phasellus egestas, tellus in finibus mattis, elit mauris congue leo, sed convallis dui sem nec lorem. Quisque lorem velit, tristique ut tristique ut, commodo et turpis. Phasellus quis velit nec nisi dignissim scelerisque ac id erat. Ut semper ipsum et faucibus sagittis. Proin condimentum sem at ligula lobortis, at elementum elit vestibulum. Nulla pulvinar facilisis ex et rutrum. Curabitur vel massa ornare, lobortis erat fringilla, maximus nulla. Phasellus eu auctor lectus.

                            Sed nec nulla tellus. Sed vestibulum mollis consectetur. Morbi pretium nunc suscipit tortor aliquet, ullamcorper sollicitudin augue tempus. Donec vulputate felis molestie faucibus commodo. Fusce at lacus tincidunt, tristique ante vel, porta neque. Cras vestibulum sapien eget volutpat aliquam. Praesent cursus libero tincidunt pulvinar mollis. Fusce ac mauris ipsum. Cras ut libero gravida, fringilla justo eget, vestibulum est. Suspendisse potenti. Donec in sem nec lorem fermentum sagittis. Mauris laoreet dolor eget velit molestie, ac porta est hendrerit. Maecenas vitae laoreet enim. 
                                        
                    </div>

                   

                </div>
                
               


            </div>

            

         </div>


        </>
    )
}