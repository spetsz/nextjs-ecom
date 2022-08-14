import React from "react";
import Image from 'next/image'
import Link from "next/link";
import styles from "../styles/card.module.css";
// Notice! Card imported as MuiCard to avoid clash with the default export component in current file
import {Card as MuiCard, CardActions, CardContent, CardMedia} from "@mui/material/"
import { Typography , Button} from "@mui/material";
import {BsCurrencyDollar} from "react-icons/bs";



export default function Card({ item, className, key }) {

    const {id, thumbnail, title, price, rating, description } = item
    return(
        <MuiCard key={id}
                sx={{
                    borderRadius: 0,
                    aspectRatio: '4/5',
                    boxShadow: 'none',
                    backgroundColor: 'transparent'
                }}
            >
                <Link href={`/products/${id}`} >
                    <CardMedia 
                        sx={{cursor: 'pointer'}}
                        height='60%'
                        component='img'
                        image={thumbnail}
                        alt=''
                    />
                </Link>
                <CardContent className={styles.contentContainer}
                            sx={{
                    margin: '0px',
                    padding: 0
                }}>
                    <Typography color={'white'} variant='h6' >{title}</Typography>
                    <Typography variant="body2" color="white"
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                        }}
                        >{description}</Typography>
                    <Typography fontSize={'1.5rem'} variant='span' color={'white'}><BsCurrencyDollar/>{price}</Typography>
                    <Button variant="outlined"
                            size='small'
                            sx={{
                                borderRadius: 0,
                                bowShadow: 'none',
                                float: 'right',
                            }}
                    >Add to card</Button>
                </CardContent>
        </MuiCard >
    )
}