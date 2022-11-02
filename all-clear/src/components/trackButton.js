import React,{useEffect, useState} from "react";
import "../css/search.css"
import ButtonLabel from "./buttonLabel";

const TrackButton=({tracks, trackItem, setTracks})=>{
    const [color,setColor]=useState(-1);

    const temp=(prop)=>(null)
    const setSubjectTracks=(prop)=>{
        if(prop==="전체"){
            setTracks(["전체"]);
            return;
        }
        if(tracks.includes(prop))
            setTracks(tracks.filter(item=>prop!==item))
        else{
            setTracks([...tracks.filter(item=>item!=="전체"),trackItem.filter(item=>prop===item).join()]);
        }
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
            color={tracks.filter(item=>item===data).join()===data}
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