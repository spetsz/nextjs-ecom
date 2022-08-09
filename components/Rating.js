import { Rating } from "@mui/material"

const RatingComp = ({rating}) => {

    return(
        <Rating  
            sx={{color: 'rgb(43, 88, 43)'}} 
            name="read-only" 
            value={rating} 
            readOnly 
            precision={0.5} 
            size="small" 
        />
    )

}


export default RatingComp