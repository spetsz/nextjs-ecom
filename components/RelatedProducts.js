import { useRouter } from 'next/router'
import styles from '../styles/product.module.css'


const RelatedProducts = ({product}) => {
    const {related_products, product_header, product_image, product_actions, price} = styles
    const router = useRouter()
  return (
    
    <div className={related_products}>

        {
            // It is hardcoded for now to ouptput same product three times
        }

        <div className={styles.product}>
            <div className={product_header}>
                <img src={product.thumbnail} className={product_image} />
                <h2>{product.title}</h2>
            </div>

            <div className={product_actions}>
                
                <div className={price}>
                    $ {product.price},00
                </div>
                <button onClick={() => router.push('/products/order') } className={styles.actions_btn}>BUY NOW</button>

            </div>
        </div>

        <div className={styles.product}>
            <div className={product_header}>
                <img src={product.thumbnail} className={product_image} />
                <h2>{product.title}</h2>
            </div>

            <div className={product_actions}>
                
                <div className={price}>
                    $ {product.price},00
                </div>
                <button onClick={() => router.push('/products/order') } className={styles.actions_btn}>BUY NOW</button>

            </div>
        </div>

        <div className={styles.product}>
            <div className={product_header}>
                <img src={product.thumbnail} className={product_image} />
                <h2>{product.title}</h2>
            </div>

            <div className={product_actions}>
                
                <div className={price}>
                    $ {product.price},00
                </div>
                <button onClick={() => router.push('/products/order') } className={styles.actions_btn}>BUY NOW</button>

            </div>
        </div>

       

    </div>

    
  )
}

export default RelatedProducts