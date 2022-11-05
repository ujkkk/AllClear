import React from "react";

const TrackLabel=({color,index,content,setData})=>{
    const styleColor=color?"#4470C7":"gray";
   
    return(
     <label key={index} style={{border:"2px solid "+styleColor}}>{
             <div key={index} onClick={()=>{setData(content);}}>{content}</div>
     }</label>
     );
 }
 export default TrackLabel;