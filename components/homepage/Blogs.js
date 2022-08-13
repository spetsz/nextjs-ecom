import React, {useEffect, useState} from "react";
import styles from "../../styles/blogs.module.css"
import { Typography } from "@mui/material";
import { Paper, Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import Carousel from "react-material-ui-carousel";




export default function Blog(props) {
    const [blogData, setBlogData] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/posts?limit=5')
            .then((res) => res.json())
            .then((data)=> setBlogData(data.posts))
    }, [])
    
    return (
        <>
        <section className={styles.section_container}>
            <Typography className={styles.section_heading} variant="h4">Our Blogs </Typography>
            <Carousel 
                    animation="slide" 
                    autoPlay
                    stopAutoPlayOnHover
                    // height={'500px'}
                    navButtonsAlwaysVisible
                >
                {
                    blogData &&
                    blogData.map((item, i) => {
                        return (
                            <Paper key={i} item={item} className={styles.carousel_slide}>
{/* !!                       CHANGE THIS WHEN RECEIVING DATA FROM ACTUAL API */}
                                <Typography>{item.body}</Typography>
                                <Button className="CheckButton">
                                    <Typography>read more<BsArrowRight/></Typography>
                                </Button>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </section>
        </>
    )
}