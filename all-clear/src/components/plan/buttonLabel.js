import React, { useEffect } from "react";
import "../../css/essential.css"


const ButtonLabel=({color,index,item, content,changeItem,onSelect})=>{
   const styleColor=color?"3px solid #4470C7":"2px solid gray";
   useEffect(()=>{
        onSelect(-1);
        return ()=>{
                onSelect(-1);
        }
   },[onSelect])
   return(
    <label key={index} style={{border:styleColor}} 
                onClick={()=>{onSelect(index);changeItem(item);}}>
            {content}
    </label>
    );
}
export default ButtonLabel;