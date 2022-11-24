import React from "react";
import "../../css/essential.css"


const TableLabel=({color,index,content,marginValue,onSelect})=>{
   const styleColor=color?"#4470C7":"white";
   const textColor=color?"white":"black"
   return(
    <label style={{border:"2px solid grey",color:textColor,backgroundColor:styleColor, marginRight:marginValue, borderRadius: "10px",cursor:"pointer"}} 
        className="float-right" onClick={()=>{onSelect(index);}}>
                {content}
    </label>
    );
}
export default TableLabel;