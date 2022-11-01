import Star from "./Star";
import { useState } from "react";

const createArray = length => [...Array(length)]

const StarRating = ({totalStars = 5}) => {
    const [seletedStars, setSelectedStars] = useState(3);
    return (
        <>
            {createArray(totalStars).map((n,i)=> 
            <Star key={i}
            selected={seletedStars > i}
            onSelect={() => setSelectedStars(i+1)}
            />)}
            <p>{seletedStars} of {totalStars} stars</p>
        </>
    )
    
}
export default StarRating;