import React,{useState} from "react";
import "../css/search.css"
import ButtonLabel from "./buttonLabel";

const TrackButton=({trackItem})=>{
    const [color,setColor]=useState(-1);
    const temp=()=>(null)
    return(
    <>
    {  
        trackItem.map((data,i)=>
            <ButtonLabel key={i}
            color={i===color}
            index={i}
            item={null}
            content={data}
            changeItem={temp}
            onSelect={setColor}/>
        )
    }
    </>);
}
export default TrackButton;