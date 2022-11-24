import React from "react";

const TrackLabel=({color,index,content,setData})=>{
    const styleColor=color?"3px solid #4470C7":"2px solid gray";
   
    return(
     <label key={index} style={{border:styleColor}}
                onClick={()=>{setData(content);}}>{content}
     </label>
     );
 }
 export default TrackLabel;