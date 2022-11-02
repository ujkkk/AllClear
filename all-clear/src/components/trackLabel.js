import React, {useEffect} from "react";

const TrackLabel=({color,index,item, content,onSelect,setData})=>{
    const styleColor=color?"#0071FF":"gray";
    useEffect(()=>{
         onSelect(-1);
         return ()=>{
                 onSelect(-1);
         }
    },[onSelect])
    return(
     <label key={index} style={{border:"2px solid "+styleColor}}>{
             <div key={index} onClick={()=>{onSelect(index);setData(content);}}>{content}</div>
     }</label>
     );
 }
 export default TrackLabel;