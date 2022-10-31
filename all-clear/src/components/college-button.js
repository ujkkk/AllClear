import React, { useState } from "react";
import "../css/search.css"
import ButtonLabel from "./button-label";

const CollegeButton=({searchData, changeMajorItem})=>{
   const [color,setColor]=useState(-1);
    return(
   <>
    {
        Object.keys(searchData).map((data,i)=>
            <ButtonLabel key={i}
            color={i===color}
            index={i}
            item={searchData[data]}
            content={data}
            changeItem={changeMajorItem}
            onSelect={setColor}/>
         
            
        )
    }
    </>);
}
export default CollegeButton;