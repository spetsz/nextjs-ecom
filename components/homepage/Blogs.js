import React, {useEffect, useState} from "react";
import styles from "../../styles/blogs.module.css"
import { Typography } from "@mui/material";
import { Paper, Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import Carousel from "react-material-ui-carousel";
import BgWithBlur from "../BgWithBlur";
import flow_bg from "../../public/assets/flow_bg.jpg"




export default function Blog(props) {
    const [blogData, setBlogData] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/posts?limit=5')
            .then((res) => res.json())
            .then((data)=> setBlogData(data.posts))
    }, [])
    
    return (
        <div style={{position: 'relative'}}>
            <BgWithBlur bg={flow_bg} height={'100vh'} width={'100vw'} imgBlur={'3px'}/>
        <section className={styles.section_container}>
            <Typography className={styles.section_heading} variant="h4">Our Blogs </Typography>
            <Carousel 
                    animation="slide" 
                    interval="999999999"
                    navButtonsAlwaysVisible
                    className={styles.slide_container}
                >
                {
                    blogData &&
                    blogData.map((item, i) => {
                        return (
                            <Paper key={i} item={item} className={styles.carousel_slide}>
{/* !!                       CHANGE THIS WHEN RECEIVING DATA FROM ACTUAL API */}
                                <Typography variant='h5' className={styles.carousel_heading}>{item.title}</Typography>
                                <Typography variant='p' className={styles.carousel_textContent}>{item.body}</Typography>
                                <Button className={"CheckButton " + styles.carousel_slide_btn}>
                                    <Typography>read more<BsArrowRight/></Typography>
                                </Button>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </section>
        </div>
    )
}