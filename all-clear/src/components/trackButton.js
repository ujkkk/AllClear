import React,{useEffect, useState} from "react";
import "../css/search.css"
import ButtonLabel from "./buttonLabel";

const TrackButton=({trackItem, setTracks})=>{
    const [color,setColor]=useState(-1);

    const temp=(prop)=>(null)
  
    const setSubjectTracks=(prop)=>{
        setTracks(trackItem.filter(item=>prop===item))
    }
   
    useEffect(()=>{
        if(color===-1)
            setColor(0);
   },[color])
    return(
    <>
    {  
        trackItem.map((data,i)=>
            <ButtonLabel key={i}
            color={i===color}
            index={i}
            item={i}
            content={data}
            changeItem={temp}
            onSelect={setColor}
            setData={setSubjectTracks}/>
        )
    }
    </>);
}
export default TrackButton;