import React, { useState } from "react";
import "../../css/presetBtn.css"
const PresetRowElement = ({ total = 3, onSelect = f=>f}) =>{ 
    const [select, setSelect] = useState([true,false,false])//useState(false);
    const createArray = length => [...Array(length)];
    const clickPreset = (i) => {
        console.log("isSelect: "+!select)
        let isSelect = !select[i]
        let other = !isSelect;
        setSelect(select.map((data,idx)=> i == idx ? isSelect : other))
        //(i) => onSelect
    }

    return (
        createArray(total).map((n,i) =>
            <label>
                <div className = "preset-btn" style = {{ backgroundColor: select[i]? "blue" : "gray"}}>{i+1}</div>   
                <input onChange = {()=>clickPreset(i)} type="radio" value = {i+1} name={"preset"} style={{display:"none"}}></input>
            </label>
        )   
    )
}

export default PresetRowElement;