import React, { useState } from "react";
import "../css/search.css"
import CollegeButton from "./collegeButton";
import MajorButton from "./majorButton";
import TrackButton from "./trackButton";
import searchData from "../data/search.json"

const EssentialTable=({tracks, setTracks})=>{
    const [majorItem,setMajor]=useState([]);
    const changeMajorItem=(props)=>{
        setMajor(props);
        setTrack([]); //다른 단과대를 누를 때를 대비
        setTracks([]);
    }

    const [trackItem,setTrack]=useState([]);
    const changeTrackItem=(props)=>{
        setTrack(props);
        console.log(trackItem.map(data=>data));
        setTracks(trackItem.map(data=>data));
    }
    return (
    <table id="search" cellPadding="5" cellSpacing="0" border="1" >
            <colgroup>
                    <col width={"15%"}></col>
                    <col width={"85%"}></col>
            </colgroup>
            <tr>
                <th>단과대</th>
                <td>
                    <CollegeButton searchData={searchData} changeMajorItem={changeMajorItem}/>
                </td>
            </tr>
            <tr>
                <th>학부</th>
                <td>
                    <MajorButton majorItem={majorItem} changeTrackItem={changeTrackItem}/>
                </td>
            </tr>
            <tr>
                <th>트랙</th>
                <td>
                    <TrackButton tracks={tracks} trackItem={trackItem} setTracks={setTracks}/>
                </td>
            </tr>
        </table>)
}
export default EssentialTable;