import React, { useState } from "react";
import ClassComponent from "./classComponent";

const LikeBar=({classes=[]})=>{
    
    const [likes, setLikes] = useState(Array.from({length : classes.length}, ()=>false));
    const toggleLike = (index) =>{
        const newLikes = likes.map((like, i) => index == i ? !like : like);
        setLikes(newLikes);
    }
    return (
        classes.map((aClass, i) =>  
        <ClassComponent key={i} aClass={aClass} like ={likes[i]}  onSelect={() =>toggleLike(i)} />)
   
    );
}
export default LikeBar;