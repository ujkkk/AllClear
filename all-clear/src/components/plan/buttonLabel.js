import React, { useEffect } from "react";
import "../../css/essential.css"


const ButtonLabel=({color,index,item, content,changeItem,onSelect})=>{
   const styleColor=color?"#4470C7":"gray";
   useEffect(()=>{
        onSelect(-1);
        return ()=>{
                onSelect(-1);
        }
   },[onSelect])
   return(
    <label key={index} style={{border:"2px solid "+styleColor}} 
                onClick={()=>{onSelect(index);changeItem(item);}}>
            {content}
    </label>
    );
}
export default ButtonLabel;