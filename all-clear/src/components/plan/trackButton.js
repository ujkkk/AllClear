import React,{useEffect} from "react";
import "../../css/essential.css"
import TrackLabel from "./trackLabel";

const TrackButton=({tracks, trackItem, changeTracks})=>{
    //tracks 배열이 0일 때 다시 전체 상황으로
    useEffect(()=>{
        if(tracks.length===0){
            changeTracks(trackItem.map(data=>data));
        }
        if((tracks.length)===(trackItem.length-1)){
            changeTracks(trackItem.map(data=>data));
        }
    },[tracks,trackItem,changeTracks]);
    const setSubjectTracks=(prop)=>{
        if(prop==="전체"){
            changeTracks(trackItem.map(data=>data));
            return;
        }
        if((tracks.indexOf("전체")!==-1)&&(tracks.indexOf(prop)!==-1)){
            changeTracks(tracks.filter(item=>prop===item))
            return;
        }
        (tracks.indexOf(prop)!==-1)?
        changeTracks(tracks.filter(item=>prop!==item))
        :changeTracks([...tracks.filter(item=>item!=="전체"),trackItem.filter(item=>prop===item).join()]);
        
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