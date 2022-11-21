import React, { useEffect, useState } from "react";
import "../../css/gameTableElement.css"
const PresetRowElement = ({ total = 3, onSelect = f=>f }) =>{ 
    
    const[selectNum,setSelect] =useState(1);
    
    const clickPreset = (i) => {
        setSelect(i+1)
    }

    const createArray = length => [...Array(length)];
   
    useEffect(()=>{
        setSelect(1)
        return ()=>{console.log("preset clean-up (display:none이 아닌 조건부 랜더링의 결과)")}
    },[])

    return (
        createArray(total).map((n,i) =>
            <label>
                <div  onClick = {()=>clickPreset(i)}className = "preset-btn" style = {{ backgroundColor:  selectNum == i+1? "blue" : "gray"}}>{i+1}</div>   
                <input onClick = {()=>onSelect({preset:i+1})} type="radio" value = {i+1} name={"preset"} style={{display:"none"}}></input>
            </label>
        )   
    )
}

export default PresetRowElement;