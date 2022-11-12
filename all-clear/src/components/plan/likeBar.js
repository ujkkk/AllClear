import React, { useState } from "react";
import ClassComponent from "./classComponent";

const LikeBar=({subject_id=0,classes=[]})=>{
    
    const [likes, setLikes] = useState(Array.from({length : classes.length}, ()=>false));
    const toggleLike = (index) =>{
        const newLikes = likes.map((like, i) => index == i ? !like : like);
        setLikes(newLikes);
    }

    
    // 하트 클릭에 따라 id 와 분반 정보를 preSet용 배열에 삽입
    // 누른 class 정보 필요

    return (
        classes.map((aClass, i) =>  
        <ClassComponent key={i} aClass={aClass} like ={likes[i]}  onSelect={() =>toggleLike(i)} />)
   
    );
}
export default LikeBar;