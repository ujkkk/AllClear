import React,{useEffect, useState} from "react";
import "../css/search.css"
import TrackLabel from "./trackLabel";

const TrackButton=({tracks, trackItem, setTracks})=>{

    useEffect(()=>{
        if(tracks.length===0){
            setTracks(trackItem.map(data=>data));
        }
    },[tracks]);

    const setSubjectTracks=(prop)=>{
        if(prop==="전체"){
            setTracks(trackItem.map(data=>data));
            return;
        }
        if(tracks.includes("전체")&&tracks.includes(prop)){
            setTracks(tracks.filter(item=>prop===item))
            return;
        }
        if(tracks.includes(prop))
            setTracks(tracks.filter(item=>prop!==item))
        else{
            setTracks([...tracks.filter(item=>item!=="전체"),trackItem.filter(item=>prop===item).join()]);
        }
    }
   

    return(
    <>
    {  
        trackItem.map((data,i)=>
            <TrackLabel key={i}
            color={tracks.filter(item=>item===data).join()===data}
            index={i}
            item={i}
            content={data}
            setData={setSubjectTracks}/>
        )
    }
    </>);
}
export default TrackButton;